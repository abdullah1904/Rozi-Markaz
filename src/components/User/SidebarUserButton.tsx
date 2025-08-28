import { Suspense } from 'react'
import { auth } from '@clerk/nextjs/server'
import SidebarUserButtonClient from './SidebarUserButtonClient';
import { getCurrentUser } from '@/lib/auth';
import { SignOutButton } from '../AuthButtons';
import { SidebarMenuButton } from '../ui/sidebar';
import { LogOutIcon } from 'lucide-react';

type Props = {}

const SidebarUserButton = async (props: Props) => {
  const { user } = await getCurrentUser({ allData: true });
  if(user == null) {
    return (
      <SignOutButton>
        <SidebarMenuButton>
          <LogOutIcon/>
          <span>Log Out</span>
        </SidebarMenuButton>
      </SignOutButton>
    )
  }
  return (
    <Suspense>
      <SidebarUserButtonClient
        user={user}
      />
    </Suspense>
  )
}

export default SidebarUserButton