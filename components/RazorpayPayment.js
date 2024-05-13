// "use client";

// import { useEffect } from "react";

// export default function RazorpayPayment({ customerDetails }) {
//   useEffect(() => {
//     const laodRazorpayScript = async () => {
//       try {
//         const script = document.createElement("script");
//         script.src = "https://checkout.razorpay.com/v1/checkout.js";

//         script.async = true;
//         document.body.appendChild(script);
//       } catch (err) {
//         console.log("Failed to load Razorpay Script", err);
//       }
//     };

//     const fetchOrderDetails = async () => {
//       try {
//         const res = await axios.post("http://localhost:3000/createOrder");
//         return res.data;
//       } catch (err) {
//         console.log("Failed to fetch order details", err);
//         throw new Error("Failed to fetch order details");
//       }
//     };

//     const initiatePayment = async () => {
//       try {
//         await laodRazorpayScript();
//         const orderDetails = await fetchOrderDetails();
//         const options = {
//           // key: "rzp_test_eB53kEGjU9w6Aa",
//           key: process.env.RAZORPAY_API_KEY,
//           amount: 250,
//           currency: "INR",
//           name: "ac, gohpur",
//           description: "Product Description",
//           order_id: orderDetails.orderId,
//           image: "ac logo",
//           handler: function (res) {
//             handlePaymentSuccess(res);
//           },
//           prefill: {
//             name: "ac-gohpur",
//             email: "mrig8520@gmail.com",
//             contact: "7002274701",
//           },
//           receipt: "mrig8520@gmail.com",
//         };

//         const razorpayInstance = new window.Razorpay(options);
//         razorpayInstance.open();
//       } catch (err) {
//         console.log(err);
//         console.err("Payment initiation err:", err);
//         alert("Payment initiation error!");
//       }
//     };

//     initiatePayment();
//   }, []);

//   const handlePaymentSuccess = (res) => {
//     console.log("Payment Successful:", res);

//     //Redirect to success page

//     alert("Payment Successfully Done!!");
//   };

//   return null;
// }
