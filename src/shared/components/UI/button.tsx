interface Button {
    text:string,
    className:string
}

const Button: React.FC<Button> = (props) => {
    return (
        <button className={props.className}>{props.text}</button>
    )
}

export default Button;