// In this file, we can define any type of request as follows:
// export async function GET(Request) {}
// export async function HEAD(Request) {}
// export async function POST(Request) {}
// export async function PUT(Request) {}
// export async function DELETE(Request) {}
//  A simple GET Example

import { NextRequest } from "next/server";

export async function GET(Reques: NextRequest) {
  return new Response("This is a new API route");
}
