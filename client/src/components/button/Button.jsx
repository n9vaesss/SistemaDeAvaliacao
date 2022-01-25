import './Button.css'

export const Button = ({
    text,
    text2,
    text3,
    onClick,
    textLine,
    type,
    className
}) => {


    return (
        <button type={type} onClick={onClick} className={className}> {text} {textLine} {text2} {textLine} {text3} </button>
    )
}