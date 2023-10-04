import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

interface SelectorProps {
  children: ReactNode;
}
function Selector(props: SelectorProps) {
  return (
    <nav>
      <ul className="w-32 py-8 h-full space-y-4 border-r-[1px] border-[#455967]">
        {props.children}
      </ul>
    </nav>
  );
}

interface SelectorTabProps {
  id: number;
  logoUrl: string;
  selected?: boolean;
}
function SelectorTab(props: SelectorTabProps) {
  const border = props.selected
    ? "border-4 border-orange-500 bg-white bg-opacity-10"
    : "border-[1px] border-[#455967] hover:border-2 hover:bg-white hover:bg-opacity-10";
  const background = props.selected ? "bg-[#455967]" : "bg-transparent";

  return (
    <li>
      <Link className="flex items-center space-x-1 -translate-x-3" href={`/${props.id}/quests`}>
        <div className={`${background} w-6 h-6 rounded-full`} />
        <div
          className={`flex justify-center items-center p-2 w-16 h-16 ${border} rounded-full transition-all cursor-pointer`}
        >
          <Image
            src={props.logoUrl}
            alt={`${props.id} logo`}
            width={40}
            height={40}
          />
        </div>
      </Link>
    </li>
  );
}

Selector.Tab = SelectorTab;
export { Selector };
