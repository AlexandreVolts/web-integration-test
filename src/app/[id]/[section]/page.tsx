import { TeamData } from "@/types/TeamData";
import { SideDetails } from "@/components/SideDetails";

export default async function HomeSectionSelected(context: any) {
  const id = context.params.id;
  const section = context.params.section;

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
  return (
    <>
      <SideDetails {...team} selectedSection={section} />
      <div className="p-8">
        <h2 className="text-3xl font-bold">{`${section.toUpperCase()} of ${
          team.title
        } selected.`}</h2>
        <p className="text-white">
          Note: a separated page should be made for each section, this is
          for the purpose of demonstration.
        </p>
      </div>
    </>
  );
}
