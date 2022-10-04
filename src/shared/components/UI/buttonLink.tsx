import Link from 'next/link'

interface ButtonLink {
    text:string,
    className:string
    link:string
}

const ButtonLink: React.FC<ButtonLink> = (props) => {
    return (
        <Link href={props.link}><p className={`button ${props.className}`}>{props.text}</p></Link>
    )
}

export default ButtonLink;