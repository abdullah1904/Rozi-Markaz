import { db } from "@/drizzle/db";
import { OrganizationTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";
import { getOrganizationIdTag, revalidateOrganizationCache } from "./cache/organizations";


export const insertOrganization = async (organization: typeof OrganizationTable.$inferInsert) => {
    await db.insert(OrganizationTable).values(organization).onConflictDoUpdate({
        target: OrganizationTable.id,
        set: organization,
    });
    revalidateOrganizationCache(organization.id);
}

export const getOrganization = async (id: string) => {
    "use cache"
    cacheTag(getOrganizationIdTag(id));
    return db.query.OrganizationTable.findFirst({
        where: eq(OrganizationTable.id, id)
    });
}

export const updateOrganization = async (id: string, user: Partial<typeof OrganizationTable.$inferInsert>) => {
    await db.update(OrganizationTable).set(user).where(eq(OrganizationTable.id, id));
    revalidateOrganizationCache(id);
}

export async function deleteOrganization(id: string) {
  await db.delete(OrganizationTable).where(eq(OrganizationTable.id, id))
    revalidateOrganizationCache(id);
}