import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { destination, days, budget } = body;

    const plan = `
TRAVELOOP AI ITINERARY

Destination: ${destination}
Days: ${days}
Budget: ₹${budget}

DAY 1:
- City exploration
- Local food tour
- Visit famous attractions

DAY 2:
- Museum visit
- Shopping
- Cultural experience

DAY 3:
- Adventure activities
- Beach / sightseeing
- Night market

HOTEL SUGGESTIONS:
- Budget hotel
- Mid-range hotel

FOOD:
- Try local cuisine
- Street food tour

TRANSPORT:
- Metro
- Local taxi
- Bus

ESTIMATED COST:
- Hotel: 40%
- Food: 20%
- Transport: 15%
- Activities: 25%
`;

    return NextResponse.json({
      plan,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
    });
  }
}