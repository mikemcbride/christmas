import { Fragment } from 'preact';
import { useState } from 'preact/hooks';

import CfImage from './CfImage.tsx';
import ImageCarousel from './ImageCarousel.tsx';

export default function Collage({ items, year }) {
    type CarouselItem = {
        name: string
        is_bw: boolean
    }

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    let activeItem = items[currentIndex]

    function showCarousel(idx: number) {
        setCurrentIndex(idx)
        setIsOpen(true)
    }
    function hideCarousel() {
        setIsOpen(false)
    }
    function loadPrevious() {
        if (currentIndex === 0) {
            setCurrentIndex(items.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }
    function loadNext() {
        if (currentIndex === items.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    return (
        <Fragment>
            <section className="grid gap-2 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 mt-8 mb-16">
                {items.map((item: CarouselItem, idx: number) => {
                    return <button key={idx}
                        className="focus:outline-none focus:ring focus:ring-emerald-500 dark:focus:ring-red-500 rounded-lg"
                        onClick={() => showCarousel(idx)}>
                        <CfImage classes="pointer-events-none opacity-80"
                            is_bw={!item.is_bw}
                            image={`${year}/collage/${item.name}`}
                            width={600}
                            height={600}
                        />
                    </button>
                })}
            </section>
            {isOpen &&
                <ImageCarousel
                    activeItem={activeItem}
                    year={year}
                    handleClose={() => hideCarousel()}
                    handlePrev={() => loadPrevious()}
                    handleNext={() => loadNext()}
                />
            }
        </Fragment>
    )
}
