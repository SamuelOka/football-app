"use client";
import React, { useState } from "react";

type Timeline = "today" | "tomorrow" | "thisWeek";
type LeagueCode = "PL" | "PD" | "CL" | "SA";
type MatchesbyLeague = Record<LeagueCode, Record<Timeline, React.ReactNode>>;
export default function FilterDate({ matches }: { matches: MatchesbyLeague }) {
  const [activeTime, setActiveTime] = useState<Timeline>("today");
  const [activeLeague, setActiveLeague] = useState<LeagueCode>("PL");
  const activeStyle =
    "py-2 px-4 rounded-[5px] text-[12px] bg-red-500 text-white w-fit my-4 cursor-pointer w-fit";
  const inactiveStyle =
    "py-2 px-4 rounded-[5px] text-[12px] bg-neutral-800 text-white w-fit my-4 cursor-pointer w-fit ";
  const Timeframe: { key: Timeline; label: string }[] = [
    { key: "today", label: "Today" },
    { key: "tomorrow", label: "Tomorrow" },
    { key: "thisWeek", label: "This week" },
  ];
  const Leagues: { key: LeagueCode; label: string }[] = [
    { key: "PL", label: "Premier League" },
    { key: "PD", label: "Laliga" },
    { key: "CL", label: "Champions League" },
    { key: "SA", label: "Seria A" },
  ];
  return (
    <div>
      <div className="flex gap-4">
        {Timeframe.map((t) => (
          <div
            key={t.key}
            onClick={() => setActiveTime(t.key)}
            className={activeTime === t.key ? activeStyle : inactiveStyle}
          >
            <h1>{t.label}</h1>
          </div>
        ))}
      </div>
      <hr className="my-5 text-neutral-500" />
      <div className="flex gap-3 w-full overflow-x-auto whitespace-nowrap  [scrollbar-width:none]">
        {Leagues.map((t) => (
          <div
            key={t.key}
            onClick={() => setActiveLeague(t.key)}
            className={activeLeague === t.key ? activeStyle : inactiveStyle}
          >
            <h1>{t.label}</h1>
          </div>
        ))}
      </div>
      <div className="md:col-span-4 md:mr-28 bg-gray-950  rounded-[5px] my-4 ">
        {matches[activeLeague][activeTime]}
      </div>
    </div>
  );
}
