import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="m-6 gap-2 flex items-center  justify-between bg-gray-100 p-10 rounded-3xl">
      <Link href="https://gihstech.in">
        <Image alt="" src="/logo.jpg" width={50} height={50} />
      </Link>
      <h1 className="text-xl md:text-3xl text-green-500 font-bold">
        Gohpur Institute of Health & Science
      </h1>
      <Link href="https://gihstech.in">👈Back</Link>
    </div>
  );
};

export default Navbar;
