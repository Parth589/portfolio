import { Link, Github } from "lucide-react";
const ProjectCard = ({
    title,
    desc,
    link,
    tags,
    bgColor,
    color,
    cursorColor,
}: {
    title: string;
    desc: string;
    link: string;
    tags: string[];
    bgColor: string | undefined | null;
    color: string | undefined | null;
    cursorColor: string | undefined | null;
}) => {
    return (
        <div
            data-cursor-color={cursorColor}
            className={
                "rounded-[36px] p-16 w-full h-full flex flex-col justify-between gap-3"
            }
            style={{
                backgroundColor: bgColor as string,
                color: color as string,
            }}
        >
            <div>
                <span className={"font-semibold text-2xl tracking-wider"}>
                    {title}
                </span>
            </div>
            <span className={"text-lg max-w-lg"}>{desc}</span>
            <div className="flex flex-wrap gap-3 mt-3 mb-5">
                {tags.map((tag) => (
                    <span key={tag}
                        className={
                            "outline outline-white outline-1 text-white text-sm rounded-[36px] py-2 px-5"
                        }
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex justify-between items-center">
                <a
                    data-cursor-size={"80px"}
                    href={link}
                    className={
                        "w-fit px-7 py-2 rounded-full flex items-center gap-4 text-lg self-end mt-3"
                    }
                    style={{
                        backgroundColor: color as string,
                        color: bgColor as string,
                    }}
                >
                    Demo
                    <Link className="w-5 h-5" />
                </a>
                <a
                    data-cursor-size={"80px"}
                    href={link}
                    className={
                        "w-fit px-7 py-2 rounded-full flex items-center gap-4 text-lg self-end mt-3"
                    }
                >
                    Code
                    <Github className="w-5 h-5" />
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
