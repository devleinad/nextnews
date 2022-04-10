import { useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css";

export const Navbar = () => {
    const router = useRouter();

    return(
        <div className={styles.main}>
            <div onClick={() => router.push('/')}>Home</div>
            <div onClick={() => router.push('/feed/1')}>Feed</div>
            <div>Twitter</div>
            <div>Facebook</div>
            <div>LinkedIn</div>
        </div>
    )
}