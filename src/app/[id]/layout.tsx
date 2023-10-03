import Image from "next/image";
import { TeamData } from "@/types/TeamData";
import { SideMenu } from "@/components/SideMenu";

export default async function RootLayout(context: any) {
  const teams: TeamData[] = await (
    await fetch(`${process.env.URL}/api/teams`)
  ).json();

  return (
    <>
      <SideMenu>
        {teams.map((team) => (
          <SideMenu.Tab
            key={team.id}
            value={team.id.toString()}
            selected={team.id.toString() === context.params.id}
          >
            <Image
              src={team.logoUrl}
              alt={`${team.title} logo`}
              width={32}
              height={32}
            />
          </SideMenu.Tab>
        ))}
      </SideMenu>
      {context.children}
    </>
  );
}
