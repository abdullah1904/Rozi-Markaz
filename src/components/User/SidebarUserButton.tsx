import { Suspense } from 'react'
import { auth } from '@clerk/nextjs/server'
import SidebarUserButtonClient from './SidebarUserButtonClient';

type Props = {}

const SidebarUserButton = async (props: Props) => {
  const { userId } = await auth();
  return (
    <Suspense>
      <SidebarUserButtonClient
        user={{
          email: "abdullah@gmail.com",
          name: "Abdullah Zahid",
          // imageUrl: "https://avatars.githubusercontent.com/u/12345678?v=4"
        }}
      />
    </Suspense>
  )
}

export default SidebarUserButton