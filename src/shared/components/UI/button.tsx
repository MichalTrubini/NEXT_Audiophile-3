interface Button {
    text:string,
    className:string
}

const Button: React.FC<Button> = (props) => {
    return (
        <button className={`button ${props.className}`}>{props.text}</button>
    )
}

export default Button;