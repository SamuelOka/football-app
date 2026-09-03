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
const today = new Date();
today.setHours(0, 0, 0, 0);

const oneWeek = new Date(today);
oneWeek.setDate(today.getDate() + 7);
const dateFrom = today.toISOString().split("T")[0];
const dateTo = oneWeek.toISOString().split("T")[0];

export const UpcomingMatchePL = await fetch(
  `https://api.football-data.org/v4/competitions/PL/matches?status=SCHEDULED&dateFrom=${dateFrom}&dateTo=${dateTo}`,
  {
    method: "GET",
    headers: { "X-Auth-Token": "613ed7ef76db40c199c0ec39994b92f1" },
  },
)
  .then((res) => {
    return res.json();
  })
  .catch((err) => {
    console.log(err);
    return null;
  });

export const UpcomingMatcheLiga = await fetch(
  `https://api.football-data.org/v4/competitions/PD/matches?status=SCHEDULED&dateFrom=${dateFrom}&dateTo=${dateTo}`,
  {
    method: "GET",
    headers: { "X-Auth-Token": "613ed7ef76db40c199c0ec39994b92f1" },
  },
)
  .then((res) => {
    return res.json();
  })
  .catch((err) => {
    console.log(err);
    return null;
  });

export const UpcomingMatcheSerieA = await fetch(
  `https://api.football-data.org/v4/competitions/SA/matches?status=SCHEDULED&dateFrom=${dateFrom}&dateTo=${dateTo}`,
  {
    method: "GET",
    headers: { "X-Auth-Token": "613ed7ef76db40c199c0ec39994b92f1" },
  },
)
  .then((res) => {
    return res.json();
  })
  .catch((err) => {
    console.log(err);
    return null;
  });

export const liveMatches = await fetch(
  "https://api.football-data.org/v4/matches?",
  {
    method: "GET",
    headers: { "X-Auth-Token": "613ed7ef76db40c199c0ec39994b92f1" },
  },
)
  .then((res) => {
    return res.json();
  })
  .catch((err) => {
    console.log(err);
    return null;
  });
