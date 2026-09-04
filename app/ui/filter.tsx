"use client";
import React, { useState } from "react";

export default function FilterDisplay({
  todayMatches,
  tomorrowMatches,
  thisWeekMatches,
  liveFixtures,
}: {
  todayMatches: React.ReactNode;
  tomorrowMatches: React.ReactNode;
  thisWeekMatches: React.ReactNode;
  liveFixtures: React.ReactNode;
}) {
  const [active, setActive] = useState<string>("live");
  const activeStyle =
    "py-2 px-4 rounded-[5px] bg-red-500 text-white w-fit my-4 cursor-pointer";
  const inactiveStyle =
    "py-2 px-4 rounded-[5px] bg-neutral-800 text-white w-fit my-4 cursor-pointer";
  return (
    <div>
      <div className="flex gap-4">
        <div
          onClick={() => setActive("live")}
          className={active === "live" ? activeStyle : inactiveStyle}
        >
          <h1>Live</h1>
        </div>

        <div
          onClick={() => setActive("today")}
          className={active === "today" ? activeStyle : inactiveStyle}
        >
          <h1>Today</h1>
        </div>
        <div
          onClick={() => setActive("tomorrow")}
          className={active === "tomorrow" ? activeStyle : inactiveStyle}
        >
          <h1>Tomorrow</h1>
        </div>
        <div
          onClick={() => setActive("thisWeek")}
          className={active === "thisWeek" ? activeStyle : inactiveStyle}
        >
          <h1>Up coming</h1>
        </div>
      </div>
      <div className="md:col-span-4 md:mr-28 bg-gray-950 p-5 rounded-[5px] my-4 ">
        {active === "live"
          ? liveFixtures
          : active === "today"
            ? todayMatches
            : active === "tomorrow"
              ? tomorrowMatches
              : active === "thisWeek"
                ? thisWeekMatches
                : null}
      </div>
    </div>
  );
}
