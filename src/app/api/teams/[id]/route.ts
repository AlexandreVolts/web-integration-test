import data from "@/json/data.json";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, query: any) {
  const { id } = query.params;
  const output = data.data.find((team) => team.id === parseInt(id as string));

  if (!id || !output)
    return NextResponse.json({ message: "ressource not found" });
  return NextResponse.json(output);
}
