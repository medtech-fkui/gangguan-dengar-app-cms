"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/providers";

export const NavbarUserMenu = () => {
  const { logout } = useAuth();
  return (
    <Button
      onClick={() => logout()}
      variant="ghost"
      className="text-destructive hover:text-destructive hover:bg-red-100"
    >
      Logout
    </Button>
  );
};
