"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAuth } from "@/providers";
import { UserCircle2 } from "lucide-react";

export const NavbarUserMenu = () => {
  const { logout } = useAuth();
  return (
    <Popover>
      <PopoverTrigger>
        <UserCircle2 size={24} strokeWidth={1.5} />
      </PopoverTrigger>
      <PopoverContent className="w-[20vh] shadow-none">
        <Button
          variant="destructive"
          onClick={() => logout()}
          className="w-full"
        >
          Logout
        </Button>
      </PopoverContent>
    </Popover>
  );
};
