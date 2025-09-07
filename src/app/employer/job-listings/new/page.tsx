import JobListingForm from '@/components/JobListing/JobListingForm'
import { Card, CardContent } from '@/components/ui/card'


const NewJobListingPage = () => {
  return (
    <div className='mx-auto p-4'>
        <h1 className='text-2xl font-bold mb-2'>New Job Listing</h1>
        <p className='text-muted-foreground mb-6'>This doesn't post the listing yet. It just saves a draft.</p>
        <Card>
            <CardContent>
                <JobListingForm/>
            </CardContent>
        </Card>
    </div>
  )
}

export default NewJobListingPage