import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Overlay from "../ui/overlay";

export function CarouselSpacing() {
  return (
    <Carousel className="w-[95%] mx-auto">
      <CarouselContent className="ml-1">
        {Array.from({ length: 12 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="pl-1 sm:basis-1/3 md:basis-1/2 lg:basis-1/5"
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-2 ">
                  <Image
                    src="https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"
                    alt="img"
                    className="aspect-[3/4] h-fit w-fit object-cover"
                    width={300}
                    height={400}
                  />
                  <Overlay/>
                  <h3 className="text-sm sm:text-lg font-semibold">
                    smartphone name
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    smartphone price
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
