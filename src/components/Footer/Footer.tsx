import Logo from "@/components/Logo/Logo";

import AddressBlock from "./AddressBlock";
import Navigation from "./Navigation";
import ContactPhoneItem from "./ContactPhoneItem";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="bg-[#f6f7ff] px-[7.3%] py-14 flex justify-between items-start gap-x-10">
      <div className="flex flex-col gap-y-4">
        <Logo />
        <AddressBlock />
      </div>
      <Navigation />
      <ContactPhoneItem
        phoneNumber="3773"
        iconSrc="/smartPhone.svg"
        text="Цілодобова підтримка"
      />
      <ContactPhoneItem
        phoneNumber="8 800 111 22 33"
        iconSrc="/phone.svg"
        text={
          <>
            Безкоштовно для дзвінків <br /> в межах України
          </>
        }
      />
      <Socials />
    </footer>
  );
}
