import Image from "next/image";

import Button from "@/components//Button/Button";

export default function Banner() {
  return (
    <div className="relative bg-cover bg-center h-[400px] bg-[url('/banner.jpg')]">
      <div className="absolute inset-0 bg-[#2C36F2] bg-opacity-50"></div>
      <div className="absolute inset-0 max-w-[866px] m-auto flex justify-between items-center">
        <div>
          <h1 className="font-bold text-[54px] text-[#F6F7FF]">Чіп Чендж</h1>
          <p className="font-medium text-[#E0E1EA] mb-6">
            Обмінник валют - навчальний
          </p>
          <Button type="link" href="/converter" color="light">
            Конвертер валют
          </Button>
        </div>
        <Image
          src="/standard-mastercard-card.jpg"
          alt=""
          width={341}
          height={216}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
