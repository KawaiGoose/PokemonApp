import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

export async function POST (request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    let data = await request.json();
    let priceId = data.priceId
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: "price_1OHWdTKwZOLBQ6VV36IQAx6L",
                quantity: 1
            }
        ],
      mode: 'payment',
      success_url: 'http://localhost:3000/server',
      cancel_url: 'http://localhost:3000/todolist'
    })

    return NextResponse.json(session.url)
}