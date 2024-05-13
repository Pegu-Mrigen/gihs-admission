import ContactForm from "@/components/ContactForm";
import Products from "@/components/RazorpayComponets/ProductList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col p-4 max-w-[1200px] mx-auto items-center  ">
      <h1 className="flex max-w-[500px] mx-auto text-3xl  md:text-5xl font-bold mb-2">
        Admission Form
      </h1>
      <p>Fill the fileds to apply for a course at GIHS, Gohpur</p>
      <ContactForm />   
      
      <Products />
    </div>
  );
}
