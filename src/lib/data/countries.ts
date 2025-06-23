import type { CountryData } from "@/types/wikipedia"

const countriesData: Record<string, CountryData> = {
  peru: {
    officialName: "República del Perú",
    commonName: "Perú",
    motto: "«Firme y feliz por la unión»",
    anthem: "Himno Nacional del Perú",
    capital: "Lima",
    largestCity: "Lima",
    officialLanguages: ["Español", "Quechua", "Aimara"],
    demonym: "Peruano, -a",
    government: "República presidencialista",
    president: "Dina Boluarte",
    independence: {
      from: "España",
      date: "28 de julio de 1821",
    },
    area: "1 285 216 km²",
    population: "33 396 698 hab. (2023)",
    density: "26 hab./km²",
    gdpPpp: "US$ 472 036 millones (2023)",
    gdpPerCapita: "US$ 14 130 (2023)",
    currency: "Sol (PEN)",
    timezone: "UTC-5",
    isoCode: "604 / PER / PE",
    internetDomain: ".pe",
  },
}

export async function getCountryData(countrySlug: string): Promise<CountryData> {
  // Simular una llamada a API o base de datos
  await new Promise((resolve) => setTimeout(resolve, 100))

  const country = countriesData[countrySlug]
  if (!country) {
    throw new Error(`Country data not found for: ${countrySlug}`)
  }

  return country
}

export async function getAllCountries(): Promise<string[]> {
  return Object.keys(countriesData)
}