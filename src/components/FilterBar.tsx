
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FilterBarProps {
  selectedRetailer: string;
  setSelectedRetailer: (retailer: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const FilterBar = ({
  selectedRetailer,
  setSelectedRetailer,
  selectedCategory,
  setSelectedCategory,
}: FilterBarProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 mb-6">
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Retailer
          </label>
          <Select value={selectedRetailer} onValueChange={setSelectedRetailer} disabled>
            <SelectTrigger className="bg-slate-50 border-slate-200">
              <SelectValue placeholder="All Retailers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Retailers</SelectItem>
              <SelectItem value="amazon">Amazon</SelectItem>
              <SelectItem value="bestbuy">Best Buy</SelectItem>
              <SelectItem value="apple">Apple Store</SelectItem>
              <SelectItem value="walmart">Walmart</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Product Type
          </label>
          <Select value={selectedCategory} onValueChange={setSelectedCategory} disabled>
            <SelectTrigger className="bg-slate-50 border-slate-200">
              <SelectValue placeholder="All Products" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Products</SelectItem>
              <SelectItem value="iphone">iPhone</SelectItem>
              <SelectItem value="macbook">MacBook</SelectItem>
              <SelectItem value="ipad">iPad</SelectItem>
              <SelectItem value="watch">Apple Watch</SelectItem>
              <SelectItem value="airpods">AirPods</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="text-sm text-slate-500 italic">
          Filters coming soon
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
