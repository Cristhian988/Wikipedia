import React from "react";
import { CountryData } from "@/types/wikipedia";
import Link from "next/link";

export default function ArticleContent({
  countryData,
}: {
  countryData: CountryData;
}) {
  return (
    <div>
      <DisambiguationSection />
      <IntroductionSection countryData={countryData} />
    </div>
  );
}

function DisambiguationSection() {
  return (
    <p className="italic pl-6 mb-2">
      Para otros usos de este término, véase{" "}
      <Link
        href="/peru-desambiguacion"
        className="text-blue-600 hover:underline"
      >
        Perú (desambiguación)
      </Link>
      .
    </p>
  );
}

function IntroductionSection({ countryData }: { countryData: CountryData }) {
  return (
    <>
      <p className="mb-4">
        <strong>{countryData.commonName}</strong>, oficialmente la{" "}
        <strong>{countryData.officialName}</strong>,
        <sup className="text-blue-600">1</sup> es un{" "}
        <Link href="/pais-soberano" className="text-blue-600 hover:underline">
          país soberano
        </Link>{" "}
        ubicado en el oeste de{" "}
        <Link href="/america-del-sur" className="text-blue-600 hover:underline">
          América del Sur
        </Link>
        . Limita al norte, con{" "}
        <Link href="/ecuador" className="text-blue-600 hover:underline">
          Ecuador
        </Link>{" "}
        y{" "}
        <Link href="/colombia" className="text-blue-600 hover:underline">
          Colombia
        </Link>{" "}
        al este, con{" "}
        <Link href="/brasil" className="text-blue-600 hover:underline">
          Brasil
        </Link>{" "}
        y{" "}
        <Link href="/bolivia" className="text-blue-600 hover:underline">
          Bolivia
        </Link>
        ; al sur con{" "}
        <Link href="/chile" className="text-blue-600 hover:underline">
          Chile
        </Link>
        ; y al oeste, con el{" "}
        <Link href="/oceano-pacifico" className="text-blue-600 hover:underline">
          Océano Pacífico
        </Link>
        , que bordea sus 2250km de costa. Su territorio se compone de diversos
        paisajes: los valles, las mesetas y las altas cumbres de los{" "}
        <Link href="/andes" className="text-blue-600 hover:underline">
          Andes{" "}
        </Link>
        se despliegan al oeste hacia la{" "}
        <Link href="/oceano-pacifico" className="text-blue-600 hover:underline">
          costa desértica{" "}
        </Link>
        y el este hacia la{" "}
        <Link href="/amazonas" className="text-blue-600 hover:underline">
          Amazonía
        </Link>
        . Es uno de los{" "}
        <Link
          href="/paises-por-superficie"
          className="text-blue-600 hover:underline"
        >
          países con mayor diversidad biológica{" "}
        </Link>
        y mayores{" "}
        <Link
          href="/paises-por-superficie"
          className="text-blue-600 hover:underline"
        >
          recursos minerales{" "}
        </Link>
        del mundo.
      </p>
    </>
  );
}
