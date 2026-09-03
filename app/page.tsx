import FilterDisplay from "./ui/filter";
import ListLeagues from "./ui/ListLeagues";
import LiveFixtures from "./ui/liveFitxtures";
import UpcomingMatches from "./ui/upComingMatches";

export default async function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-3">
      <div className="w-full md:grid  md:grid-cols-5 ">
        <div className="hidden md:block grid-span-1">
          <ListLeagues />
        </div>
        <div className="md:col-span-4 md:mr-28">
          <FilterDisplay
            liveFixtures={<LiveFixtures />}
            upcomingMatches={<UpcomingMatches />}
          />
        </div>
      </div>
    </div>
  );
}
