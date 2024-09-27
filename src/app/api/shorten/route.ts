import UrlShortenerService from "@/services/UrlShortenerService";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { orignalUrl } = await req.json();
  const shortenerService = new UrlShortenerService();
  const shortUrl = await shortenerService.shortenUrl(orignalUrl);
  return NextResponse.json({ shortUrl }, { status: 201 });
}
