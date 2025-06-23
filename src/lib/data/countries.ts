import type { CountryData } from "@/types/wikipedia"

const countriesData: Record<string, CountryData> = {
  peru: {
    officialName: "República del Perú",
    commonName: "Perú",
    quechua: "Piruw Ripuwlika",
    aimara: "Piruwxa Ripuwlika",
    lema: "Lema",
    firme: "«Firme y feliz por la unión»",
    himno: "Himno",
    anthem: "Himno Nacional del Perú",
    problem: "¿Problemas al reproducir este archivo?",
    largestCity: "Lima",
    officialLanguages: ["Español", "Quechua", "Aimara"],
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