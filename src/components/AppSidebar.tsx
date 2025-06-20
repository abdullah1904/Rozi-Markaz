import { ReactNode } from 'react'
import {
    SidebarProvider,
    Sidebar,
    SidebarHeader,
    SidebarTrigger,
    SidebarContent,
    SidebarFooter,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenu,
    SidebarGroup,
} from './ui/sidebar'

import AppSidebarClient from './AppSidebarClient'
import Link from 'next/link'
import { LogInIcon } from 'lucide-react'
import SignedOut from './SignedOut'
import SidebarUserButton from './User/SidebarUserButton'
import SignedIn from './SignedIn'

type Props = {
    children: ReactNode
}

const AppSidebar = ({ children }: Props) => {
    return (
        <SidebarProvider>
            <AppSidebarClient>
                <Sidebar collapsible="icon" className="overflow-hidden">
                    <SidebarHeader className="flex-row items-center">
                        <SidebarTrigger />
                        <span className="text-xl text-nowrap">Rozi Markaz</span>
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarMenu>
                                <SignedOut>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <Link href={"/sign-in"}>
                                                <LogInIcon />
                                                <span>Log In</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SignedOut>
                            </SidebarMenu>
                        </SidebarGroup>
                    </SidebarContent>
                    <SignedIn>
                        <SidebarFooter>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarUserButton />
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarFooter>
                    </SignedIn>
                </Sidebar>
                {children}
            </AppSidebarClient>
        </SidebarProvider>
    )
}

export default AppSidebar