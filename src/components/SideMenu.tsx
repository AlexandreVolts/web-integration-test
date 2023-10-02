import Link from "next/link";
import { ReactNode } from "react";

interface SideMenuProps {
  children: ReactNode;
}
function SideMenu(props: SideMenuProps) {
  return (
    <nav>
      <ul className="w-32 py-8 h-full space-y-4 border-r-[1px] border-[#455967]">
        {props.children}
      </ul>
    </nav>
  );
}
interface SideMenuTabProps {
  children: ReactNode;
  value: string;
  selected?: boolean;
}
function SideMenuTab(props: SideMenuTabProps) {
  const border = props.selected
    ? "border-4 border-orange-500 bg-white bg-opacity-10"
    : "border-[1px] border-[#455967] hover:border-2 hover:bg-white hover:bg-opacity-10";
  const background = props.selected ? "bg-[#455967]" : "bg-transparent";

  return (
    <li>
      <Link className="flex items-center" href={`/${props.value}`}>
        <div className={`${background} w-6 h-6 rounded-full -translate-x-1/2`} />
        <div
          className={`flex justify-center items-center p-2 w-16 h-16 ${border} rounded-full transition-all cursor-pointer`}
        >
          {props.children}
        </div>
      </Link>
    </li>
  );
}

SideMenu.Tab = SideMenuTab;
export { SideMenu };
