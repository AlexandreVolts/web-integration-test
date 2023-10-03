import { TeamData } from "@/types/TeamData";
import { UserData } from "@/types/UserData";
import { SideDetailsMenu } from "@/components/SideDetailsMenu";

export default async function HomeSectionSelected(context: any) {
  const id = context.params.id;
  const section = context.params.section;

  const team: TeamData = await (
    await fetch(`${process.env.URL}/api/teams/${id}`)
  ).json();
  const user: UserData = await (
    await fetch(`${process.env.URL}/api/user`)
  ).json();

  if (team.id === undefined) {
    return (
      <div className="p-8">
        <h2 className="text-3xl">Please select an existing team.</h2>
      </div>
    );
  }
  return (
    <>
      <SideDetailsMenu team={team} user={user} section={section} />
      <div className="p-8">
        <h2 className="text-3xl">{`${section.toUpperCase()} of ${
          team.title
        } selected.`}</h2>
        <p className="text-white">
          Note: a separated page should be made for each section, this is made
          for the purpose of demonstration.
        </p>
      </div>
    </>
  );
}
