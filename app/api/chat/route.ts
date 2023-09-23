import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { question } = await req.json();
  const res = await fetch(process.env.TARGET_ENDPOINT || "", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.TARGET_ENDPOINT_AUTH || ""}`,
      "Content-Type":"application/json"
    },
    body: JSON.stringify({ question }),
  });
  
  const data = await res.text()

  return NextResponse.json(data);
}
