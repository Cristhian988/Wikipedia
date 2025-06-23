import React from "react";
import { Button } from "./ui/button";
import { Ellipsis, Menu, Search } from "lucide-react";
import { Input } from "./ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
        <div className="container mx-auto flex items-center justify-between bg-white px-4 py-2">
          <div className="flex items-center gap-4">
            <Button variant='ghost' size='icon'>
              <Menu size={60} />
            </Button>
            <div className="flex items-center gap-2">
              <Image
                src="https://es.wikipedia.org/static/images/icons/wikipedia.png"
                alt="Wikipedia"
                width={50}
                height={50}
              />
              <Image
                src="https://es.wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-en.svg"
                alt="Wikipedia"
                width={100}
                height={60}
                className="mr-2"
              />
            </div>
            
            <div className="w-[450px]">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4" />
              <Input placeholder="Buscar en Wikipedia" className="pl-8 rounded-none" />
              <Button
              variant='outline'
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 p-0 px-2"
              >
                Buscar
              </Button>
            </div>
          </div>
          </div>

          
          <div className="flex items-center gap-3 text-[15px]">
            <Link href="#" className="text-blue-600 hover:underline">Donaciones</Link>
            <Link href="#" className="text-blue-600 hover:underline">Crear una cuenta</Link>
            <Link href="#" className="text-blue-600 hover:underline">Acceder</Link>
            <Button variant="ghost" size="icon"><Ellipsis /></Button>
          </div>
        </div>
    </header>
  );
}
