import { useEffect } from 'preact/hooks';
import ArrowIconRight from "./ArrowIconRight.tsx";
import ArrowIconLeft from "./ArrowIconLeft.tsx";
import IconClose from "./IconClose.tsx";

type CarouselItem = {
    name: string
    is_bw: boolean
}
type PropTypes = {
    activeItem: CarouselItem
    year: string|number
    handleClose: any
    handlePrev: any
    handleNext: any
}

export default function ImageCarousel(props: PropTypes) {
    useEffect(() => {
        // add listener on mount
        window.addEventListener("keydown", handleKeydown);

        // clean up listener on unmount
        return () => { window.removeEventListener('keydown', handleKeydown) }
    }, [handleKeydown])

    function handleKeydown(e: KeyboardEvent) {
        switch (e.code) {
            case "Escape":
                props.handleClose();
                break;
            case "ArrowLeft":
                props.handlePrev();
                break;
            case "ArrowRight":
                props.handleNext();
                break;
        }
    }
    return (
        <div className="font-sans h-screen w-screen fixed inset-0 flex flex-col items-center justify-center z-30">
            <button className="h-screen w-screen absolute inset-0 z-0 bg-emerald-900 bg-opacity-90" onClick={props.handleClose}></button>
            <div className="relative flex gap-6 items-center justify-center flex-col px-4">
                <div className="flex w-full justify-end">
                    <button className="text-white p-2 bg-emerald-700 bg-opacity-50 rounded-lg opacity-60 hover:opacity-100 focus:outline-none focus:ring focus:ring-emerald-400" onClick={props.handleClose}>
                        <IconClose className="h-8 w-8" />
                    </button>
                </div>
                <img className="pointer-events-none max-w-full ring-4 ring-emerald-200 ring-opacity-60"
                    src={`https://res.cloudinary.com/mikemcbride/image/upload/c_fill,g_faces:center,h_600,q_90,w_600,f_auto${props.activeItem.is_bw ? '' : '/e_grayscale'}/v1/xmas-${props.year}/collage/${props.activeItem.name}.webp`} />
                <div className="flex items-center justify-between w-full mx-auto">
                    <button onClick={props.handlePrev}
                        className="inline-flex items-center gap-2 text-white rounded-lg text-sm px-3 py-2 opacity-80 hover:opacity-100 bg-emerald-700 bg-opacity-50 focus:outline-none focus:ring focus:ring-emerald-400">
                        <ArrowIconLeft className="h-6 w-auto" /> Prev
                    </button>
                    <button onClick={props.handleNext}
                        className="inline-flex items-center gap-2 text-white rounded-lg text-sm px-3 py-2 opacity-80 hover:opacity-100 bg-emerald-700 bg-opacity-50 focus:outline-none focus:ring focus:ring-emerald-400">
                        Next
                        <ArrowIconRight className="h-6 w-auto" />
                    </button>
                </div>
            </div>
        </div>
    )
}

