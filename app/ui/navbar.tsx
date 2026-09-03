"use client";
import { Menu, Pin, X } from "lucide-react";
import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import ListLeagues from "./ListLeagues";

export default function Navbar() {
  const [openNavbar, setopenNavbar] = useState(false);

  return (
    <div className="bg-gray-900 text-white sticky top-0 z-50 w-full">
      <div className="flex justify-between mx-4 my-4">
        <Link href={"/"}>
          {" "}
          <h1>Football Live</h1>
        </Link>

        <div
          onClick={() => setopenNavbar(!openNavbar)}
          className="block md:hidden p-2 bg-gray-950 rounded-[10px] w-fit hover:bg-black duration-300  "
        >
          {openNavbar ? <X /> : <Menu />}
        </div>
      </div>

      <div
        className={
          openNavbar
            ? "block duration-600 ease-linear  "
            : "hidden duration-600 ease-linear "
        }
      >
        <hr className="text-neutral-700 mb-4" />
        <div className="px-3">
          <div className="flex gap-2">
            <Pin />
            <h3>Popular Leagues</h3>
          </div>
          <hr className="text-neutral-700 mt-4" />

          <ListLeagues />
        </div>
      </div>
    </div>
  );
}
