interface ParamsProp {
  params: Promise<{ id: Number }>;
}

// export default async function MatchDetails({ params }: ParamsProp) {
//   const { id } = await params;
//   const matchDetailsData = await matchDetails(id);

//   return (
//     <div>
//       <h1>Match Details</h1>
//       <p>
//         {matchDetailsData.homeTeam.name} vs {matchDetailsData.awayTeam.name}
//       </p>
//     </div>
//   );
// }
