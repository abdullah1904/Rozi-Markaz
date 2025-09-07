import { Suspense } from 'react'
import { getCurrentOrganization, getCurrentUser } from '@/lib/auth';
import { SignOutButton } from '../AuthButtons';
import { SidebarMenuButton } from '../ui/sidebar';
import { LogOutIcon } from 'lucide-react';
import SidebarOrganizationButtonClient from './SidebarOrganizationButtonClient';

const SidebarOrganizationButton = async () => {
  const [{ user }, { organization }] = await Promise.all([
    getCurrentUser({ allData: true }),
    getCurrentOrganization({ allData: true })
  ])
  if (user == null || organization == null) {
    return (
      <SignOutButton>
        <SidebarMenuButton>
          <LogOutIcon />
          <span>Log Out</span>
        </SidebarMenuButton>
      </SignOutButton>
    )
  }
  return (
    <Suspense>
      <SidebarOrganizationButtonClient
        user={user}
        organization={organization}
      />
    </Suspense>
  )
}

export default SidebarOrganizationButton