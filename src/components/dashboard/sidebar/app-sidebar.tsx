"use client";

import * as React from "react";
import {
  Bell,
  ChartColumnBig,
  ChartPie,
  Coins,
  Crown,
  List,
  Settings,
  SquareTerminal,
  UserCog,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Logo from "@/assets/svgs/Logo";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Account Details",
      url: "/account-details",
      icon: UserCog,
    },
    {
      title: "Demographic Survey",
      url: "/demographic-survey",
      icon: ChartPie,
    },
    {
      title: "Survey Management",
      url: "/survey-management",
      icon: ChartColumnBig,
    },
    {
      title: "Rewards Management",
      url: "/rewards-management",
      icon: Crown,
    },
    {
      title: "Earning",
      url: "/earning",
      icon: Coins,
    },
    {
      title: "Customer Support",
      url: "/customer-support",
      icon: List,
    },
    {
      title: "Push Notification",
      url: "/push-notification",
      icon: Bell,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex items-center justify-center">
                  <Logo />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <h2 className="font-bold text-xl">Survey Coin</h2>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
