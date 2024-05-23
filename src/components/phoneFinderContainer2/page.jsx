'use client'
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Seekbar from "./Seekbar";
import PriceSearch from "./PriceSearch";

const smartphones = [
  "SAMSUNG",
  "APPLE",
  "HUAWEI",
  "NOKIA",
  "SONY",
  "LG",
  "HTC",
  "MOTOROLA",
  "LENOVO",
  "XIAOMI",
  "GOOGLE",
  "HONOR",
  "OPPO",
  "REALME",
  "ONEPLUS",
  "NOTHING",
  "VIVO",
  "INFINIX",
  "ASUS",
  "TECNO",
  "MICROSOFT"
];

export function TabsDemo() {
  return (
    <Tabs defaultValue="allBrands" className="w-full h-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="allBrands">All Brands</TabsTrigger>
        <TabsTrigger value="findPhone">Find Phone</TabsTrigger>
      </TabsList>
      <TabsContent value="allBrands">
        <Card>
          <CardHeader>
            <CardTitle className="text-center mb-2">All Brands</CardTitle>
            <CardDescription>
              <div className="grid grid-cols-3 gap-4">
                {smartphones.map((phone, index) => (
                  <button
                    key={index}
                    className="phone-item p-2 border rounded bg-gray-100 hover:bg-gray-200"
                  >
                    {phone}
                  </button>
                ))}
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2"></CardContent>
          <CardFooter className="flex items-center justify-end">
           
          <span className="mr-2 text-xl">View all</span>
           <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent className="w-full h-full" value="findPhone">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Find Phone</CardTitle>
            <CardDescription>
            <Seekbar/>
            <PriceSearch/>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2"></CardContent>
          <CardFooter>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
