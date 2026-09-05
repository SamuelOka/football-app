import { leagueMatch } from "./data/data";
import FilterDisplay from "./ui/filter";
import ListLeagues from "./ui/ListLeagues";
import LiveFixtures from "./ui/liveFitxtures";
import Upcoming from "./ui/upComingMatches";
import UpcomingMatches from "./ui/upComingMatches";

export default async function Home() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  today.setDate(today.getDate() + 1);
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

  let MatchesTomorrow = null;
  let Matches1week = null;

  try {
    [MatchesTomorrow, Matches1week] = await Promise.all([
      leagueMatch(dateFromTomorrow, dateToTomorrow),
      leagueMatch(dateFrom1week, dateTo1week),
    ]);
  } catch (error) {
    console.error("Error fetching matches:", error);
  }

  function renderMatches(data: any, label: string) {
    if (!data?.matches) {
      return <div>Unable to load matches</div>;
    }
    if (data.matches.length === 0) {
      return <div>No matches {label}</div>;
    } else {
      return <UpcomingMatches upcoming={data} />;
    }
  }
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
            thisWeekMatches={renderMatches(Matches1week, "this week")}
          />
        </div>
      </div>
    </div>
  );
}
