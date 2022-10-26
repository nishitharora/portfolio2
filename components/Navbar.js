import styles from "../styles/navbar.module.css";
import { useEffect, useRef } from "react";

const Navbar = () => {
    const navbar = useRef(null);

    let prev_top = 0;

    useEffect(() => {
        if (navbar.current) {
            window.addEventListener("scroll", handleScroll);
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, [navbar]);

    const handleScroll = () => {
        let top = window.pageYOffset || document.documentElement.scrollTop;

        navbar.current.style.backgroundColor =
            top === 0 ? "transparent" : "var(--background-primary)";

        navbar.current.style.transform =
            top > 100 && top > prev_top
                ? "translateY(-100%)"
                : "translateY(0%)";

        prev_top = top <= 0 ? 0 : top;
    };

    return (
        <>
            <div className={styles.main} ref={navbar}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <a href="#">
                            <img src="/logo.svg" alt="logo" />
                        </a>
                    </div>
                    <div className={styles.options}>
                        <a
                            href="https://github.com/chirag1910"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg viewBox="0 0 24 24" fill="none">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/chirag-goyal-4ba180203/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg viewBox="0 0 24 24" fill="none">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                        <a href="#contact">
                            <svg viewBox="0 0 42 42" fill="none">
                                <path
                                    d="M5.00009 2.51507L11.7534 2.75945C13.1758 2.81091 14.4381 3.70916 14.9833 5.0578L16.9801 9.99763C17.4449 11.1472 17.3198 12.4588 16.6468 13.4942L14.0884 17.4305C15.6031 19.6056 19.7231 24.7019 24.0856 27.6849L27.3385 25.683C28.1652 25.1741 29.1551 25.0231 30.0906 25.2628L36.5572 26.9211C38.2771 27.3622 39.436 29.0116 39.3002 30.8247L38.8851 36.3609C38.7392 38.3036 37.1492 39.8281 35.2618 39.6088C10.3475 36.7118 -4.26271 2.51501 5.00009 2.51507V2.51507Z"
                                    strokeWidth="4"
                                />
                            </svg>
                        </a>
                        <a
                            href="/resume.pdf"
                            className={[styles.button, styles.primary].join(
                                " "
                            )}
                            download="resume.pdf"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
