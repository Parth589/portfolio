import {Cursor} from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';
import terminalIcon from "./assets/terminal.svg"
import supportIcon from "./assets/support.svg"
import eyeIcon from "./assets/eye.svg"
import aboutIcon from "./assets/domain.svg"
import contactIcon from "./assets/send.svg"
import linkedinIcon from "./assets/linkedin.svg"
import instagramIcon from "./assets/instagram.svg"
import githubIcon from "./assets/github.svg"
import Logo from "./Componenets/Logo.jsx";
import Block from "./Componenets/Block.jsx";
import BlockBG from "./Componenets/BlockBG.jsx";
import BLockScroll from "./Componenets/BLock-scroll.jsx";
import Badge from "./Componenets/Badge.jsx";
import {useEffect, useState} from "react";
import ProjectCard from "./Componenets/ProjectCard.jsx";
import colors from "./assets/colors.js";

function App() {
    let [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        // check for common mobile user agents
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            // the user is using a mobile device
            setIsMobile(true);
        }
    }, [])
    return (
        <div className={'bg-black pt-14 pb-3 px-3'}>
            {!isMobile && <Cursor isGelly={true}/>}
            <div data-cursor-exclusion={true} data-cursor-size="80px"
                 className={'h-11 px-4 w-fit my-28'}>
                <Logo/>
            </div>
            <div className={'flex flex-col-reverse lg:flex-row gap-3 mb-3'}>

                <div className={'flex flex-col sm:grid sm:grid-cols-2 gap-3  basis-1/2'}>
                    <Block link={'#projects'} isMobile={isMobile} title={'Work'} string={'Showcase for projects'}
                           colour={colors.white}
                           icon={terminalIcon} cursorColor={colors.black}/>
                    <Block link={'#aboutUs'} isMobile={isMobile} title={'About us'} string={'Who am i?'}
                           colour={colors.darkBlue}
                           lightText={true}
                           icon={aboutIcon} cursorColor={colors.white}/>
                    <div className={'col-span-2'}>
                        <Block link={'#contactUs'} isMobile={isMobile} title={'connect with me'}
                               string={'Lets talk business!'}
                               colour={colors.yellow}
                               icon={contactIcon} cursorColor={colors.black}/>
                    </div>
                </div>
                <div className={' basis-1/2'} data-cursor-color={colors.darkYellow}>
                    <BlockBG
                        textColour={'yellow'}
                        heading={'Who am I?'}>
                        A student and web developer specializing in <b className={'font-bold italic'}>Frontend</b> & <b
                        className={'font-bold italic'}>Backend</b> development
                    </BlockBG>
                </div>
            </div>
            <div className={'flex gap-3 flex-col lg:flex-row'}>

                <div id={'aboutUs'} className={'mb-3 basis-1/2'} data-cursor-color={colors.purple}>
                    <BlockBG
                        textColour={'purple'} heading={'What I do?'}>
                        I specialize in web development, frontend and backend, creating <i
                        className={'italic font-bold '}>dynamic</i> & <i
                        className={'italic font-bold '}>innovative </i> websites.
                    </BlockBG>
                </div>

                <div id={'showcase'} className={'overflow-hidden w-full flex flex-col gap-3 mb-3 basis-1/2'}
                     data-cursor-color={colors.purple}>

                    <BLockScroll icon={terminalIcon} title={'Open source'}
                                 content={'I usually make contributions to open source projects. Because of their nature to be free in freedom.'}/>
                    <BLockScroll icon={supportIcon} title={'Linux'}
                                 content={'I am a big fan of Linux (the kernel and the distros) as that\'s what inspired and aware me of my privacy. Also because i have full freedom to do whatever to my system.'}/>
                    <BLockScroll icon={eyeIcon} title={'Web'}
                                 content={'I love to explore mess like web. That\'s why i contribute in it to be a bigger mess.'}/>
                </div>
            </div>

            <div id={'projects'} className={'before:hidden mb-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'}
                 data-cursor-color={colors.green}>
                <div className={'lg:col-span-3'}>
                    <Block title={'Projects'} link={'https://github.com/Parth589'} colour={colors.grayGreen}
                           isMobile={isMobile} lightText={true} string={'My GitHub Profile...'} icon={githubIcon}/>
                </div>
                <div>
                    <ProjectCard title={'E-commerce cart'} link={'https://github.com/Parth589/ecommerce-cart'}
                                 desc={'An ecommerce cart website built using Next js, postgresql and shadcn/ui'}/>
                </div>
                <div>
                    <ProjectCard title={'Context.io'} link={'https://github.com/Parth589/context.io'}
                                 desc={'A Text sharing platform utility built using Next js, postgresql and shadcn/ui'}/>
                </div>
                <div>
                    <ProjectCard title={'ffmpeg-in-browser'} link={'https://github.com/Parth589/ffmpeg-in-browser'}
                                 desc={'A Basic Ui wrapper of ffmpeg.wasm utility'}/>
                </div>
            </div>

            <div id={'contactUs'} className={'before:hidden'} data-cursor-color={colors.darkYellow}
                 data-cursor-background-text="React">
                <BlockBG heading={'Contact us'} textColour={'yellow'}>
                    Do you have a question, an idea, or a project you need help with? <br/> Just give a message! <br/>
                    <div className={'w-fit my-4 flex flex-col gap-5'}>
                        <div className={'flex gap-5 flex-wrap'}>
                            <Badge color={'yellow'} link={'mailto:p4rth4507@gmail.com'}>
                                p4rth4507@gmail.com
                            </Badge>
                            <Badge color={'yellow'} link={"https://wa.me/9898555706"}>
                                +91 9898555706
                            </Badge>
                        </div>
                        <div className={'flex gap-5 '}>
                            <div>
                                <Badge color={'yellow'} link={"https://www.linkedin.com/in/parth-parmar-2b5518245"}>
                                    <img src={linkedinIcon} className={'w-5 aspect-square'} alt=""
                                         style={{filter: "invert(78%) sepia(90%) saturate(308%) hue-rotate(2deg) brightness(89%) contrast(90%)"}}/>
                                </Badge>
                            </div>
                            <Badge color={'yellow'} link={'https://github.com/Parth589'}>
                                <img src={githubIcon} className={'w-5'} alt=""
                                     style={{filter: "invert(78%) sepia(90%) saturate(308%) hue-rotate(2deg) brightness(89%) contrast(90%)"}}/>
                            </Badge>
                            <Badge color={'yellow'} link={"https://www.instagram.com/udad.ki.daal"}>
                                <img src={instagramIcon} className={'w-5'} alt=""
                                     style={{filter: "invert(78%) sepia(90%) saturate(308%) hue-rotate(2deg) brightness(89%) contrast(90%)"}}/>
                            </Badge>
                        </div>
                    </div>
                </BlockBG>
            </div>
        </div>);
}

export default App
