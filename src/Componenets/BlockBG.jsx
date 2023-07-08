// eslint-disable-next-line react/prop-types
const BlockBg = ({textColour, children, heading = null}) => {
    return (
        <div
            className={`w-full h-full rounded-[45px] p-10 py-14 ${textColour === 'purple' ? ' text-purple ' : `${textColour === 'yellow' && ' text-yellow bg-grayYellow '}`} text-3xl md:text-5xl leading-loose font-medium tracking-wide bg-grayBlue`}>
            {heading && <span className={'text-lg block mb-3'}>{heading}</span>}
            <div className={'leading-normal'}>
            {children}
            </div>

        </div>
    );
};

export default BlockBg;