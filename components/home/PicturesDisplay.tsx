"use client"

import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

import * as React from "react"

const pictureNames: string[] = [
    "AB-repas",
    "AB-escrime",
    "AB-judo",
    "AB-pelote-basque",
    "AB-idk"
];

// https://ui.shadcn.com/docs/components/carousel
// https://www.embla-carousel.com/get-started/module/
export function PicturesDisplay({className}: {className?: string}) {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api]);

    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    return (
        <div className={`flex flex-col items-center ${className || ''}`}>
            <Carousel
                setApi={setApi}
                className="w-full max-w-sm md:max-w-md"
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {pictureNames.map((name, index) => (
                            <img className="object-cover px-20" key={index} src={"/sports/" + name + ".jpg"}/>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className="w-fit py-2 text-center text-sm text-muted-foreground">
                Photo {current} sur {count}
            </div>
        </div>
    )
}
