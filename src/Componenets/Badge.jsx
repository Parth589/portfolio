// eslint-disable-next-line react/prop-types
const Badge = ({children, link}) => {
    return (
        <a href={link} data-cursor-size={'80px'}
           className={'flex border-yellow hover:scale-95 transition-transform duration-300 text-yellow border-2 cursor-pointer  rounded-[45px] px-7 py-5 w-fit text-base font-medium'}>
            {children}
        </a>
    );
};

export default Badge;