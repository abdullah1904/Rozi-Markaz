import { ReactNode } from 'react'
import {
    SidebarProvider,
    Sidebar,
    SidebarHeader,
    SidebarTrigger,
    SidebarContent,
    SidebarFooter,
    SidebarMenuItem,
    SidebarMenu,
} from './ui/sidebar'
import AppSidebarClient from './AppSidebarClient'
import SidebarUserButton from './User/SidebarUserButton'
import SignedIn from './SignedIn'

type Props = {
    content: ReactNode
    footerButton: ReactNode
    children: ReactNode
}

const AppSidebar = ({ children, content, footerButton }: Props) => {
    return (
        <SidebarProvider>
            <AppSidebarClient>
                <Sidebar collapsible="icon" className="overflow-hidden">
                    <SidebarHeader className="flex-row items-center">
                        <SidebarTrigger />
                        <span className="text-xl text-nowrap">Rozi Markaz</span>
                    </SidebarHeader>
                    <SidebarContent>
                        {content}
                    </SidebarContent>
                    <SignedIn>
                        <SidebarFooter>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    {footerButton}
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarFooter>
                    </SignedIn>
                </Sidebar>
                <main className='flex-1'>{children}</main>
            </AppSidebarClient>
        </SidebarProvider>
    )
}

export default AppSidebar