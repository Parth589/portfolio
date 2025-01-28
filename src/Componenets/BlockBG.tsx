const BlockBg = ({
    color,
    bgColor,
    children,
    title,
}: {
    color: string | undefined | null;
    bgColor: string | undefined | null;
    children: React.ReactNode;
    title: string;
}) => {
    return (
        <div
            style={{
                backgroundColor: bgColor as string,
                color: color as string,
            }}
            className={`w-full h-full rounded-[45px] p-10 py-14 text-3xl md:text-5xl leading-loose font-medium tracking-wide`}
        >
            {title && <span className={"text-lg block mb-3"}>{title}</span>}
            <div className={"leading-normal"}>{children}</div>
        </div>
    );
};

export default BlockBg;
