import { Selector } from "./ui/Selector";
import { TeamData } from "@/types/TeamData";

interface SideMenuProps {
  selected?: number;
}
export async function SideMenu(props: SideMenuProps) {
  const teams: TeamData[] = await (
    await fetch(`${process.env.URL}/api/teams`)
  ).json();

  return (
    <Selector>
      {teams.map((team) => (
        <Selector.Tab key={team.id} {...team} selected={team.id === props.selected} />
      ))}
    </Selector>
  );
}
