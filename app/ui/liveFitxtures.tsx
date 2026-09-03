import { liveFixtures } from "../data/data";

export default async function LiveFixtures() {
  return (
    <div>
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
    </div>
  );
}
