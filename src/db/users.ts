import { db } from "@/drizzle/db";
import { UserTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";
import { getUserIdTag, revalidateUserCache } from "./cache/users";

export const insertUser = async (user: typeof UserTable.$inferInsert) => {
    await db.insert(UserTable).values(user).onConflictDoUpdate({
        target: UserTable.id,
        set: user,
    });
    revalidateUserCache(user.id);
}

export const getUser = async (id: string) => {
    "use cache"
    cacheTag(getUserIdTag(id));
    return db.query.UserTable.findFirst({
        where: eq(UserTable.id, id)
    });
}

export const updateUser = async (id: string, user: Partial<typeof UserTable.$inferInsert>) => {
    await db.update(UserTable).set(user).where(eq(UserTable.id, id));
    revalidateUserCache(id);
}

export async function deleteUser(id: string) {
  await db.delete(UserTable).where(eq(UserTable.id, id))
    revalidateUserCache(id);
}