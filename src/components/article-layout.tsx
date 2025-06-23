import React from 'react'
import ArticleHeader from './article-header'
import ArticleContent from './article-content'
import CountryInfobox from './country-infobox'
import { CountryData } from '@/types/wikipedia'

interface ArticleLayoutProps {
    countryData: CountryData
}

export default function ArticleLayout({countryData}: ArticleLayoutProps) {
  return (
    <main className="flex-1 p-4">
        <ArticleHeader title={countryData.commonName} />
        
        <div className="flex gap-6">
            <div className="flex-1">
                <ArticleContent countryData={countryData} />
            </div>
            
            <aside className="w-80">
                <CountryInfobox countryData={countryData} />
            </aside>
        </div>
    </main>
  )
}
