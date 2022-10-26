import styles from "../styles/hero.module.css";
import data from "../public/data";
import lottie from "lottie-web";
import animationData from "../public/animation/programming.json";
import { useEffect, useRef } from "react";

const Hero = () => {
    const animRef = useRef(null);

    useEffect(() => {
        const animation = lottie.loadAnimation({
            container: animRef?.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData,
        });

        return () => animation.destroy();
    }, [animRef]);

    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <p>Hey, my name is</p>
                        <h1>{data.name}</h1>
                        <h2>{data.tagline}</h2>
                        <p>{data.summary}</p>
                    </div>

                    <div className={styles.right} ref={animRef}></div>
                </div>
            </div>
        </>
    );
};

export default Hero;
