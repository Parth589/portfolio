import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
import {
    SquareTerminal,
    User,
    Eye,
    Send,
    Linkedin,
    Instagram,
    Github,
    Cpu,
    LaptopMinimal,
} from "lucide-react";
import Logo from "./Componenets/Logo";
import Block from "./Componenets/Block";
import BlockBG from "./Componenets/BlockBG";
import BLockScroll from "./Componenets/BLock-scroll";
import Badge from "./Componenets/Badge";
import { useEffect, useState } from "react";
import ProjectCard from "./Componenets/ProjectCard";
import colors from "./assets/colors";
import { LucideX } from "lucide-react";

function App() {
    let [isMobile, setIsMobile] = useState<boolean>(false);
    useEffect(() => {
        // check for common mobile user agents
        if (
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/webOS/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/iPod/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/Windows Phone/i)
        ) {
            // the user is using a mobile device
            setIsMobile(true);
        }
    }, []);
    return (
        <div className={"bg-black-500 pt-14 pb-3 px-3"}>
            {!isMobile && <Cursor isGelly={true} />}
            <div
                data-cursor-exclusion={true}
                data-cursor-size="80px"
                className={"h-11 px-4 w-fit my-28"}
            >
                <Logo />
            </div>
            <div className={"flex flex-col-reverse lg:flex-row gap-3 mb-3"}>
                <div
                    className={
                        "flex flex-col sm:grid sm:grid-cols-2 gap-3  basis-1/2"
                    }
                >
                    <Block
                        link={"#projects"}
                        isMobile={isMobile}
                        title={"Work"}
                        string={"Showcase for projects"}
                        bgColor={colors.white[500]}
                        lightText={false}
                        Icon={SquareTerminal}
                        cursorColor={colors.black[500]}
                    />
                    <Block
                        link={"#aboutUs"}
                        isMobile={isMobile}
                        title={"About me"}
                        string={"Who am i?"}
                        bgColor={colors.blue[600]}
                        lightText={true}
                        Icon={User}
                        cursorColor={colors.white[500]}
                    />
                    <div className={"col-span-2"}>
                        <Block
                            link={"#contactUs"}
                            isMobile={isMobile}
                            title={"connect with me"}
                            string={"Lets talk business!"}
                            bgColor={colors.yellow[300]}
                            lightText={false}
                            Icon={Send}
                            cursorColor={colors.black[500]}
                        />
                    </div>
                </div>
                <div
                    className={" basis-1/2"}
                    data-cursor-color={colors.yellow[300]}
                >
                    <BlockBG
                        color={colors.yellow[500]}
                        bgColor={colors.yellow[600] as string}
                        title={"Who am I?"}
                    >
                        A student and web developer specializing in{" "}
                        <b className={"font-bold italic"}>Frontend</b> &{" "}
                        <b className={"font-bold italic"}>Backend</b>{" "}
                        development
                    </BlockBG>
                </div>
            </div>

            <div className={"flex flex-col lg:flex-row lg:gap-3"}>
                <div
                    id={"aboutUs"}
                    className={"mb-3 basis-1/2"}
                    data-cursor-color={colors.purple[200]}
                >
                    <BlockBG
                        color={colors.purple[200]}
                        bgColor={colors.purple[600]}
                        title={"What I do?"}
                    >
                        I specialize in web development, frontend and backend,
                        creating <i className={"italic font-bold "}>dynamic</i>{" "}
                        & <i className={"italic font-bold "}>innovative </i>{" "}
                        websites.
                    </BlockBG>
                </div>
                <div
                    id={"showcase"}
                    className={
                        "overflow-hidden w-full flex flex-col gap-3 mb-3 basis-1/2"
                    }
                    data-cursor-color={colors.purple[200]}
                >
                    <BLockScroll
                        Icon={SquareTerminal}
                        color={colors.purple[200]}
                        bgColor={colors.purple[600]}
                        title={"Open source"}
                        content={
                            "I usually make contributions to open source projects. Because of their nature to be free in freedom."
                        }
                        animDirection="rtl"
                    />
                    <BLockScroll
                        Icon={Cpu}
                        color={colors.purple[200]}
                        bgColor={colors.purple[600]}
                        title={"Linux"}
                        content={
                            "I am a big fan of Linux (the kernel and the distros) as that's what inspired and aware me of my privacy. Also because i have full freedom to do whatever to my system."
                        }
                        animDirection="rtl"
                    />
                    <BLockScroll
                        Icon={Eye}
                        color={colors.purple[200]}
                        bgColor={colors.purple[600]}
                        title={"Web"}
                        content={
                            "I love to explore mess like web. That's why i contribute in it to be a bigger mess."
                        }
                        animDirection="rtl"
                    />
                </div>
            </div>
            <div
                id={"projects"}
                className={
                    "before:hidden mb-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
                }
                data-cursor-color={colors.green}
            >
                <div className={"lg:col-span-2"}>
                    <Block
                        title={"Projects"}
                        link={"https://github.com/Parth589"}
                        bgColor={colors.green[600]}
                        cursorColor={colors.green[200]}
                        isMobile={isMobile}
                        lightText={true}
                        string={"My GitHub Profile..."}
                        Icon={LaptopMinimal}
                    />
                </div>
                <div>
                    <ProjectCard
                        title={"E-commerce cart"}
                        link={"https://github.com/Parth589/ecommerce-cart"}
                        desc={
                            "An ecommerce cart website built using Next js, postgresql and shadcn/ui"
                        }
                        tags={["typescript", "nextjs", "reactjs", "postgresql"]}
                        bgColor={colors.green[600]}
                        color={colors.green[200]}
                        cursorColor={colors.green[200]}
                    />
                </div>
                <div>
                    <ProjectCard
                        title={"Context.io"}
                        link={"https://github.com/Parth589/context.io"}
                        desc={
                            "A Text sharing platform utility built using Next js, postgresql and shadcn/ui"
                        }
                        tags={["typescript", "nextjs", "reactjs", "postgresql"]}
                        bgColor={colors.green[600]}
                        color={colors.green[200]}
                        cursorColor={colors.green[200]}
                    />
                </div>
                <div className="lg:col-span-2">
                    <ProjectCard
                        title={"ffmpeg-in-browser"}
                        link={"https://github.com/Parth589/ffmpeg-in-browser"}
                        desc={"A Basic Ui wrapper of ffmpeg.wasm utility"}
                        tags={["typescript", "nextjs", "reactjs", "postgresql"]}
                        bgColor={colors.green[600]}
                        color={colors.green[200]}
                        cursorColor={colors.green[200]}
                    />
                </div>
            </div>
            <div className={"flex flex-col lg:flex-row-reverse lg:gap-3"}>
                <div
                    id={"aboutUs"}
                    className={"mb-3 basis-1/2"}
                    data-cursor-color={colors.purple[200]}
                >
                    <BlockBG
                        color={colors.purple[200]}
                        bgColor={colors.purple[600]}
                        title={"What I do?"}
                    >
                        I specialize in web development, frontend and backend,
                        creating <i className={"italic font-bold "}>dynamic</i>{" "}
                        & <i className={"italic font-bold "}>innovative </i>{" "}
                        websites.
                    </BlockBG>
                </div>
                <div
                    id={"showcase"}
                    className={
                        "overflow-hidden w-full flex flex-col gap-3 mb-3 basis-1/2"
                    }
                    data-cursor-color={colors.purple[200]}
                >
                    <BLockScroll
                        Icon={SquareTerminal}
                        color={colors.purple[200]}
                        bgColor={colors.purple[600]}
                        title={"Open source"}
                        content={
                            "I usually make contributions to open source projects. Because of their nature to be free in freedom."
                        }
                        animDirection="ltr"
                    />
                    <BLockScroll
                        Icon={Cpu}
                        color={colors.purple[200]}
                        bgColor={colors.purple[600]}
                        title={"Linux"}
                        content={
                            "I am a big fan of Linux (the kernel and the distros) as that's what inspired and aware me of my privacy. Also because i have full freedom to do whatever to my system."
                        }
                        animDirection="ltr"
                    />
                    <BLockScroll
                        Icon={Eye}
                        color={colors.purple[200]}
                        bgColor={colors.purple[600]}
                        title={"Web"}
                        content={
                            "I love to explore mess like web. That's why i contribute in it to be a bigger mess."
                        }
                        animDirection="ltr"
                    />
                </div>
            </div>

            <div
                id={"contactUs"}
                className={"before:hidden"}
                data-cursor-color={colors.yellow[200]}
                data-cursor-background-text="React"
            >
                <BlockBG
                    title={"Contact us"}
                    color={colors.yellow[200]}
                    bgColor={colors.yellow[600]}
                >
                    Do you have a question, an idea, or a project you need help
                    with? <br /> Just give a message! <br />
                    <div className={"w-fit my-4 flex flex-col gap-5"}>
                        <div className={"flex gap-5 flex-wrap"}>
                            <Badge
                                color={colors.yellow[200]}
                                bgColor={colors.yellow[600]}
                                link={"mailto:p4rth4507@gmail.com"}
                            >
                                p4rth4507@gmail.com
                            </Badge>
                        </div>
                        <div className={"flex gap-5 "}>
                            <div>
                                <Badge
                                    color={colors.yellow[200]}
                                    bgColor={colors.yellow[600]}
                                    link={
                                        "https://www.linkedin.com/in/parth-parmar-2b5518245"
                                    }
                                >
                                    <Linkedin />
                                </Badge>
                            </div>
                            <Badge
                                color={colors.yellow[200]}
                                bgColor={colors.yellow[600]}
                                link={"https://github.com/Parth589"}
                            >
                                <Github />
                            </Badge>
                            <Badge
                                color={colors.yellow[200]}
                                bgColor={colors.yellow[600]}
                                link={"https://www.instagram.com/udad.ki.daal"}
                            >
                                <Instagram />
                            </Badge>
                        </div>
                    </div>
                </BlockBG>
            </div>
        </div>
    );
}

export default App;
