"use client";

import { Bell } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { usePathname, useRouter } from "next/navigation";
import dbProfile from "../../../assets/images/db-profile.png";
import Image from "next/image";

export function NavUser() {

  const router = useRouter();
  const pathname = usePathname();

  // const handleLogout = () => {
  //   logout();
  //   setIsLoading(true);

  //   if (protectedRoutes.some((route) => pathname.match(route))) {
  //     router.push("/");
  //   }
  // };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Avatar className="h-10 w-10 rounded-lg">
            <Image
              src={dbProfile}
              alt="db-profile"
              width={40}
              height={40}
              className=" rounded-full"
            />
            <AvatarFallback className="rounded-lg">Admin</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Hayton</span>
            <span className="truncate text-xs">hayton@gmail.com</span>
          </div>
          <div className="relative">
            <Bell className="w-8 h-8 text-ns-neutral-dark" />
            <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#EFFCF1] text-ns-primary flex items-center justify-center text-xs">
              8
            </div>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
