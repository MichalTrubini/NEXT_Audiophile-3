import Link from 'next/link'
import { IButtonLink } from '../../types/types';

const ButtonLink: React.FC<IButtonLink> = (props) => {
    return (
        <Link href={props.link}><p className={`button ${props.className}`}>{props.text}</p></Link>
    )
}

export default ButtonLink;