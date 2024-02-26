import navItems from "@/utils/navItems";
import NavLink from "@/components/NavLink/NavLink";

export default function Navigation() {
  return (
    <nav className="grow">
      <ul className="flex gap-x-9">
        {navItems.map((item) => (
          <li key={item.href}>
            <NavLink navLink={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
