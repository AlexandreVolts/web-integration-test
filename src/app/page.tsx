import { SideDetails } from "@/components/SideDetails";
import { SideMenu } from "@/components/SideMenu";

export default async function Home() {
  return (
    <>
      <SideMenu />
      <SideDetails title="Please select a team..." />
    </>
  );
}
