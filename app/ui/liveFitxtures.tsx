import { ChevronDown } from "lucide-react";
import LiveMatch from "../component/livematch";
import { leagueMatch } from "../data/data";
import { LeagueData } from "../page";

import plTheme from "../../public/image/PremierLeagueTheme.jpeg";
import serieATheme from "../../public/image/serie A theme.jpeg";
import budesligaTheme from "../../public/image/bundesligaTheme.jpeg";
import laligaTheme from "../../public/image/laligaTheme.jpeg";
import ligueOneTheme from "../../public/image/LigueOneTheme.jpeg";
import championsLeagueTheme from "../../public/image/champions League Theme.jpeg";
import Image from "next/image";

function getTodayMatches(data: any, leagueCode: String) {
  if (!data) return { matches: [] };
  return {
    matches: data.matches.filter((m: any) => m.competition.code === leagueCode),
  };
}

export default async function LiveFixtures() {
  const today = new Date();
  today.setDate(today.getDate());
  today.setHours(0, 0, 0, 0);
  const todayend = new Date(today);
  todayend.setDate(today.getDate() + 1);
  const dateFromToday = today.toISOString().split("T")[0];
  const dateToToday = todayend.toISOString().split("T")[0];
  const liveMatches = await leagueMatch(dateFromToday, dateToToday);
  console.log("Live Matches:", liveMatches);

  const PltodayMatches = getTodayMatches(liveMatches, "PL");
  const LigatodayMatches = getTodayMatches(liveMatches, "PD");
  const SerieAtodayMatches = getTodayMatches(liveMatches, "SA");
  const ChampiontodayMatches = getTodayMatches(liveMatches, "CL");

  const AllTodayMatches: any[] = [
    { data: PltodayMatches, label: "Premier League" },
    { data: LigatodayMatches, label: "Laliga" },
    { data: SerieAtodayMatches, label: "Serie A" },
    { data: ChampiontodayMatches, label: "Champions League" },
  ];

  console.log("AllMAtches", AllTodayMatches);
  return (
    <div>
      {liveMatches && liveMatches.matches.length === 0 ? (
        <div>No live today</div>
      ) : (
        <RenderAllMatches AllTodayMatches={AllTodayMatches} />
      )}
    </div>
  );
}

function renderMatches(data: any, label: string) {
  if (!data?.matches) {
    return <div>Unable to load matches</div>;
  }
  if (data.matches.length === 0) {
    return <div></div>;
  } else {
    return (
      <div>
        <div className="relative flex items-center w-[100%] h-[20%] gap-4 mb-8 mt-4 p-3">
          <Image
            src={
              data.matches[0]?.competition.code === "PL"
                ? plTheme
                : data.matches[0]?.competition.code === "SA"
                  ? serieATheme
                  : data.matches[0]?.competition.code === "CL"
                    ? championsLeagueTheme
                    : data.matches[0]?.competition.code === "PD"
                      ? laligaTheme
                      : laligaTheme
            }
            alt=""
            className="w-full h-[100%]  absolute top-0 right-0 z-1 object-cover"
          />
          <img
            className="w-15 h-15 object-cover z-2"
            src={data.matches[0]?.competition.emblem}
            alt={data.matches[0]?.competition.name}
          />

          <ChevronDown />
        </div>
        <div className="m-5 ">
          <LiveMatch livematches={data} />
        </div>
      </div>
    );
  }
}
function RenderAllMatches({
  AllTodayMatches,
}: {
  AllTodayMatches: LeagueData[];
}) {
  return (
    <div>
      {AllTodayMatches.map((a: any) => (
        <div key={a.label}>{renderMatches(a.data, a.label)} </div>
      ))}
    </div>
  );
}
