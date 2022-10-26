import styles from "../styles/skill.module.css";
import data from "../public/data";
import VanillaTilt from "vanilla-tilt";
import { useEffect, useRef } from "react";

const Skill = () => {
    const cards = useRef(null);

    useEffect(() => {
        let cardsRefValue = null;

        if (cards.current) {
            VanillaTilt.init(cards);
            cardsRefValue = cards;
        }

        return () => cardsRefValue?.vanillaTilt?.destroy();
    }, [cards]);

    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <h3>
                        <span>Skills</span>
                    </h3>
                    <h4>I am familiar with</h4>

                    <div className={styles.cards} ref={cards}>
                        {data.skills.map((skill) => (
                            <div
                                className={styles.card}
                                key={skill.id}
                                data-tilt
                            >
                                <h5>{skill.name}</h5>
                                {skill.logo && (
                                    <img src={skill.logo} alt={skill.name} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skill;
