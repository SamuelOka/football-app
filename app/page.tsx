import { DivideCircleIcon } from "lucide-react";
import { liveFixtures } from "./data/data";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-3">
      <div className="py-2 px-4 rounded-[5px] bg-red-500 text-white w-fit my-4">
        live
      </div>
      <div className="w-full">
        {liveFixtures.response.map((fixture: any) => (
          <div key={fixture.fixture.id}>
            <div className="flex justify-between items-center w-full py-2 ">
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-2">
                  <img
                    src={fixture.teams.home.logo}
                    className="w-6 h-6"
                    alt={fixture.teams.home.name}
                  />
                  <h2>{fixture.teams.home.name}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    className="w-6 h-6"
                    src={fixture.teams.away.logo}
                    alt={fixture.teams.away.name}
                  />
                  <h2>{fixture.teams.away.name}</h2>
                </div>
              </div>
              <div className="text-right ">
                <p> {fixture.goals.home}</p>
                <p className="mr-2 text-red-500">
                  {fixture.fixture.status.elapsed}`
                </p>
                <p> {fixture.goals.away} </p>
              </div>
            </div>
            <hr className="text-gray-800" />
          </div>
        ))}

        {/* {liveFixturesR.matches.map((match: any) => (
          <Link href={`/fulldetails/${match.id}`} key={match.id}>
            <div key={match.id}>
              <div className="flex justify-between items-center w-full py-2 ">
                <div className="flex flex-col items-start gap-4">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-3"
                      src={match.competition.emblem}
                      alt=""
                    />
                    <small className="">{match.competition.name}</small>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src={match.homeTeam.crest}
                      className="w-6 h-6"
                      alt={match.homeTeam.name}
                    />
                    <h2>{match.homeTeam.name}</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      className="w-6 h-6"
                      src={match.awayTeam.crest}
                      alt={match.awayTeam.name}
                    />
                    <h2>{match.awayTeam.name}</h2>
                  </div>
                </div>
                <div className="text-right ">
                  <div className="flex items-center gap-2">
                    <p> {match.score.fullTime.home}</p>
                    <p>{match.minute}</p>
                    <p> {match.goals.pop().score.away} </p>
                  </div>
                </div>
              </div>
              <hr className="text-gray-800" />
            </div>
          </Link>
        ))} */}
      </div>
    </div>
  );
}
