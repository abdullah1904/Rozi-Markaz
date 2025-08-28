import { getUser } from "@/db/users";
import { auth } from "@clerk/nextjs/server"

export const getCurrentUser = async ({ allData = false }: { allData?: boolean }) => {
    const { userId } = await auth();
    return {
        userId,
        user: (allData && userId !=null) ? await getUser(userId) : null,
    }
}