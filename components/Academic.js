import styles from "../styles/academic.module.css";
import data from "../public/data";

const Academic = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <h3>
                        <span>Academics</span>
                    </h3>
                    <h4>My academic information</h4>

                    <div className={styles.cards}>
                        {data.academics.map((academic) => (
                            <div className={styles.card} key={academic.id}>
                                <svg viewBox="0 0 128 128" fill="none">
                                    <circle cx="64" cy="64" r="34" />
                                    <circle
                                        cx="64"
                                        cy="64"
                                        r="64"
                                        fillOpacity="0.2"
                                    />
                                </svg>

                                <div className={styles.info}>
                                    <div className={styles.top}>
                                        <h5>{academic.course}</h5>
                                        <h6>{academic.institute}</h6>
                                        <p>
                                            {academic.start} - {academic.end}
                                        </p>
                                    </div>
                                    <div className={styles.bottom}>
                                        {academic.results.map((result) => (
                                            <p key={result.id}>
                                                {result.title &&
                                                    result.title + " | "}
                                                {result.score && result.score}
                                                {result.note &&
                                                    " | " + result.note}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Academic;
