import styles from "../styles/experience.module.css";
import data from "../public/data";
import { useState } from "react";

const Experience = () => {
    const [selected, setSelected] = useState(0);

    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <h3>
                        <span>Experience</span>
                    </h3>
                    <h4>My work experience</h4>
                    <div className={styles.part}>
                        <div className={styles.left}>
                            {data.experience.map((exp, i) => (
                                <div
                                    key={exp.id}
                                    className={[
                                        styles.card,
                                        selected === i
                                            ? styles.selected
                                            : undefined,
                                    ].join(" ")}
                                    onClick={() => setSelected(i)}
                                >
                                    <img src={exp.logo} alt={exp.name} />
                                    <p>{exp.name}</p>
                                </div>
                            ))}
                        </div>

                        <div className={styles.right}>
                            <h5>
                                {data.experience[selected].post}{" "}
                                <a
                                    href={data.experience[selected].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    @{data.experience[selected].name}
                                </a>
                            </h5>

                            <p>
                                {data.experience[selected].type} ·{" "}
                                {data.experience[selected].start} -{" "}
                                {data.experience[selected].end} ·{" "}
                                {data.experience[selected].duration}
                            </p>

                            <ul>
                                {data.experience[selected].points.map(
                                    (point, i) => (
                                        <li key={i}>{point}</li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Experience;
