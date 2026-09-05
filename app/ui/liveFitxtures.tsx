import { getLiveMatches, liveFixtures } from "../data/data";

export default async function LiveFixtures() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  today.setDate(today.getDate() + 1);
  const todayend = new Date(today);
  todayend.setHours(23, 59, 59, 999);
  const dateFromToday = today.toISOString().split("T")[0];
  const dateToToday = todayend.toISOString().split("T")[0];
  const liveMatches = await getLiveMatches(dateFromToday, dateToToday);
  console.log("Live Matches:", liveMatches);
  return (
    <div>
      {liveMatches.matches.map((match: any) => (
        <div key={match.id}>
          <div className="flex justify-between items-center w-full py-2 ">
            <div className="flex flex-col items-start gap-4">
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
              {match.status === "TIMED" ? (
                <p>
                  {new Date(match.utcDate).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              ) : match.status === "FINISHED" ? (
                <div className="flex flex-col items-end gap-3">
                  <p>{match.score.fullTime.home}</p>
                  <p>{match.score.fullTime.away}</p>
                </div>
              ) : match.status === "LIVE" ? (
                <div className="flex flex-col items-end gap-3">
                  <p>{match.score.fullTime.home}</p>
                  <p>{match.score.fullTime.away}</p>
                </div>
              ) : null}
            </div>
          </div>
          <hr className="text-gray-800" />
        </div>
      ))}
    </div>
  );
}
