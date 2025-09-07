"use client";
import { SidebarMenuButton, useSidebar } from "../ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { ArrowLeftRightIcon, Building2Icon, ChevronsUpDown, CreditCard, CreditCardIcon, LogOutIcon, SettingsIcon, UserIcon, UserRoundCogIcon } from "lucide-react";
import Link from "next/link";
import { SignOutButton } from "../AuthButtons";
import { useClerk } from "@clerk/nextjs";
import OrganizationInfo from "./OrganizationInfo";

type Props = {
  user: {
    name: string;
    email: string;
  },
  organization: {
    name: string,
    imageUrl: string | null;
  }
}

const SidebarOrganizationButtonClient = ({ organization, user }: Props) => {
  const { isMobile, setOpenMobile } = useSidebar();
  const { openOrganizationProfile } = useClerk();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton size={'lg'} className="data-[state=open]:bg-accent data-[state=open]:text-sidebar-accent-foreground">
          <OrganizationInfo user={user} organization={organization} />
          <ChevronsUpDown className="ml-auto group-data-[state=collapsed]:hidden" />
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={4} align='end' side={isMobile ? 'bottom' : 'right'} className="border-2 rounded-lg mx-2 p-2 min-w-64 max-w-80">
        <DropdownMenuLabel className="font-normal p-1">
          <OrganizationInfo user={user} organization={organization} />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => {
          openOrganizationProfile();
          if (isMobile) {
            setOpenMobile(false);
          }
        }}>
          <Building2Icon className="mr-1" /> Manage Organization
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={'employer/user-settings'}>
            <UserRoundCogIcon className="mr-1" /> User Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={'employer/pricing'}>
            <CreditCardIcon className="mr-1" /> Change Plan
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={'organizations/select'}>
            <ArrowLeftRightIcon className="mr-1" /> Switch Organization
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

export default SidebarOrganizationButtonClient