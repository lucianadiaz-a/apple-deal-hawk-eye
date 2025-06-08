
import { useState } from "react";
import Header from "@/components/Header";
import FilterBar from "@/components/FilterBar";
import DealCard from "@/components/DealCard";
import { mockDeals } from "@/data/mockDeals";
import { Deal } from "@/types/Deal";

const Index = () => {
  const [deals] = useState<Deal[]>(mockDeals);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRetailer, setSelectedRetailer] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <main className="container mx-auto px-4 py-6">
        <FilterBar
          selectedRetailer={selectedRetailer}
          setSelectedRetailer={setSelectedRetailer}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Live Apple Deals
          </h2>
          <p className="text-slate-600">
            {deals.length} deals found • Updated 5 minutes ago
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {deals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
