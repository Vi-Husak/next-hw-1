import Link from "next/link";
import Image from "next/image";

export default function ProfileLink() {
  return (
    <Link href="/profile" className="flex items-center gap-x-3.5">
      <Image
        src="/login.svg"
        width={20}
        height={22}
        alt="Picture of the author"
      />
      <span className="text-[#1f1e25] text-base">Особистий кабінет</span>
    </Link>
  );
}
