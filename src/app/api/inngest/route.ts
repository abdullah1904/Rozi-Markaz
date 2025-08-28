import { clerkCreateUser, clerkDeleteUser, clerkUpdateUser}  from "@/lib/inngest/functions/clerk";
import { inngest } from "@/lib/inngest/inngest-client";
import { serve } from "inngest/next";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
        clerkCreateUser,
        clerkUpdateUser,
        clerkDeleteUser,
    ],
});
