// eslint-disable-next-line react/prop-types
const Badge = ({children}) => {
    return (
        <div data-cursor-size={'80px'}
             className={'border-yellow hover:scale-95 transition-transform duration-300 text-yellow border-2 cursor-pointer  rounded-[45px] px-7 py-5 w-fit text-base font-medium'}>
            {children}
        </div>
    );
};

export default Badge;