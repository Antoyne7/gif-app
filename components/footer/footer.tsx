import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a href="mailto:antoine.brld@gmail.com">
                Made by&nbsp;
                <address>
                    Antoyne7
                </address>
            </a>
        </footer>
    )
}

export default Footer
