
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ExternalLink, TrendingDown } from "lucide-react";
import { Deal } from "@/types/Deal";

interface DealCardProps {
  deal: Deal;
}

const DealCard = ({ deal }: DealCardProps) => {
  const discountAmount = deal.originalPrice - deal.currentPrice;
  const discountPercentage = Math.round((discountAmount / deal.originalPrice) * 100);

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-slate-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            {deal.retailer}
          </Badge>
          <Badge 
            variant="outline" 
            className={`${
              deal.promoKeywords.includes('clearance') 
                ? 'bg-red-50 text-red-700 border-red-200' 
                : 'bg-orange-50 text-orange-700 border-orange-200'
            }`}
          >
            {deal.promoKeywords[0]}
          </Badge>
        </div>
        
        <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg flex items-center justify-center mb-3">
          <img 
            src={`https://images.unsplash.com/${deal.imageId}`}
            alt={deal.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        <h3 className="font-semibold text-slate-900 line-clamp-2 group-hover:text-blue-700 transition-colors">
          {deal.title}
        </h3>
      </CardHeader>
      
      <CardContent className="pb-3">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-slate-900">
              ${deal.currentPrice.toLocaleString()}
            </span>
            <TrendingDown className="h-4 w-4 text-green-600" />
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-slate-500 line-through">
              ${deal.originalPrice.toLocaleString()}
            </span>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
              -{discountPercentage}%
            </Badge>
          </div>
          
          <div className="text-sm text-green-600 font-medium">
            Save ${discountAmount.toLocaleString()}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-3 border-t border-slate-100">
        <div className="w-full space-y-3">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            <ExternalLink className="w-4 h-4 mr-2" />
            View Deal
          </Button>
          
          <div className="text-xs text-slate-500 text-center">
            Updated {deal.timestamp}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default DealCard;
