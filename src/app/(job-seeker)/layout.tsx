import AppSidebar from '@/components/AppSidebar'
import SidebarNavMenuGroup from '@/components/SidebarNavMenuGroup'
import SidebarUserButton from '@/components/User/SidebarUserButton'
import { BrainCircuit, ClipboardListIcon, LayoutDashboard,LogInIcon } from 'lucide-react'
import React from 'react'

type JobSeekerLayoutProps = {
    children: React.ReactNode
}

const JobSeekerLayout = ({ children }: JobSeekerLayoutProps) => {
    return (
        <AppSidebar
            content={
                <SidebarNavMenuGroup
                    className='mt-auto'
                    items={[
                        { href: "/", icon: <ClipboardListIcon />, label: 'Job Board' },
                        { href: "/ai-search", icon: <BrainCircuit />, label: "AI Search" },
                        { href: "/employer", icon: <LayoutDashboard />, label: 'Employer Dashboard', authStatus: 'signedIn' },
                        { href: "/sign-in", icon: <LogInIcon />, label: 'Sign In', authStatus: 'signedOut' }
                    ]}
                />
            }
            footerButton={<SidebarUserButton />}
        >
            {children}
        </AppSidebar>
    )
}

export default JobSeekerLayout