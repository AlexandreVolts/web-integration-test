import { TeamData } from "@/types/TeamData";
import { UserData } from "@/types/UserData";
import { SideDetailsMenu } from "@/components/SideDetailsMenu";

export default async function HomeTeamSelected(context: any) {
  const id = context.params.id;
  const team: TeamData = await (
    await fetch(`${process.env.URL}/api/teams/${id}`)
  ).json();
  const user: UserData = await (
    await fetch(`${process.env.URL}/api/user`)
  ).json();

  return <SideDetailsMenu team={team} user={user} />;
}
