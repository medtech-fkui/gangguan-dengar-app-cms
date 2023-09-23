import { Wrapper } from "..";
import { NavbarMenuItems } from "./navbar-menu-items";
import { NavbarUserMenu } from "./navbar-user-menu";

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white z-10">
      <div className="py-4 border-b">
        <Wrapper>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <div className="flex flex-cols gap-x-12">
              <h2 className="font-medium cursor-pointer">
                Telinga Kecilku CMS
              </h2>
              <NavbarMenuItems />
            </div>
            <NavbarUserMenu />
          </div>
        </Wrapper>
      </div>
    </nav>
  );
};
