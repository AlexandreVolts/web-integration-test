import { TeamData } from "@/types/TeamData";
import { SideMenu } from "@/components/SideMenu";

export default async function Layout(context: any) {
  const id = context.params.id;
  const team: TeamData = await (
    await fetch(`${process.env.URL}/api/teams/${id}`)
  ).json();

  return (
    <>
      <SideMenu selected={team.id} />
      {context.children}
    </>
  );
}
