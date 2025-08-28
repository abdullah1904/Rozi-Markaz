type CacheTag = "users"
    | "organizations"
    | "jobListings"
    | "userNotificationSettings"
    | "userResumes"
    | 'jobListingApplications'
    | 'organizationUsersSettings';


export const getGlobalTag = (tag: CacheTag) => {
    return `global:${tag}` as const;
}

export const getIdTag = (tag: CacheTag,id:string) => {
    return `id:${id}-${tag}` as const;
}