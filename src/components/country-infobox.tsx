import React from 'react'
import Image from 'next/image'
import { CountryData } from '@/types/wikipedia'
import Link from 'next/link'

interface CountryInfoboxProps {
    countryData: CountryData
}

export default function CountryInfobox({ countryData }: CountryInfoboxProps) {
  return (
    <div className="border border-gray-300 bg-gray-50 pt-4 mt-8">
      <div className="text-center mb-4">
        <h2 className="font-bold text-lg">{countryData.officialName}</h2>
        <p className="text-gray-600 italic">{countryData.quechua} (<Link href="/quechua" className='text-blue-600 hover:underline'>quechua</Link>)</p>
        <p className="text-gray-600 italic">{countryData.aimara} (<Link href="/aimara" className='text-blue-600 hover:underline'>aimara</Link>)</p>
        
        <div className="flex justify-center gap-8 my-4 border-t pt-8">
          <div>
            <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/250px-Flag_of_Peru.svg.png"
            alt={`Bandera de ${countryData.commonName}`}
            width={140}
            height={140}
            className="mx-auto mb-2 border cursor-pointer"
            priority
          />
          <Link href="/bandera" className='text-blue-600 hover:underline'>Bandera</Link>
          </div>
          <div>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Escudo_nacional_del_Per%C3%BA.svg/120px-Escudo_nacional_del_Per%C3%BA.svg.png"
            alt={`Escudo de ${countryData.commonName}`}
            width={90}
            height={90}
            className="mx-auto cursor-pointer"
          />
          <Link href="/escudo" className='text-blue-600 hover:underline'>Escudo</Link>
          </div>
        </div>
        <div className="flex items-center justify-center border-t py-2">
        <Link href="/lema" className="text-blue-600 hover:underline">{countryData.lema}: </Link>
        <Link href="/firme" className="text-blue-600 hover:underline">{countryData.firme}</Link>
        </div>
        <div className="flex items-center justify-center border-t pt-2">
        <Link href="/himno" className="text-blue-600 hover:underline">{countryData.himno}: </Link>
        <Link href="/anthem" className="text-blue-600 hover:underline italic">{countryData.anthem}</Link>
        </div>
        <Link href="/problem" className="text-blue-600 hover:underline text-xs italic">{countryData.problem}</Link>
        <div className='border-t pt-4'>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/PER_orthographic.svg/250px-PER_orthographic.svg.png"
            alt={`Mapa de ${countryData.commonName}`}
            width={250}
            height={250}
            className="mx-auto cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}
