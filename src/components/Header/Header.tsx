import Logo from "@/components/Logo/Logo";

import Navigation from "./Navigation";
import ProfileLink from "./ProfileLink";

export default function Header() {
  return (
    <header className="bg-[#f6f7ff] px-[7.3%] py-8 flex items-center gap-[5.8%]">
      <Logo />
      <Navigation />
      <ProfileLink />
    </header>
  );
}
