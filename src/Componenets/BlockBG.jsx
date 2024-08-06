// eslint-disable-next-line react/prop-types
const BlockBg = ({textColour, children, heading = null}) => {
    let colourClasses = ''
    switch (textColour) {
        case 'purple':
            colourClasses = 'text-purple bg-grayPurple';
            break;
        case 'yellow':
            colourClasses = 'text-yellow bg-grayYellow';
            break;
        case 'white':
            colourClasses = 'text-green bg-grayGreen';
            break;
    }
    return (
        <div
            className={`w-full h-full rounded-[45px] p-10 py-14 ${colourClasses} text-3xl md:text-5xl leading-loose font-medium tracking-wide`}>
            {heading && <span className={'text-lg block mb-3'}>{heading}</span>}
            <div className={'leading-normal'}>
                {children}
            </div>

        </div>
    );
};

export default BlockBg;