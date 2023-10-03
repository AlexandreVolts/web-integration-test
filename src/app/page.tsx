import { SideDetails } from "@/components/SideDetails";
import { SideMenu } from "@/components/SideMenu";
import { UserData } from "@/types/UserData";
import { TeamData } from "@/types/TeamData";
import Image from "next/image";

export default async function Home() {
  const user: UserData = await (
    await fetch(`${process.env.URL}/api/user`)
  ).json();
  const teams: TeamData[] = await (
    await fetch(`${process.env.URL}/api/teams`)
  ).json();

  return (
    <>
      <SideMenu>
        {teams.map((team) => (
          <SideMenu.Tab key={team.id} value={team.id.toString()}>
            <Image
              src={team.logoUrl}
              alt={`${team.title} logo`}
              width={32}
              height={32}
            />
          </SideMenu.Tab>
        ))}
      </SideMenu>
      <SideDetails title="Please select a team..." user={user}></SideDetails>
    </>
  );
}
