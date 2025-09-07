import { clerkCreateOrganization, clerkCreateUser, clerkDeleteOrganization, clerkDeleteUser, clerkUpdateOrganization, clerkUpdateUser}  from "@/lib/inngest/functions/clerk";
import { inngest } from "@/lib/inngest/inngest-client";
import { serve } from "inngest/next";

export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
        clerkCreateUser,
        clerkUpdateUser,
        clerkDeleteUser,
        clerkCreateOrganization,
        clerkUpdateOrganization,
        clerkDeleteOrganization
    ],
});
