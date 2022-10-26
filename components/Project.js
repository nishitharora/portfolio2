import styles from "../styles/project.module.css";
import data from "../public/data";
import Link from "next/link";

const Project = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <h3>
                        <span>Projects</span>
                    </h3>
                    <h4>Some things that I&apos;ve built</h4>

                    {data.projects.map((project) => (
                        <div className={styles.subContainer} key={project.id}>
                            <h5>{project.type}</h5>

                            <div className={styles.cards}>
                                {project.projects.map((p) => (
                                    <Link href={p.link} key={p.id}>
                                        <a>
                                            <div className={styles.card}>
                                                <div className={styles.cover}>
                                                    <img
                                                        src={p.cover}
                                                        alt={p.name}
                                                    />
                                                </div>

                                                <h6>{p.name}</h6>
                                                <p>
                                                    {p.tools.map((tool, i) => (
                                                        <span key={i}>
                                                            {tool}
                                                        </span>
                                                    ))}
                                                </p>
                                            </div>
                                        </a>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Project;
