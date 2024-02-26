import Image from "next/image";
import Link from "next/link";
import { Work_Sans } from "next/font/google";

const workSansLogoName = Work_Sans({ weight: "700", subsets: ["latin"] });

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-x-3">
      <Image
        src="/logo.svg"
        width={23}
        height={23}
        alt="Picture of the author"
      />
      <span className={`${workSansLogoName.className} text-[#1f1e25] text-xl`}>
        Чіп Чендж
      </span>
    </Link>
  );
}
