export const leagueData = await fetch(
  "https://v3.football.api-sports.io/leagues",
  {
    method: "GET",
    headers: {
      "x-apisports-key": "b9cc53689d7fea858a892229bf3bcfb1",
    },
  },
)
  .then((response) => response.json())
  .catch((err) => {
    console.log(err);
    return null;
  });

export const liveFixtures = await fetch(
  "https://v3.football.api-sports.io/fixtures?live=all",
  {
    method: "GET",
    headers: {
      "x-apisports-key": "b9cc53689d7fea858a892229bf3bcfb1",
    },
  },
)
  .then((response) => {
    return response.json();
  })
  .catch((err) => {
    console.log(err);
    return null;
  });
export const UpcomingFixtures = await fetch(
  "https://v3.football.api-sports.io/fixtures?league=61&next=10",
  {
    method: "GET",
    headers: { "x-apisports-key": "b9cc53689d7fea858a892229bf3bcfb1" },
  },
)
  .then((res) => {
    return res.json();
  })
  .catch((err) => {
    console.log(err);
    return null;
  });
