import { getCoronaStatusByCriteria } from "../api/countries";

export const useGraph = (countryName: string | undefined) => {
  const {
    result: deathsStatus,
    loading: deathsStatusLoading,
    error: deathsStatusError
  } = getCoronaStatusByCriteria("deaths", countryName || "lithuania");
  const {
    result: confirmedCasesStatus,
    loading: confirmedCasesStatusLoading,
    error: confirmedCasesStatusError
  } = getCoronaStatusByCriteria("confirmed", countryName || "lithuania");

  const stateConfirmedCases = {
    labels: confirmedCasesStatus?.map(x => x.date.toString().substring(0, 10)),
    datasets: [
      {
        label: "Confirmed Cases",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#47B881",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 0.2,
        data: confirmedCasesStatus?.map(x => x.cases)
      }
    ]
  };

  const stateConfirmedDeaths = {
    labels: deathsStatus?.map(x => x.date.toString().substring(0, 10)),
    datasets: [
      {
        label: "Confirmed Deaths",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "#EC4C47",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 0.2,
        data: deathsStatus?.map(x => x.cases)
      }
    ]
  };

  return {
    confirmedDeaths: deathsStatus ? stateConfirmedDeaths : null,
    confirmedCases: confirmedCasesStatus ? stateConfirmedCases : null,
    loading: deathsStatusLoading && confirmedCasesStatusLoading,
    error: confirmedCasesStatusError && deathsStatusError
  };
};
