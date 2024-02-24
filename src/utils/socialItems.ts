export interface SocialItem {
  href: string;
  icon: string;
  alt: string;
}

const socialItems: SocialItem[] = [
  { href: "/", icon: "/facebook.svg", alt: "Facebook" },
  { href: "/", icon: "/instagram.svg", alt: "Instagram" },
  { href: "/", icon: "/twitter.svg", alt: "Twitter" },
  { href: "/", icon: "/youtube.svg", alt: "Youtube" },
];

export default socialItems;
