import Image from "next/image";
import Link from "next/link";
import { SocialItem } from "@/utils/socialItems";

interface NavItemProps {
  socialItems: SocialItem[];
}

export default function Socials({ socialItems }: NavItemProps) {
  return (
    <ul className="flex gap-x-4 items-center">
      {socialItems.map(({ href, icon, alt }) => (
        <li key={alt}>
          <Link href={href}>
            <Image src={icon} width={16} height={16} alt={alt} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
