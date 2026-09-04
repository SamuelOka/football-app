import { ArrowBigDownDashIcon, ChevronDown } from "lucide-react";

export default function UpcomingMatches({ upcoming }: { upcoming: any }) {
  return (
    <div>
      {/* <div className="flex items-center gap-4 mb-8">
        <img
          className="w-10 h-10 object-cover"
          src={upcoming.competition.emblem}
          alt={upcoming.competition.name}
        />
        <ChevronDown />
      </div> */}
      {upcoming.matches.map((fixture: any) => (
        <div key={fixture.id}>
          <div className="flex justify-between items-center w-full py-2 ">
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-2">
                <img
                  src={fixture.homeTeam.crest}
                  className="w-6 h-6"
                  alt={fixture.homeTeam.name}
                />
                <h2>{fixture.homeTeam.name}</h2>
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="w-6 h-6"
                  src={fixture.awayTeam.crest}
                  alt={fixture.awayTeam.name}
                />
                <h2>{fixture.awayTeam.name}</h2>
              </div>
            </div>
            <div className="text-right ">
              <p>{new Date(fixture.utcDate).toDateString()}</p>
            </div>
          </div>
          <hr className="text-gray-800" />
        </div>
      ))}
    </div>
  );
}
