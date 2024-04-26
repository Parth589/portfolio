import arrowRight from "/src/assets/arrow-right.svg"

const ProjectCard = ({title, desc, link}) => {
    return (
        <div className={'rounded-[36px] p-16 w-full h-full bg-[#070C0C] flex flex-col justify-between gap-3'}>
            <div>
            <span className={'text-[#A3D5D1] font-semibold text-2xl tracking-wider'}>
            {title}
            </span>
            </div>
            <span className={'text-lg text-[#B7BFBF] max-w-lg'}>{desc}</span>
            <a href={link} className={'bg-[#A3D5D1] w-fit px-7 py-2 rounded-full flex gap-4 text-lg self-end mt-3'}>Link
                to GitHub
                <img src={arrowRight} alt=""/>
            </a>
        </div>
    );
};

export default ProjectCard;
