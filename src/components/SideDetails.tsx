import { ReactNode, createContext } from "react";
import { UserData } from "@/types/UserData";
import { ProfileCard } from "./ProfileCard";
import Image from "next/image";
import Link from "next/link";

interface SideDetailsProps {
  user: UserData;
  logoUrl?: string;
  title: string;
  children?: ReactNode;
}
function SideDetails(props: SideDetailsProps) {
  return (
    <div className="px-2 py-8 border-r-[1px] border-[#455967]">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col space-y-8">
          <div className="flex items-center space-x-4 ">
            {props.logoUrl ? (
              <Image
                src={props.logoUrl}
                alt={`${props.title} logo`}
                width={32}
                height={32}
              />
            ) : (
              <></>
            )}
            <h3 className="flex text-2xl text-white">{props.title}</h3>
          </div>
          <ProfileCard {...props.user} />
          {props.children ? (
            <nav>
              <ul className="space-y-2">{props.children}</ul>
            </nav>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

interface SideDetailsTabProps {
  icon: ReactNode;
  label: string;
  teamId: number;
  selected?: boolean;
}
function SideDetailsTab(props: SideDetailsTabProps) {
  const selected = props.selected
    ? "bg-[#2ce5a7] text-[#282c3c]"
    : "text-white";
  return (
    <li className={`${selected} rounded-full hover:bg-[#2ce5a7] hover:text-[#282c3c] transition-all`}>
      <Link
        className="flex px-3 py-2 space-x-2"
        href={`/${props.teamId}/${props.label.toLowerCase()}`}
      >
        <span>{props.icon}</span>
        <span>{props.label}</span>
      </Link>
    </li>
  );
}

SideDetails.Tab = SideDetailsTab;
export { SideDetails };
