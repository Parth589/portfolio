import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LucideIcon } from "lucide-react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const BLockScroll = ({
    Icon,
    title,
    content,
    bgColor,
    color,
    animDirection,
}: {
    Icon: LucideIcon;
    title: string;
    content: string;
    bgColor: string | undefined | null;
    color: string | undefined | null;
    animDirection: "ltr" | "rtl";
}) => {
    const ref = useRef(null);
    const parentRef = useRef(null);
    useEffect(() => {
        const elem = ref.current;
        gsap.to(elem, {
            x: "0%",
            scrollTrigger: {
                scrub: true,
                trigger: parentRef.current,
                start: "bottom bottom",
                end: "center center",
            },
            // delay: 1,
        });
    }, []);
    return (
        <div ref={parentRef}>
            <div
                ref={ref}
                className={`flex flex-col md:flex-row gap-4 text-purple bg-grayPurple w-full rounded-[45px] p-10 ${animDirection === "ltr" ? "-translate-x-full" : "translate-x-full"}`}
                style={{
                    backgroundColor: bgColor as string,
                    color: color as string,
                }}
            >
                <div
                    className={
                        "icon flex items-center md:justify-center basis-1/6"
                    }
                >
                    <Icon
                        size={30}
                        // style={{
                        //     filter: "invert(69%) sepia(55%) saturate(2911%) hue-rotate(203deg) brightness(104%) contrast(102%)",
                        // }}
                    />
                </div>
                <div className={"content flex flex-col gap-4 basis-5/6"}>
                    <h4 className={"font-semibold text-lg"}>{title}</h4>
                    <span className={"text-base"}>{content}</span>
                </div>
            </div>
        </div>
    );
};

export default BLockScroll;
