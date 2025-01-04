import connect from "@/lib/db";
import User from "@/lib/modals/user";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    await connect();
    const users = await User.find();
    return new NextResponse(JSON.stringify(users), {
      status: 200,
    });
  } catch (error) {
    console.error("Error getting user:", error);
    return new NextResponse(JSON.stringify({ error: "Error getting user" }), {
      status: 500,
    });
  }
};
