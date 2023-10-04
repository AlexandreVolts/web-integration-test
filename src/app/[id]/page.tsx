import { TeamData } from "@/types/TeamData";
import { SideDetails } from "@/components/SideDetails";

export default async function HomeTeamSelected(context: any) {
  const id = context.params.id;
  const team: TeamData = await (
    await fetch(`${process.env.URL}/api/teams/${id}`)
  ).json();

  if (team.id === undefined) {
    return (
      <div className="p-8">
        <h2 className="text-3xl">Please select an existing team.</h2>
      </div>
    );
  }
  return (<SideDetails {...team} />);
}
