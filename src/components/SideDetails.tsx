import { UserData } from "@/types/UserData";
import { ProfileCard } from "./ProfileCard";
import { Menu } from "./ui/Menu";
import {
  IconNews,
  IconMap,
  IconMedal2,
  IconBuildingStore,
  IconMilitaryAward,
  IconBell,
} from "@tabler/icons-react";
import Image from "next/image";
import { TeamData } from "@/types/TeamData";

interface SideDetailsProps extends Partial<TeamData> {
  selectedSection?: string;
}
export async function SideDetails(props: SideDetailsProps) {
  const user: UserData = await (
    await fetch(`${process.env.URL}/api/user`)
  ).json();

  return (
    <div className="w-68 px-2 py-10 border-r-[1px] border-[#455967]">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-4 ">
            {props.logoUrl ? (
              <div className="flex items-center justify-center w-12 h-12">
              <Image
                src={props.logoUrl}
                alt={`${props.title} logo`}
                width={48}
                height={48}
              />
              </div>
            ) : (
              <></>
            )}
            <h3 className="text-2xl text-white line-clamp-1">{props.title}</h3>
          </div>
          <ProfileCard {...user} />
          <Menu>
            <Menu.Item
              label="Quests"
              icon={<IconNews />}
              href={`/${props.id}/quests`}
              selected={"quests" === props.selectedSection}
            />
            <Menu.Item
              label="Adventures"
              icon={<IconMap />}
              href={`/${props.id}/adventures`}
              selected={"adventures" === props.selectedSection}
            />
            <Menu.Item
              label="Leaderboard"
              icon={<IconMedal2 />}
              href={`/${props.id}/leaderboard`}
              selected={"leaderboard" === props.selectedSection}
            />
            <Menu.Item
              label="Shop"
              icon={<IconBuildingStore />}
              href={`/${props.id}/shop`}
              selected={"shop" === props.selectedSection}
            />
            <Menu.Item
              label="Club"
              icon={<IconMilitaryAward />}
              href={`/${props.id}/club`}
              selected={"club" === props.selectedSection}
            />
            <Menu.Item
              label="Notifications"
              icon={<IconBell />}
              href={`/${props.id}/notifications`}
              selected={"notifications" === props.selectedSection}
            />
          </Menu>
        </div>
      </div>
    </div>
  );
}
