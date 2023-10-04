import Link from "next/link";
import { ReactNode } from "react";

interface MenuProps {
  children: ReactNode;
}
function Menu(props: MenuProps) {
  return (
    <nav>
      <ul className="space-y-2">{props.children}</ul>
    </nav>
  );
}

interface MenuItemProps {
  icon: ReactNode;
  label: string;
  href: string;
  selected?: boolean;
}
function MenuItem(props: MenuItemProps) {
  const selected = props.selected
    ? "bg-[#2ce5a7] text-[#282c3c] font-bold"
    : "text-white";
  return (
    <li className={`${selected} text-sm rounded-full transition-all hover:bg-[#2ce5a7] hover:text-[#282c3c] hover:font-bold`}>
      <Link
        className="flex items-center px-3 py-2 space-x-2"
        href={props.href}
      >
        <span>{props.icon}</span>
        <span>{props.label}</span>
      </Link>
    </li>
  );
}

Menu.Item = MenuItem;
export { Menu };