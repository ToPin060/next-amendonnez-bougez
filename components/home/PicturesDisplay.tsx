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
    "tennis",
    "football",
    "athletism",
    "arc-bow"
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
                className="h-auto w-auto"
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {pictureNames.map((name, index) => (
                        <img key={index} src={"/sports/" + name + ".jpg"}/>
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
