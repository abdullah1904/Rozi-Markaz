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
} from './ui/sidebar'

import AppSidebarClient from './AppSidebarClient'

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
                        Menu Lists
                    </SidebarContent>
                    <SidebarFooter>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton>Menu Button</SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarFooter>
                </Sidebar>
                {children}
            </AppSidebarClient>
        </SidebarProvider>
    )
}

export default AppSidebar