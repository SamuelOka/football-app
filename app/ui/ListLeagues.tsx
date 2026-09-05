import { leagueData } from "../data/data";

export default function ListLeagues() {
  return (
    <ul className=" py-4  ">
      {/* {Object.values(leagueData.response)
        .slice(0, 20)
        .map((l: any) => (
          <li className="mb-3 flex items-center" key={l.league.id}>
            <img
              src={l.league.logo}
              alt={l.league.name}
              className="w-8 h-8 mr-2 md:mr-0s"
            />
            {l.league.name}
          </li>
        ))} */}
    </ul>
  );
}
