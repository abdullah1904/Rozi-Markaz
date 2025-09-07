import { getMostRecentJobListing } from "@/db/jobListings";
import { getCurrentOrganization } from "@/lib/auth"
import { redirect } from "next/navigation";
import { Suspense } from "react"


const SuspendedEmployerHomePage = async () => {
  const {orgId} = await getCurrentOrganization({allData: false});
  if (orgId == null){
    return null;
  } 
  const jobListing = await getMostRecentJobListing(orgId);
  if (jobListing == null){
    redirect("/employer/job-listings/new")
  }
  else{
    redirect(`/employer/job-listings/${jobListing.id}`)
  }
}

const EmployerHomePage = () => {
  return (
    <Suspense>
      <SuspendedEmployerHomePage />
    </Suspense>
  )
}

export default EmployerHomePage