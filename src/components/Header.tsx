import {
  IconBrandDiscordFilled,
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandTiktokFilled,
  IconBrandTwitch,
  IconBrandTwitterFilled,
  IconBrandYoutubeFilled,
} from "@tabler/icons-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-between items-center flex-wrap px-32 py-3 border-b-[1px] border-[#455967]">
      <h1 className="text-3xl font-bold transition-all hover:text-emerald-200">
        <Link href="#">KBOOM</Link>
      </h1>
      <nav>
        <ul className="flex space-x-4">
          {[
            <IconBrandTwitterFilled key="twitter" />,
            <IconBrandTwitch key="twitch" />,
            <IconBrandTiktokFilled key="tiktok" />,
            <IconBrandYoutubeFilled key="youtube" />,
            <IconBrandInstagram key="instagram" />,
            <IconBrandFacebookFilled key="facebook" />,
            <IconBrandDiscordFilled key="discord" />,
          ].map((icon, index) => (
            <li key={index}>
              <span className="block cursor-pointer transition-all hover:text-emerald-200 hover:-translate-y-1">
                <Link href="#">{icon}</Link>
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
