interface TitleProps {
    text: string
}
const Title: React.FC<TitleProps> = ({ text }) => {
    return (
        <h6 className="text-[35px] font-[600] mb-4 font-sans">{text}</h6>
    );
}

export default Title;