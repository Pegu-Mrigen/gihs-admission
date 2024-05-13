import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import shortid from "shortid";

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

export async function GET() {
  try{const payment_capture = 1;
    const amount = 1 * 100; 
    const currency = "INR";
    const options = {
      amount: amount.toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
      notes: {     
        paymentFor: "AC",
        userId: "ac",
        productId: "ac100",
      },
    };
  
    const order = await instance.orders.create(options);
    return NextResponse.json({ msg: "success", order });

  }catch(err){
    console.log(err)
    return NextResponse.json({ msg: "failed", order });

  }
}

export async function POST(req) {
  const body = await req.json();

  return NextResponse.json({ msg: body });
}
