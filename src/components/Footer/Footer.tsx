import Logo from "@/components/Logo/Logo";

import AddressBlock from "./AddressBlock";
import Navigation from "./Navigation";
import ContactPhoneItem from "./ContactPhoneItem";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="bg-[#f6f7ff] px-[7.3%] py-14 flex justify-between items-start">
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
        phoneNumber="88001112233"
        iconSrc="/phone.svg"
        text="Безкоштовно для дзвінків в межах України"
      />
      <Socials />
    </footer>
  );
}
