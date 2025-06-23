import Header from "@/components/header";
import SidebarLeft from "@/components/sidebarLeft";
import ArticleLayout from "@/components/article-layout";
import { getCountryData } from "@/lib/data/countries";

export default async function Home() {
  const countryData = await getCountryData("peru");
  return (
    <div className="bg-[#f8f9fb]">
      <Header />
      <main className="bg-white container mx-auto flex ">
        <SidebarLeft /> 
        <ArticleLayout countryData={countryData} />
        <SidebarLeft />
      </main>
    </div>
  );
}
