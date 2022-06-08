import { ReactElement } from "react"
import styles from './styles.module.scss'
import Image from 'next/image'

const NavBar = ():ReactElement => {
    return(
        <nav className={styles.navbar}>
            <div>
                <Image src="/images/logo.svg" alt="jevolii logo" width={74} height={90} />
            </div>
            <div>

            </div>
        </nav>
    )
}

export default NavBar;