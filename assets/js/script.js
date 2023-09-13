const API_URL = "https://restcountries.com/v3.1/all";

// Define the getStatus() whose task is: 1. get request to the URL and 2. Pass this data to a function that will display it.
async function loadCountryAPI() {
    const queryString = `${API_URL}`;
    const response = await fetch(queryString);
    const data = await response.json();
    if (response.ok) {
        displayCountries(data);
    } else {
        throw new Error(data.error);
    }
} 



const displayCountries = countries => {
    // console.log(countries);
    const countriesHTML = countries.map(country => getCountry(country))
    // Displaying div to html
    const container = document.getElementById("countries");
    container.innerHTML = countriesHTML.join(' ');
}

// get data and set it to html
const getCountry = (country) => {
    //console.log(country);
    return `
    <div class="country-div">
    <img src="${country.flags.png}">
    <h2>${country.name.common}</h2>
    <h4>Population: ${country.population}</h4>
    <h4>Region: ${country.region}</h4>
    <h4>Capital: ${country.capital}</h4>
    </div>
    `
}

loadCountryAPI();