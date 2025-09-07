"use client";
import { SidebarMenuButton, useSidebar } from "../ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { ChevronsUpDown, LogOutIcon, SettingsIcon, UserIcon } from "lucide-react";
import UserInfo from "./UserInfo";
import Link from "next/link";
import { SignOutButton } from "../AuthButtons";
import { useClerk } from "@clerk/nextjs";

type Props = {
    user: {
        name: string;
        email: string;
        imageUrl?: string;
    }
}

const SidebarUserButtonClient = ({ user }: Props) => {
    const { isMobile, setOpenMobile } = useSidebar();
    const { openUserProfile } = useClerk();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <SidebarMenuButton size={'lg'} className="data-[state=open]:bg-accent data-[state=open]:text-sidebar-accent-foreground">
                    <UserInfo {...user} />
                    <ChevronsUpDown className="ml-auto group-data-[state=collapsed]:hidden" />
                </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={4} align='end' side={isMobile ? 'bottom' : 'right'} className="border-2 rounded-lg mx-2 p-2 min-w-64 max-w-80">
                <DropdownMenuLabel className="font-normal p-1">
                    <UserInfo {...user} />
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() =>{
                    openUserProfile();
                    if (isMobile) {
                        setOpenMobile(false);
                    }
                }}>
                    <UserIcon className="mr-1" /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href={'/user-settings/notifications'}>
                        <SettingsIcon className="mr-1" /> Settings
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <SignOutButton>
                    <DropdownMenuItem>
                        <LogOutIcon className="mr-1" /> Log Out
                    </DropdownMenuItem>
                </SignOutButton>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default SidebarUserButtonClient;