import { getGlobalTag, getIdTag, getOrganizationTag } from "@/lib/dataCache";
import { revalidateTag } from "next/cache";

export const getJobListingGlobalTag = ()=>{
    return getGlobalTag('jobListings');
}

export const getJobListingOrganizationIdTag = (organizationId: string) => {
    return getOrganizationTag('jobListings', organizationId);
}

export const getJobListingIdTag = (id: string) => {
    return getIdTag('jobListings', id);
}

export const revalidateOrganizationCache = ({id, organizationId}: {id:string, organizationId: string}) => {
    revalidateTag(getJobListingGlobalTag());
    revalidateTag(getJobListingOrganizationIdTag(organizationId));
    revalidateTag(getJobListingIdTag(id));
}