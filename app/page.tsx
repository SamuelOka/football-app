import { ChevronDown } from "lucide-react";
import { leagueMatch, leagues } from "./data/data";
import FilterDate from "./ui/filterDate";
import ListLeagues from "./ui/ListLeagues";

import Upcoming from "./component/upComingMatches";
import UpcomingMatches from "./component/upComingMatches";
import plTheme from "../public/image/PremierLeagueTheme.jpeg";
import serieATheme from "../public/image/serie A theme.jpeg";
import budesligaTheme from "../public/image/bundesligaTheme.jpeg";
import laligaTheme from "../public/image/laligaTheme.jpeg";
import ligueOneTheme from "../public/image/LigueOneTheme.jpeg";
import championsLeagueTheme from "../public/image/champions League Theme.jpeg";
import Image from "next/image";
import LiveMatch from "./component/livematch";

function RenderMatches({ data, label }: { data: any; label: string }) {
  if (!data?.matches) {
    return <div>Unable to load matches</div>;
  }
  if (data.matches.length === 0) {
    return <div>no {label} matches</div>;
  } else {
    return (
      <div>
        <div className=" relative flex items-center w-[100%] h-[20%] gap-4 mb-8 mt-4 p-3 ">
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
            className="w-full h-[100%] absolute top-0 right-0 z-1 object-cover"
          />
          <img
            className="w-15 h-15 object-cover z-2"
            src={data.matches[0]?.competition.emblem}
            alt={data.matches[0]?.competition.name}
          />
          <ChevronDown />
        </div>
        <div className="m-5">
          {" "}
          <UpcomingMatches upcoming={data} />
        </div>
      </div>
    );
  }
}
function RenderMatchesLive({ data, label }: { data: any; label: string }) {
  if (!data?.matches) {
    return <div>Unable to load matches</div>;
  }
  if (data.matches.length === 0) {
    return <div>no {label} matches </div>;
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

export interface LeagueData {
  data: any[];
  label: String;
}

export default async function Home() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  today.setDate(today.getDate());
  const todayend = new Date(today);
  todayend.setDate(today.getDate() + 1);
  const dateFromToday = today.toISOString().split("T")[0];
  const dateToToday = todayend.toISOString().split("T")[0];

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const tomorrowend = new Date(tomorrow);
  tomorrowend.setHours(23, 59, 59, 999);
  const dateFromTomorrow = tomorrow.toISOString().split("T")[0];
  const dateToTomorrow = tomorrowend.toISOString().split("T")[0];

  const oneWeek = new Date(today);
  oneWeek.setDate(today.getDate() + 7);
  const dateFrom1week = today.toISOString().split("T")[0];
  const dateTo1week = oneWeek.toISOString().split("T")[0];

  let MatchesTomorrow: any = null;
  let Matches1week: any = null;
  let MatchesToday: any = null;
  try {
    [MatchesTomorrow, Matches1week, MatchesToday] = await Promise.all([
      leagueMatch(dateFromTomorrow, dateToTomorrow),
      leagueMatch(dateFrom1week, dateTo1week),
      leagueMatch(dateFromToday, dateToToday),
    ]);
  } catch (error) {
    console.error("Error fetching matches:", error);
  }
  function getLeagueMatches(leagueCode: String, data: any) {
    if (!data) return { matches: [] };
    return {
      matches: data.matches.filter(
        (match: any) => match.competition.code === leagueCode,
      ),
    };
  }
  const PLToday = getLeagueMatches("PL", MatchesToday);
  const PDToday = getLeagueMatches("PD", MatchesToday);
  const SAToday = getLeagueMatches("SA", MatchesToday);
  const CLToday = getLeagueMatches("CL", MatchesToday);

  const PLTomorrow = getLeagueMatches("PL", MatchesTomorrow);
  const PDTomorrow = getLeagueMatches("PD", MatchesTomorrow);
  const SATomorrow = getLeagueMatches("SA", MatchesTomorrow);
  const CLTomorrow = getLeagueMatches("CL", MatchesTomorrow);

  const PL1week = getLeagueMatches("PL", Matches1week);
  const PD1week = getLeagueMatches("PD", Matches1week);
  const SA1week = getLeagueMatches("SA", Matches1week);
  const CL1week = getLeagueMatches("CL", Matches1week);

  const MatchesInWeek: any[] = [
    { data: PL1week, label: "Premeier League" },
    { data: PD1week, label: "Laliga" },
    { data: SA1week, label: "Serie A" },
    { data: CL1week, label: "Champion League" },
  ];

  const LeagueMatchesTomorrow: any[] = [
    { data: PLTomorrow, label: "Premeier League" },
    { data: PDTomorrow, label: "Laliga" },
    { data: SATomorrow, label: "Serie A" },
    { data: CLTomorrow, label: "Champion League" },
  ];

  const LeagueMatchesToday: any[] = [
    { data: PLToday, label: "Premeier League" },
    { data: PDToday, label: "Laliga" },
    { data: SAToday, label: "Serie A" },
    { data: CLToday, label: "Champion League" },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen px-3">
      <div className="w-full md:grid  md:grid-cols-5 ">
        <div className="hidden md:block grid-span-1">
          <ListLeagues />
        </div>
        <div className="md:col-span-4 md:mr-28">
          <FilterDate
            matches={{
              PL: {
                today: (
                  <RenderMatchesLive data={PLToday} label={"Premier league"} />
                ),
                tomorrow: (
                  <RenderMatches data={PLTomorrow} label={"Premier league"} />
                ),
                thisWeek: (
                  <RenderMatches data={PL1week} label={"Premier league"} />
                ),
              },
              CL: {
                today: (
                  <RenderMatchesLive
                    data={CLToday}
                    label={"Champions League"}
                  />
                ),
                tomorrow: (
                  <RenderMatches data={CLTomorrow} label={"Champions League"} />
                ),
                thisWeek: (
                  <RenderMatches data={CL1week} label={"Champions League"} />
                ),
              },
              PD: {
                today: <RenderMatchesLive data={PDToday} label={"Laliga"} />,
                tomorrow: <RenderMatches data={PDTomorrow} label="Laliga" />,
                thisWeek: <RenderMatches data={PD1week} label="Laliga" />,
              },
              SA: {
                today: <RenderMatchesLive data={SAToday} label={"Serie A"} />,
                tomorrow: <RenderMatches data={SATomorrow} label="Serie A" />,
                thisWeek: <RenderMatches data={SA1week} label="Serie A" />,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
