import { useLoaderData } from "react-router";
import Details from "./pages/details";
import { getBorderCountries } from "./utils/borderCountries";

function DetailsPage() {
  const country = useLoaderData();

  return (
    <>
      <Details data={country} />
    </>
  );
}

export default DetailsPage;

export const loader = async ({ params }) => {
  const id = params.id;
  let data = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
  if (!data.ok) {
    throw new Error("Opps!");
  }

  let [country] = await data.json();

  let borders = [];
  // console.log(country.borders);
  if (country.borders && country.borders.length > 0) {
    borders = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${country.borders.join(
        ","
      )}&fields=name,cca3,cca2`
    );
    borders = await borders.json();
  }

  return getBorderCountries(country, borders);
  // return data;
};
