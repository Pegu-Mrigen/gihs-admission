"use client";
import React, { Suspense } from "react";
import Product from "./Product";
import { useRouter } from "next/navigation";
import Loading from "../../components/Loading";

const ProductList = () => {
  const router = useRouter();

  const makePayment = async ({ productId = null }) => {
    const key = process.env.RAZORPAY_API_KEY;
    console.log(key);
    const data = await fetch("http://localhost:3000/api/razorpay");
    const { order } = await data.json();
    console.log(order.id);
    const options = {
      key: key,
      name: "AC, Gohpur",
      currency: order.currency,
      amount: order.amount,
      order_id: order.id,
      description: "Integration of Razorpay",
      image: "https://portfolio-ac-sigma.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.8a59b791.png&w=640&q=75",
      handler: async function (response) {
         if (response.length == 0) return <Loading />;
        // if (response.status == "unprocessed") {
        //   router.push("/paymentsuccess");
        // }
        console.log(response);

        const data = await fetch("http://localhost:3000/api/paymentverify", {
          method: "POST",
          body: JSON.stringify({
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          }),
        });

        const res = await data.json();

        console.log("response verify==", res);
        if (res?.message == "failed") {
          console.log("redirected.......");
          router.push("/paymentsuccess");
        }

        if (res?.message) {
          console.log("redirected.......");
          router.push(
            "/paymentsuccess?paymentId=" + response.razorpay_payment_id
          );
        }

        alert("Your admission payment ID is: " + response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      // prefill: {
      //   name: "",
      //   email: "test@gmail.com",
      //   contact: "7002274701",
      // },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    paymentObject.on("payment.failed", function (response) {
      alert("Payment failed. Please try after sometime or contact AC");
    });
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Product makePayment={makePayment} />
      </Suspense>
    </>
  );
};

export default ProductList;
