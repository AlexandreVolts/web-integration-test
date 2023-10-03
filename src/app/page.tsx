import { SideMenu } from "@/components/SideMenu";
import { Header } from "@/components/Header";
import { SideDetails } from "@/components/SideDetails";
import { ProfileCard } from "@/components/ProfileCard";
import { UserData } from "@/types/UserData";
import { TeamData } from "@/types/TeamData";
import Image from 'next/image';

export default async function Home() {
  const user: UserData = await (await fetch(`${process.env.URL}/api/user`)).json();
  const teams: TeamData[] = await (await fetch(`${process.env.URL}/api/teams`)).json();

  return (
    <div className="flex flex-col min-h-screen bg-[#282c3c] text-[#2ce5a7]">
      <Header />
      <div className="flex grow">
        <SideMenu>
          {teams.map((team) => (
            <SideMenu.Tab key={team.id} value={team.id.toString()}>
              <Image src={team.logoUrl} alt={`${team.title} logo`} width={32} height={32} />
            </SideMenu.Tab>
          ))}
        </SideMenu>
        <SideDetails
          icon={<span className="pr-4">Icon</span>}
          title="Team GO"
          profile={<ProfileCard {...user} />}
        >
        </SideDetails>
      </div>
    </div>
  );
}
