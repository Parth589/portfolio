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
        <div className={'bg-black py-14 px-3'}>
            {!isMobile && <Cursor isGelly={true}/>}
            <div data-cursor-exclusion={true} data-cursor-size="80px"
                 className={'h-11 px-4 w-fit mx-auto flex justify-center my-28'}>
                <Logo/>
            </div>
            <div className={'flex flex-col-reverse lg:flex-row gap-3 mb-3'}>

                <div className={'flex flex-col sm:grid sm:grid-cols-2 gap-3  basis-1/2'}>
                    <Block link={'#showcase'} isMobile={isMobile} title={'Work'} string={'View our showcase'} colour={'#fff'}
                           icon={terminalIcon}/>
                    <Block link={'#aboutUs'} isMobile={isMobile} title={'About us'} string={'Learn more about us'} colour={'#2900E8'}
                           lightText={true}
                           icon={aboutIcon}/>
                    <div className={'col-span-2'}>
                        <Block link={'#contactUs'} isMobile={isMobile} title={'Contact us'} string={'Lets talk business!'}
                               colour={'#FFF480'}
                               icon={contactIcon}/>
                    </div>
                </div>
                <div className={' basis-1/2'} data-cursor-color={"#d4c951"}>
                    <BlockBG
                        textColour={'yellow'}
                        heading={'Who am i?'}>
                        A student and web developer specializing in <b className={'font-bold italic'}>Frontend</b> & <b
                        className={'font-bold italic'}>Backend</b> development
                    </BlockBG>
                </div>
            </div>
            <div className={'flex gap-3 flex-col lg:flex-row'}>

                <div id={'aboutUs'} className={'mb-3 basis-1/2'} data-cursor-color={"#A5A1FF"}>
                    <BlockBG
                        textColour={'purple'} heading={'What I do?'}>
                        I specialize in web development, frontend and backend, creating <i
                        className={'italic font-bold '}>dynamic</i> & <i
                        className={'italic font-bold '}>innovative </i> websites.
                        {/*We provide clients with stunning Crafty web solutions, developed with <i*/}
                        {/*className={'font-bold italic'}> skill</i> & <i className={'italic font-bold '}>passion</i>.*/}
                    </BlockBG>
                </div>

                <div id={'showcase'} className={'overflow-hidden w-full flex flex-col gap-3 mb-3 basis-1/2'}
                     data-cursor-color={"#A5A1FF"}>

                    <BLockScroll icon={terminalIcon} title={'Craft CMS'}
                                 content={'We are focused on developing, from start to finish, web solutions with Craft CMS, an easy to use content management system where admins can alter or add content to a website.'}/>
                    <BLockScroll icon={supportIcon} title={'Fast Support'}
                                 content={'We aim to be as available and supportive as we can to our clients. Feel free to use the form below or contact us directly with questions or requests.'}/>
                    <BLockScroll icon={eyeIcon} title={'SEO'}
                                 content={'Using our expertise along with handy tools we strive for a high SEO score, ensuring higher visibility on search sites such as Google.'}/>
                </div>
            </div>

            <div id={'contactUs'} className={'before:hidden'} data-cursor-color={"#d4c951"}>
                <BlockBG heading={'Contact us'} textColour={'yellow'}>
                    {/*Don&lsquo;t be a stranger. <br/> Let&lsquo;s connect*/}
                    Do you have a question, an idea, or a project you need help with? <br/> Just give a message! <br/>
                    <div className={'w-fit my-4 flex flex-col gap-5'}>
                        <div className={'flex gap-5 flex-wrap'}>
                            <Badge>
                                <a href="#">
                                    abc@example.com
                                </a>
                            </Badge>
                            <Badge>
                                <a href="#">
                                    +1 9909099090
                                </a>
                            </Badge>
                        </div>
                        <div className={'flex gap-5 '}>

                            <Badge>
                                <img src={linkedinIcon} className={'w-5'} alt=""
                                     style={{filter: "invert(78%) sepia(90%) saturate(308%) hue-rotate(2deg) brightness(89%) contrast(90%)"}}/>
                            </Badge>
                            <Badge>
                                <img src={githubIcon} className={'w-5'} alt=""
                                     style={{filter: "invert(78%) sepia(90%) saturate(308%) hue-rotate(2deg) brightness(89%) contrast(90%)"}}/>
                            </Badge>
                            <Badge>
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
