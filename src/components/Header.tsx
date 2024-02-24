import Logo from "@/components/Logo";
import navItems from "@/utils/navItems";
import NavLink from "@/components/NavLink";
import ProfileLink from "@/components/ProfileLink";

export default function Header() {
  return (
    <header className="bg-[#f6f7ff] px-[7.3%] py-8 flex items-center gap-[5.8%]">
      <Logo />
      <nav className="grow">
        <ul className="flex gap-x-9">
          {navItems.map((item) => (
            <NavLink navLink={item} key={item.href} />
          ))}
        </ul>
      </nav>
      <ProfileLink />
    </header>
  );
}
