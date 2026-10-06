import { goneResponse } from "@/lib/gone";

export function GET() {
  return goneResponse();
}

export function HEAD() {
  return goneResponse();
}
