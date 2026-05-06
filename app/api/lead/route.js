import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();

    await fetch("https://hooks.zapier.com/hooks/catch/27489563/uvvfydu/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
