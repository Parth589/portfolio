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
            <h1 ref={ref} className={'text-gray-400 text-2xl text-center'}>
                <span >
                    Hey stranger, This is
                </span>
                <div className={'font-bold m-2 italic text-6xl stroke-1 text-transparent text-center tracking-widest'} style={{
                    color: '#000',
                    background: 'transparent',
                    textShadow: `1px 1px 0 #ADADADFF,
                     1px -1px 0 #ADADADFF,
                     -1px 1px 0 #ADADADFF,
                     -1px -1px 0 #ADADADFF,
                     1px 0px 0 #ADADADFF,
                     0px 1px 0 #ADADADFF,
                     -1px 0px 0 #ADADADFF,
                     0px -1px 0 #ADADADFF`
                }}>
                    P4RTH
                </div>
            </h1>
        </>);
};

export default Logo;