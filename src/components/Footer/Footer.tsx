import Link from "next/link";
import Image from "next/image";

import Logo from "@/components/Logo/Logo";
import navItems from "@/utils/navItems";
import NavLink from "@/components/NavLink/NavLink";
import SmallFootText from "@/components/Footer/SmallFootText";
import Socials from "@/components/Footer/Socials";

import socialItems from "@/utils/socialItems";

export default function Footer() {
  return (
    <footer className="bg-[#f6f7ff] px-[7.3%] py-14 flex justify-between">
      <div className="flex flex-col gap-y-4">
        <Logo />
        <div>
          <address className="not-italic">
            <SmallFootText>04128, м.Київ, вул. Хрещатик, 19</SmallFootText>
          </address>
          <SmallFootText>Ліцензія НБУ №156</SmallFootText>
          <SmallFootText>Ⓒ ПАТ ЧіпЧендж, 2019-2023</SmallFootText>
        </div>
      </div>
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
      <div className="flex flex-col gap-y-1.5 relative">
        <Image
          src="/smartPhone.svg"
          width={16}
          height={16}
          alt=""
          className="absolute -left-9 top-1"
        />

        <Link href="tel:3773" className="font-medium ">
          3773
        </Link>
        <SmallFootText>Цілодобова підтримка</SmallFootText>
      </div>
      <div className="flex flex-col gap-y-1.5 relative">
        <Image
          src="/phone.svg"
          width={16}
          height={16}
          alt=""
          className="absolute -left-9 top-1"
        />
        <Link href="tel:88001112233" className="font-medium">
          8 800 111 22 33
        </Link>
        <div>
          <SmallFootText>
            Безкштовно для дзвінків <br /> в межах України
          </SmallFootText>
        </div>
      </div>
      <div>
        <Socials socialItems={socialItems} />
      </div>
    </footer>
  );
}
