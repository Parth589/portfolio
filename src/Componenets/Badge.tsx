// eslint-disable-next-line react/prop-types
const Badge = ({
    children,
    link,
    color,
    bgColor,
}: {
    children: React.ReactNode;
    link: string;
    color: string | undefined | null;
    bgColor: string | undefined | null;
}) => {
    return (
        <a
            href={link}
            data-cursor-size={"80px"}
            style={{
                backgroundColor: bgColor as string,
                borderColor: color as string,
                color: color as string,
            }}
            className={
                "flex hover:scale-95 transition-transform duration-300 border-2 cursor-pointer rounded-[45px] px-7 py-5 w-fit text-base font-medium"
            }
        >
            {children}
        </a>
    );
};

export default Badge;
