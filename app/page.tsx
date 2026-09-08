import { ChevronDown } from "lucide-react";
import { leagueMatch, leagues } from "./data/data";
import FilterDisplay from "./ui/filter";
import ListLeagues from "./ui/ListLeagues";
import LiveFixtures from "./ui/liveFitxtures";
import Upcoming from "./ui/upComingMatches";
import UpcomingMatches from "./ui/upComingMatches";

function renderMatches(data: any, label: string) {
  if (!data?.matches) {
    return <div>Unable to load matches</div>;
  }
  if (data.matches.length === 0) {
    return <div>No matches {label}</div>;
  } else {
    return (
      <div>
        <div className="flex items-center gap-4 mb-8 mt-4 bg-neutral-300 p-3 rounded-2xl">
          <img
            className="w-15 h-15 object-cover"
            src={data.matches[0]?.competition.emblem}
            alt={data.matches[0]?.competition.name}
          />
          <ChevronDown />
        </div>
        <UpcomingMatches upcoming={data} />
      </div>
    );
  }
}

interface LeagueData {
  data: any[];
  label: String;
}

export default async function Home() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  today.setDate(today.getDate());
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

  try {
    [MatchesTomorrow, Matches1week] = await Promise.all([
      leagueMatch(dateFromTomorrow, dateToTomorrow),
      leagueMatch(dateFrom1week, dateTo1week),
    ]);
  } catch (error) {
    console.error("Error fetching matches:", error);
  }
  function getLeague1week(leagueCode: string, data: any) {
    if (!data) return { matches: [] };
    return {
      matches: data.matches.filter(
        (match: any) => match.competition.code === leagueCode,
      ),
    };
  }
  const PL1week = getLeague1week("PL", Matches1week);
  const PD1week = getLeague1week("PD", Matches1week);
  const SA1week = getLeague1week("SA", Matches1week);
  const CL1week = getLeague1week("CL", Matches1week);

  const MatchesInWeek: any[] = [
    { data: PL1week, label: "Premeier League" },
    { data: PD1week, label: "Laliga" },
    { data: SA1week, label: "Serie A" },
    { data: CL1week, label: "Champion League" },
  ];
  console.log("PL1week:", PL1week);
  console.log("leagues:", leagues);

  return (
    <div className="bg-gray-900 text-white min-h-screen px-3">
      <div className="w-full md:grid  md:grid-cols-5 ">
        <div className="hidden md:block grid-span-1">
          <ListLeagues />
        </div>
        <div className="md:col-span-4 md:mr-28">
          <FilterDisplay
            todayMatches={<LiveFixtures />}
            tomorrowMatches={renderMatches(MatchesTomorrow, "tomorrow")}
            thisWeekMatches={<OneweekMatches MatchesInWeek={MatchesInWeek} />}
          />
        </div>
      </div>
    </div>
  );
}

function OneweekMatches({ MatchesInWeek }: { MatchesInWeek: LeagueData[] }) {
  return (
    <div>
      {MatchesInWeek.map((i: any) => (
        <div key={i.label}>{renderMatches(i.data, i.label)}</div>
      ))}
    </div>
  );
}
