import { getOrganization } from "@/db/organizations";
import { getUser } from "@/db/users";
import { auth } from "@clerk/nextjs/server"

export const getCurrentUser = async ({ allData = false }: { allData?: boolean }) => {
    const { userId } = await auth();
    return {
        userId,
        user: (allData && userId != null) ? await getUser(userId) : null,
    }
}

export const getCurrentOrganization = async ({ allData = false }: { allData?: boolean }) => {
    const { orgId } = await auth();
    return {
        orgId,
        organization: (allData && orgId != null) ? await getOrganization(orgId) : null,
    }
}