interface AddToCart {
    text:string,
    className:string
}

const AddToCart: React.FC<AddToCart> = (props) => {
    return (
        <button className={`button ${props.className}`}>{props.text}</button>
    )
}

export default AddToCart;