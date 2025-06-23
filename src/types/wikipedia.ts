export interface CountryData {
  officialName: string
  commonName: string
  quechua: string
  aimara: string
  lema: string
  firme: string
  himno: string
  anthem: string
  problem: string
  largestCity: string
  officialLanguages: string[]
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