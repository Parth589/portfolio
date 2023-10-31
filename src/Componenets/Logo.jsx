import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
const Logo = () => {
    const ref = useRef(null);
    useEffect(() => {
        const elem = ref.current;
        gsap.to(elem, {
            opacity: 0,
            scale: 0.8,
            scrollTrigger: {
                scrub: true,
                trigger: elem,
                start: "bottom top+=200",
                // end: "-=300"
            },
        })
    }, [])
    return (
        <>
            {/*<img ref={ref} src={logo} alt="" className={'h-full'}/>*/}
            <h1 ref={ref} className={'text-gray-400 text-2xl w-fit'}>
                <span>Hey stranger, this is </span>
                <div className={'font-bold mt-1 text-6xl text-white stroke-1 text-transparent tracking-widest'}>
                    P4RTH
                </div>
            </h1>
        </>);
};

export default Logo;