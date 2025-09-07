import { db } from "@/drizzle/db"
import { JobListingTable } from "@/drizzle/schema"
import { desc, eq } from "drizzle-orm"
import { cacheTag } from "next/dist/server/use-cache/cache-tag"
import { getJobListingIdTag, getJobListingOrganizationIdTag } from "./cache/jobListings"

export const getMostRecentJobListing = async (orgId: string) => {
    "use cache"
    cacheTag(getJobListingOrganizationIdTag(orgId))
    return db.query.JobListingTable.findFirst({
        where: eq(JobListingTable.organizationId, orgId),
        orderBy: desc(JobListingTable.createdAt),
        columns: {id: true}
    })
}