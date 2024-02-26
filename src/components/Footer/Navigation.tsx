import navItems from "@/utils/navItems";
import NavLink from "@/components/NavLink/NavLink";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex flex-col gap-y-3">
        {navItems.map((item) => (
          <NavLink
            navLink={item}
            key={item.href}
            extraClasses="font-medium text-base"
          />
        ))}
      </ul>
    </nav>
  );
}
