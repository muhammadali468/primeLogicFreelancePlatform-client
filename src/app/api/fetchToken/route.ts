import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ENV } from "@/config";

interface BodyProps {
  token: string;
}
export async function POST(req: NextRequest) {
  const body: BodyProps = await req.json();
  const { token } = body;
  if (!token) {
    return NextResponse.json({ success: false, message: "Token not found" });
  }
  const cookie = cookies();

  cookie.set("accessToken", token, {
    httpOnly: true,
    secure: ENV === "PRODUCTION",
    sameSite: "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000
  });

  return NextResponse.json({
    success: true,
    message: "Token Set successfully"
  });
}
