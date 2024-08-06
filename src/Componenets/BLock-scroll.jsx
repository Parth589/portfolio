import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect, useRef} from "react";

gsap.registerPlugin(ScrollTrigger);

const BLockScroll = ({icon, title, content}) => {
    const ref = useRef(null);
    const parentRef = useRef(null);
    useEffect(() => {
        const elem = ref.current;
        gsap.to(elem, {
            x: '0%',
            scrollTrigger: {
                scrub: true,
                trigger: parentRef.current,
                start: "top center",
                end:"center center"
            },
            // delay: 1,
        })
    }, [])
    return (
        <div ref={parentRef}>
            <div ref={ref} className={'flex flex-col md:flex-row gap-4 text-purple bg-grayPurple w-full rounded-[45px] p-10 translate-x-full'}>
                <div className={'icon flex items-center md:justify-center basis-1/6'} data-cursor-exclusion={true}>
                    <img src={icon} alt=""
                         className={'w-10 fill-purple'}
                         style={{filter: "invert(69%) sepia(55%) saturate(2911%) hue-rotate(203deg) brightness(104%) contrast(102%)"}}/>
                </div>
                <div className={'content flex flex-col gap-4 basis-5/6'}>
                    <h4 className={'font-semibold text-lg'}>{title}</h4>
                    <span className={'text-base'}>{content}</span>
                </div>
            </div>
        </div>
    );
};

export default BLockScroll;