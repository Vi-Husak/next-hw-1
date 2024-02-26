import Link from "next/link";
import { NavItem } from "@/utils/navItems";

interface NavItemProps {
  navLink: NavItem;
  extraClasses?: string;
}

export default function NavLink({
  navLink: { href, label },
  extraClasses,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={`text-[#707c87] hover:text-[#2C36F2] transition ${
        extraClasses ? extraClasses : ""
      }`}
    >
      {label}
    </Link>
  );
}
