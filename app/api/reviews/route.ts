import { NextResponse } from "next/server";
import { fetchReviews } from "@/lib/reviews";

export const revalidate = 86400; // 1 jour : évite d'interroger l'API à chaque visite

export async function GET() {
  const { reviews, live } = await fetchReviews();
  return NextResponse.json({ reviews, live });
}
