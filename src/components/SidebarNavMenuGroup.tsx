"use client"
import { ReactNode } from 'react'
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
    items: {
        href: string;
        icon: ReactNode,
        label: string
        authStatus?: 'signedIn' | 'signedOut'
    }[],
    className?: string
}

const SidebarNavMenuGroup = ({ items, className }: Props) => {
    const pathname = usePathname();
    return (
        <SidebarGroup className={className}>
            <SidebarMenu>
                {items.map((item) => {
                    const html = (
                        <SidebarMenuItem key={item.href}>
                            <SidebarMenuButton asChild isActive={item.href === pathname}>
                                <Link href={item.href}>
                                    {item.icon}
                                    <span>{item.label}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    )

                    if (item.authStatus === 'signedIn') {
                        return <SignedIn key={item.href}>{html}</SignedIn>
                    }
                    if (item.authStatus === 'signedOut'){
                        return <SignedOut key={item.href}>{html}</SignedOut>
                    }
                    return html;
                })}
                <SignedOut>
                </SignedOut>
            </SidebarMenu>
        </SidebarGroup>
    )
}

export default SidebarNavMenuGroup