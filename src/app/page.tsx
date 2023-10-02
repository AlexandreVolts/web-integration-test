"use client";

import { SideMenu } from "@/components/SideMenu";
import { Header } from "@/components/Header";
import { SideDetails } from "@/components/SideDetails";
import { ProfileCard } from "@/components/ProfileCard";
import { useParams } from "next/navigation";

export default function Home() {
  const params = useParams();

  return (
    <div className="flex flex-col min-h-screen bg-[#282c3c] text-[#2ce5a7]">
      <Header />
      <div className="flex grow">
        <SideMenu>
          {[1, 2, 3].map((icon, index) => (
            <SideMenu.Tab key={index} value={index.toString()}>
              {icon}
            </SideMenu.Tab>
          ))}
        </SideMenu>
        <SideDetails
          icon={<span className="pr-4">Icon</span>}
          title="Team GO"
          profile={
            <ProfileCard
              pseudo="Pseudo"
              gems={322}
              xp={12897}
              rewards={2}
              level={7}
              progress={0.1}
            />
          }
        ></SideDetails>
      </div>
    </div>
  );
}
