"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown, Languages } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

interface ArticleHeaderProps {
  title: string;
}

const navigationTabs = [
  { name: "Artículo", href: "#", active: true },
  { name: "Discusión", href: "#", active: false },
  { name: "Leer", href: "#", active: true },
  { name: "Editar", href: "#", active: false },
  { name: "Ver historial", href: "#", active: false },
];

const coordinates = [
  { name: "Coordenadas:", href: "#" },
  { name: <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Erioll_world.svg/15px-Erioll_world.svg.png" alt="" width={16} height={16} />, href: "#" },
  { name: "12°03′36″S 77°02′15″O", href: "#" },
  { name: "(mapa)", href: "#" },
  { name: <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag-map_of_Peru.svg/20px-Flag-map_of_Peru.svg.png" alt="" width={12} height={12} />, href: "#" },
];

export default function ArticleHeader({ title }: ArticleHeaderProps) {
  return (
    <header className="mb-4">
      <div className="flex items-center justify-between gap-2 border-b border-gray-200 pb-2">
        <h1 className="text-3xl font-serif">{title}</h1>
        <Button variant="ghost" size="lg" className="flex items-center gap-2">
          <Languages />
          <span>262 idiomas</span>
          <ChevronDown />
        </Button>
      </div>
      <div className="flex justify-between text-sm border-b border-gray-200 py-2 mb-1.5">
        <div className="flex items-center gap-2">
          {navigationTabs.slice(0, 2).map((tab, index) => {
            return (
              <Link
                key={index}
                href={tab.href}
                className={`hover:underline underline-offset-[12px] decoration-2 rounded px-1 ${
                  tab.active ? "underline" : "text-blue-600"
                }`}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          {navigationTabs.slice(2).map((tab, index) => {
            return (
              <Link
                key={index}
                href={tab.href}
                className={`hover:underline underline-offset-[12px] decoration-2 rounded px-1 ${
                  tab.active ? "underline" : "text-blue-600"
                }`}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-end">
        {coordinates.map((coord, index) => {
          return (
            <Link
              key={index}
              href={coord.href}
              className={`hover:underline text-[14px] text-blue-600 px-0.5`}
            >
              {coord.name}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
