import data from "@/json/data.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(data.user);
}