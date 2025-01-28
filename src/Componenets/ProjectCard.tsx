import arrowRight from "/src/assets/arrow-right.svg"

const ProjectCard = ({title, desc, link}) => {
    return (
        <div className={'rounded-[36px] p-16 w-full h-full bg-grayGreen flex flex-col justify-between gap-3'}>
            <div>
            <span className={'text-green font-semibold text-2xl tracking-wider'}>
            {title}
            </span>
            </div>
            <span className={'text-lg text-green max-w-lg'}>{desc}</span>
            <a data-cursor-size={'80px'} href={link} className={'bg-green w-fit px-7 py-2 rounded-full flex gap-4 text-lg self-end mt-3'}>Link
                to GitHub
                <img src={arrowRight} alt=""/>
            </a>
        </div>
    );
};

export default ProjectCard;
