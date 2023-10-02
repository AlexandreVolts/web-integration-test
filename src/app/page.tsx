"use client";

import { SideMenu } from "@/components/SideMenu";
import { Header } from "@/components/Header";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState<string>();

  return (
    <div className="flex flex-col min-h-screen bg-[#282c3c] text-[#2ce5a7]">
      <Header />
      <div className="flex grow">
        <SideMenu onSelect={setSelected}>
          {[1, 2, 3].map((icon, index) => (
            <SideMenu.Tab
              key={index}
              value={index.toString()}
              selected={index.toString() === selected}
            >
              {icon}
            </SideMenu.Tab>
          ))}
        </SideMenu>
      </div>
    </div>
  );
}
