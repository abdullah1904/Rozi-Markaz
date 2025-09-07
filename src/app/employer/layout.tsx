import AppSidebar from '@/components/AppSidebar'
import SidebarOrganizationButton from '@/components/Organization/SidebarOrganizationButton'
import SidebarNavMenuGroup from '@/components/SidebarNavMenuGroup'
import { SidebarGroup, SidebarGroupAction, SidebarGroupLabel } from '@/components/ui/sidebar'
import { getCurrentOrganization } from '@/lib/auth'
import { ClipboardListIcon, PlusIcon } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { Suspense } from 'react'

type EmployerLayoutProps = {
  children: React.ReactNode
}

const SuspenseSidebar = async ({ children }: EmployerLayoutProps) => {
  const { orgId } = await getCurrentOrganization({ allData: false });
  if (orgId == null) {
    redirect("/organizations/select")
  }
  return (
    <AppSidebar
      content={
        <>
          <SidebarGroup>
            <SidebarGroupLabel>
              Job Listings
              <SidebarGroupAction asChild>
                <Link href="/employer/job-listings/new">
                  <PlusIcon /> <span className='sr-only'>Add Job Listing</span>
                </Link>
              </SidebarGroupAction>
            </SidebarGroupLabel>
          </SidebarGroup>
          <SidebarNavMenuGroup
            className='mt-auto'
            items={[
              { href: "/", icon: <ClipboardListIcon />, label: 'Job Board' },
            ]}
          />
        </>
      }
      footerButton={<SidebarOrganizationButton />}
    >
      {children}
    </AppSidebar>
  )
}

const EmployerLayout = ({ children }: EmployerLayoutProps) => {
  return (
    <Suspense>
      <SuspenseSidebar>
        {children}
      </SuspenseSidebar>
    </Suspense>
  )
}

export default EmployerLayout