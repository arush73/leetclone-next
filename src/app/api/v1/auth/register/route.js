import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and Password required" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "User registered successfully 🚀", user: { name, email } },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
