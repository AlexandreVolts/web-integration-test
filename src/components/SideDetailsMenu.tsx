import {
  IconNews,
  IconMap,
  IconMedal2,
  IconBuildingStore,
  IconMilitaryAward,
  IconBell,
} from "@tabler/icons-react";
import { SideDetails } from "./SideDetails";
import { TeamData } from "@/types/TeamData";
import { UserData } from "@/types/UserData";

interface SideDetailsMenuProps {
  team: TeamData;
  user: UserData;
  section?: string
}
export function SideDetailsMenu(props: SideDetailsMenuProps) {
  return (
    <SideDetails {...props.team} user={props.user}>
      <SideDetails.Tab
        label="Quests"
        icon={<IconNews />}
        teamId={props.team.id}
        selected={"quests" === props.section}
      />
      <SideDetails.Tab
        label="Adventures"
        icon={<IconMap />}
        teamId={props.team.id}
        selected={"adventures" === props.section}
      />
      <SideDetails.Tab
        label="Leaderboard"
        icon={<IconMedal2 />}
        teamId={props.team.id}
        selected={"leaderboard" === props.section}
      />
      <SideDetails.Tab
        label="Shop"
        icon={<IconBuildingStore />}
        teamId={props.team.id}
        selected={"shop" === props.section}
      />
      <SideDetails.Tab
        label="Club"
        icon={<IconMilitaryAward />}
        teamId={props.team.id}
        selected={"club" === props.section}
      />
      <SideDetails.Tab
        label="Notifications"
        icon={<IconBell />}
        teamId={props.team.id}
        selected={"notifications" === props.section}
      />
    </SideDetails>
  );
}
