import styles from "../../styles/project/right.module.css";
import { useRef } from "react";

const Right = ({ screenshots, features, tools }) => {
    const scrollContainer = useRef(null);

    const scrollLeft = () => {
        scrollContainer?.current?.scrollBy(-500, 0);
    };

    const scrollRight = () => {
        scrollContainer?.current?.scrollBy(500, 0);
    };

    return (
        <>
            <div className={styles.main}>
                {screenshots && (
                    <div className={styles.container}>
                        <div className={styles.header}>
                            <h2>Screenshots</h2>
                            <div className={styles.buttonGroup}>
                                <button type="button" onClick={scrollLeft}>
                                    <svg viewBox="0 0 40 40" fill="none">
                                        <path d="M28.18 0C35.24 0 40 4.542 40 11.32V28.66C40 35.44 35.24 40 28.18 40H11.84C4.76 40 0 35.44 0 28.66V11.32C0 4.542 4.76 0 11.84 0H28.18ZM20.42 11.44C19.84 10.86 18.88 10.86 18.3 11.44L10.76 18.94C10.2 19.5 10.2 20.5 10.76 21.06L18.3 28.56C18.88 29.14 19.84 29.14 20.42 28.56C21 27.96 21 27.02 20.42 26.42L15.46 21.5H28.16C29 21.5 29.66 20.82 29.66 20C29.66 19.16 29 18.5 28.16 18.5H15.46L20.42 13.56C20.7 13.28 20.86 12.88 20.86 12.5C20.86 12.122 20.7 11.74 20.42 11.44Z" />
                                    </svg>
                                </button>

                                <button type="button" onClick={scrollRight}>
                                    <svg viewBox="0 0 40 40" fill="none">
                                        <path d="M28.16 0C35.24 0 40 4.56 40 11.34V28.68C40 35.458 35.24 40 28.16 40H11.82C4.76 40 0 35.458 0 28.68V11.34C0 4.56 4.76 0 11.82 0H28.16ZM21.7 11.44C21.12 10.86 20.16 10.86 19.58 11.44C19 12.04 19 12.98 19.58 13.58L24.54 18.5H11.84C11 18.5 10.34 19.18 10.34 20C10.34 20.84 11 21.5 11.84 21.5H24.54L19.58 26.44C19.3 26.72 19.14 27.12 19.14 27.5C19.14 27.878 19.3 28.26 19.58 28.56C20.16 29.14 21.12 29.14 21.7 28.56L29.24 21.06C29.8 20.5 29.8 19.5 29.24 18.94L21.7 11.44Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className={styles.images} ref={scrollContainer}>
                            {screenshots.map((screenshot, i) => (
                                <img
                                    src={screenshot}
                                    alt="Screenshot"
                                    key={i}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {features && (
                    <div className={styles.container}>
                        <div className={styles.header}>
                            <h2>Description</h2>
                        </div>

                        <div className={styles.features}>
                            <ul>
                                {features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {tools && (
                    <div className={styles.container}>
                        <div className={styles.header}>
                            <h2>Tools</h2>
                        </div>

                        <div className={styles.tools}>
                            <p>
                                {tools.map((tool, i) => (
                                    <span key={i}>{tool}</span>
                                ))}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Right;
