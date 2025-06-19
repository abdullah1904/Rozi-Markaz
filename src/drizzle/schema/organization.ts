import { pgTable, varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelpers";
import { relations } from "drizzle-orm";
import { JobListingTable } from "./jobListings";
import { OrganizationUserSettingsTable } from "./organizationUserSettings";

export const OrganizationTable = pgTable("organizations", {
    id: varchar().primaryKey(),
    name: varchar().notNull(),
    imageUrl: varchar(),
    createdAt,
    updatedAt
});

export const organizationRelations = relations(OrganizationTable, ({ many }) => {
    return {
        jobListings: many(JobListingTable),
        organizationUserSettings: many(OrganizationUserSettingsTable)
    }
});