import { NextResponse } from "next/server";
import { fetchReviews } from "@/lib/reviews";

export const revalidate = 3600; // 1h — évite d'interroger l'API à chaque visite

export async function GET() {
  const { reviews, live } = await fetchReviews();
  return NextResponse.json({ reviews, live });
}
