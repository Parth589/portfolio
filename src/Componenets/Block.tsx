import { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
import colors, { type ColorVariants } from "../assets/colors";
import { type LucideIcon } from "lucide-react";
const Block = ({
    title,
    string,
    Icon,
    bgColor,
    lightText = false,
    isMobile = false,
    link = "#",
    cursorColor,
}: {
    title: string;
    cursorColor: string | undefined | null;
    string: string;
    Icon: LucideIcon;
    bgColor: string | undefined | null;
    lightText: boolean;
    isMobile: boolean;
    link: string;
}) => {
    const divRef = useRef(null);
    const pRef = useRef(null);
    const bottomRef = useRef(null);

    useEffect(() => {
        const divElement = divRef.current;
        console.log(divElement.offsetWidth);
        if (isMobile) {
            const handleMouseEnter = () => {
                gsap.to(divElement, { scale: 0.95, ease: gsap.Expo });
            };

            const handleMouseLeave = () => {
                gsap.to(divElement, { scale: 1, ease: gsap.Expo });
            };

            divElement.addEventListener("mouseenter", handleMouseEnter);
            divElement.addEventListener("mouseleave", handleMouseLeave);
            return () => {
                divElement.removeEventListener("mouseenter", handleMouseEnter);
                divElement.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
        const pElement = pRef.current;
        // const width = pElement.getBoundingClientRect().width
        gsap.set(pElement, { x: divElement?.offsetWidth });
        const pAnimation = gsap.to(pElement, {
            x: "-110%", // IDK why -100% didn't work
            duration: 5,
            repeat: -1, // how much time the animation should repeat itself
            ease: "none",
            paused: true,
        });
        const handleMouseEnter = () => {
            gsap.to(bottomRef.current, { bottom: "-100%", opacity: 0 });
            gsap.to(divElement, { scale: 0.95, ease: gsap.Expo });
            gsap.set(pElement, { opacity: 1 });
            pAnimation.resume();
        };

        const handleMouseLeave = () => {
            gsap.to(bottomRef.current, { bottom: "0", opacity: 1 });
            gsap.to(divElement, { scale: 1, ease: gsap.Expo });
            gsap.set(pElement, { opacity: 0 });
            pAnimation.pause();
        };

        divElement.addEventListener("mouseenter", handleMouseEnter);
        divElement.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            divElement.removeEventListener("mouseenter", handleMouseEnter);
            divElement.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [isMobile]);

    return (
        <a
            href={link}
            ref={divRef}
            className={`${lightText ? "text-white-500" : "text-black-500"} cursor-pointer overflow-hidden relative w-full h-full rounded-[45px] p-10 flex`}
            style={{
                backgroundColor: bgColor as string,
                // color: lightText ? colors.white[500] : colors.black[500],
            }}
            data-cursor-color={cursorColor}
        >
            <div className="top-section absolute top-1/2 -translate-y-1/2">
                <p
                    ref={pRef}
                    className={
                        "font-bold outline outline-2 outline-red-600 opacity-0 relative whitespace-nowrap text-4xl px-4"
                    }
                >
                    {string}
                </p>
            </div>
            <div
                ref={bottomRef}
                className=" bottom-0 bottom-section relative flex items-center justify-between mt-auto w-full text-lg"
            >
                <span>{title}</span>
                <Icon />
            </div>
        </a>
    );
};

export default Block;
