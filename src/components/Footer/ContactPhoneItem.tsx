import React from "react";

import Image from "next/image";
import Link from "next/link";

import SmallText from "./SmallText";

interface ContactPhoneItemProps {
  phoneNumber: string;
  iconSrc?: string;
  text?: React.ReactNode;
}

export default function ContactPhoneItem({
  iconSrc,
  phoneNumber,
  text,
}: ContactPhoneItemProps) {
  return (
    <div className="flex flex-col gap-y-1.5 relative">
      {iconSrc && (
        <Image
          src={iconSrc}
          width={16}
          height={16}
          alt=""
          className="absolute -left-9 top-1"
        />
      )}
      <Link
        href={`tel:${phoneNumber.replace(/\s/g, "")}`}
        className="font-medium "
      >
        {phoneNumber}
      </Link>
      {text && <SmallText>{text}</SmallText>}
    </div>
  );
}
