"use client";
import React, { useState } from "react";

export default function FilterDisplay({
  upcomingMatches,
  liveFixtures,
}: {
  upcomingMatches: React.ReactNode;
  liveFixtures: React.ReactNode;
}) {
  const [active, setActive] = useState<string>("live");
  return (
    <div>
      <div className="flex gap-4">
        <div
          onClick={() => setActive("live")}
          className={
            active === "live"
              ? "py-2 px-4 rounded-[5px] bg-red-500 text-white w-fit my-4 cursor-pointer"
              : "py-2 px-4 rounded-[5px] bg-neutral-800 text-white w-fit my-4 cursor-pointer"
          }
        >
          <h1>Live</h1>
        </div>

        <div
          onClick={() => setActive("UPM")}
          className={
            active === "UPM"
              ? "py-2 px-4 rounded-[5px] bg-red-500 text-white w-fit my-4 cursor-pointer"
              : "py-2 px-4 rounded-[5px] bg-neutral-800 text-white w-fit my-4 cursor-pointer"
          }
        >
          <h1>Upcoming Matches</h1>
        </div>
      </div>
      <div className="md:col-span-4 md:mr-28 bg-gray-950 p-5 rounded-[5px] my-4 ">
        {active === "live" ? liveFixtures : upcomingMatches}
      </div>
    </div>
  );
}
