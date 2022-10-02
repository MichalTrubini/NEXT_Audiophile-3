import styles from './pageTitle.module.css'

interface Title {
    title: string
}

const PageTitle: React.FC<Title> = (props) => {
    return (
        <div className={styles.title}>
            <h1 className={styles.header}>{props.title}</h1>
        </div>
    )
}

export default PageTitle;