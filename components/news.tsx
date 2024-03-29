"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      console.log("current");
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section>
      <div className="flex flex-col justify-center items-center my-16 px-4 py-12 sm:px-6">
        <div className="flex flex-col mb-12">
        <div className="inline-flex text-sm md:text-base font-semibold py-3 px-6 m-2 text-white bg-[#e2961b] rounded-full mb-4">
              OLPH NEWS
            </div>
        </div>

        {/* Carousel */}
        {/* <div className="">
          <div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full sm:max-w-sm"
            >
              <CarouselContent>
                {Array.from({ length: 6 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="w-96 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-3xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
              Slide {current} of {count}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
