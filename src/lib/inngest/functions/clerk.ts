import { NonRetriableError } from "inngest";
import { inngest } from "../inngest-client";
import { deleteUser, insertUser, updateUser } from "@/db/users";
import { Webhook } from "svix";
import { env } from "@/data/env/server";
import { insertUserNotificationSettings } from "@/db/userNotificationSettings";

function verifyWebHook({ headers, raw }: { raw: string, headers: Record<string, string> }) {
    return new Webhook(env.CLERK_WEBHOOK_SECRET).verify(raw, headers);
}

export const clerkCreateUser = inngest.createFunction({
    id: "clerk/create-db-user",
    name: "Clerk - Create DB User",
}, {
    event: "clerk/user.created",
}, async ({ event, step }) => {
    // Step to verify the webhook
    await step.run("Verify Webhook", async () => {
        try {
            await verifyWebHook(event.data);
        }
        catch {
            throw new NonRetriableError("Invalid Webhook");
        }
    });
    // Step to create the user in the database
    const userId = await step.run("Create User", async () => {
        const userData = event.data.data;
        const email = userData.email_addresses.find(email => email.id === userData.primary_email_address_id);
        if (!email) {
            throw new NonRetriableError("Primary email address not found");
        }
        insertUser({
            id: userData.id,
            name: `${userData.first_name} ${userData.last_name}`,
            imageUrl: userData.image_url,
            email: email.email_address,
            createdAt: new Date(userData.created_at),
            updatedAt: new Date(userData.updated_at),
        })
        return userData.id;
    });
    // Step to insert user notification settings for the created user
    await step.run("Create User Notification Settings", async () => {
        await insertUserNotificationSettings({ userId });
    });
});

export const clerkUpdateUser = inngest.createFunction({
    id: "clerk/update-db-user",
    name: "Clerk - Update DB User",
}, {
    event: "clerk/user.updated",
}, async ({ event, step }) => {
    // Step to verify the webhook
    await step.run("Verify Webhook", async () => {
        try {
            await verifyWebHook(event.data);
        }
        catch {
            throw new NonRetriableError("Invalid Webhook");
        }
    });
    // Step to update the user in the database
    await step.run("Update User", async () => {
        const userData = event.data.data;
        const email = userData.email_addresses.find(email => email.id === userData.primary_email_address_id);
        if (!email) {
            throw new NonRetriableError("Primary email address not found");
        }
        updateUser(userData.id, {
            name: `${userData.first_name} ${userData.last_name}`,
            imageUrl: userData.image_url,
            email: email.email_address,
            updatedAt: new Date(userData.updated_at),
        })
        return userData.id;
    });
});

export const clerkDeleteUser = inngest.createFunction(
  { id: "clerk/delete-db-user", name: "Clerk - Delete DB User" },
  { event: "clerk/user.deleted" },
  async ({ event, step }) => {
    // Step to verify the webhook
    await step.run("Verify Webhook", async () => {
      try {
        verifyWebHook(event.data)
      } catch {
        throw new NonRetriableError("Invalid webhook")
      }
    })
    // Step to delete the user from the database
    await step.run("Delete User", async () => {
      const { id } = event.data.data;
      console.log(id);

      if (id == null) {
        throw new NonRetriableError("No id found")
      }
      await deleteUser(id)
    })
  }
)