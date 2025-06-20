import { useLoaderData } from "react-router";
import Main from "./pages/main";
import { sortCountries } from "./utils/sortCountries";

export default function () {
  const countries = useLoaderData();
  return (
    <>
      <Main data={countries} />
    </>
  );
}

export const loader = async () => {
  let url =
    "https://restcountries.com/v3.1/all?fields=name,flags,cca2,cca3,population,region,capital";
  let data = await fetch(url);
  if (!data.ok) {
    throw new Error("Opps!");
  }

  return sortCountries(await data.json());
};
