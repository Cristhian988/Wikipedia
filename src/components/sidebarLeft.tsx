import React from 'react'
import { sidebarSections } from '@/lib/data/sidebar'
import { Button } from './ui/button'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function SidebarLeft() {
  return (
    <aside className="w-64 min-h-screen p-4 border-r border-gray-200">
        <div className="border-b pb-1 flex items-center space-x-2">
            <h3 className="text-[15px] font-bold">Contenidos</h3>
            <Button variant="secondary" className="text-sm">ocultar</Button>
        </div>
      <nav className="pt-2">
        <h3 className="text-[15px] font-bold">Inicio</h3>
        {sidebarSections.map((section, index) => (
          <div key={index} className="pt-1">
            <details className="leading-tight">
              <summary className="text-blue-600 text-[15px] py-1 cursor-pointer flex items-center">
                <button className="mr-1"><ChevronRight size={16} className='text-black' /></button>
                {section.title}</summary>
                {section.links.map((link, linkIndex) => (
                  <Link key={linkIndex} href={link.href} className="pl-8 block py-1 leading-snug text-[15px] text-blue-600 hover:underline">
                    {link.text}
                  </Link>
                ))}
            </details>
          </div>
        ))}
      </nav>
    </aside>
  )
}
