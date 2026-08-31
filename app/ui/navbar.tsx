"use client";
import { Menu, Pin } from "lucide-react";
import React, { useState } from "react";
import { leagueData } from "../data/data";
import Image from "next/image";
import Link from "next/link";

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
          {" "}
          <Menu />
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

          <ul className=" py-4 ">
            {Object.values(leagueData.response)
              .slice(0, 20)
              .map((l: any) => (
                <li className="mb-3 flex items-center" key={l.league.id}>
                  <img
                    src={l.league.logo}
                    alt={l.league.name}
                    className="w-8 h-8 mr-2"
                  />
                  {l.league.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
