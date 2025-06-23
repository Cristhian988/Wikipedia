export interface CountryData {
  officialName: string
  commonName: string
  motto: string
  anthem: string
  capital: string
  largestCity: string
  officialLanguages: string[]
  demonym: string
  government: string
  president: string
  independence: {
    from: string
    date: string
  }
  area: string
  population: string
  density: string
  gdpPpp: string
  gdpPerCapita: string
  currency: string
  timezone: string
  isoCode: string
  internetDomain: string
}

export interface TocItem {
  number: string
  title: string
  href: string
  subsections?: TocItem[]
}

export interface SidebarSection {
  title: string
  links: Array<{
    text: string
    href: string
  }>
}

export interface NavigationTab {
  name: string
  href: string
  active: boolean
}