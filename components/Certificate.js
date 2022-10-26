import styles from "../styles/certificate.module.css";
import data from "../public/data";
import { useState, useEffect, useRef } from "react";

const Certificate = () => {
    const [selected, setSelected] = useState(null);

    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <h3>
                        <span>Certificates</span>
                    </h3>
                    <h4>Certificates that I have achieved</h4>

                    <div className={styles.cards}>
                        {data.certificates.map((certificate, i) => (
                            <div key={certificate.id} className={styles.card}>
                                <div
                                    className={styles.info}
                                    onClick={() => setSelected(i)}
                                >
                                    <h5>{certificate.name}</h5>
                                    <p>{certificate.provider}</p>
                                </div>

                                <a
                                    href={certificate.verification_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <p className={styles.link}>Verify</p>
                                </a>

                                <svg viewBox="0 0 61 61" fill="none">
                                    <path d="M38.228 58.348H36.216C36.216 59.1101 36.6466 59.8067 37.3282 60.1475C38.0099 60.4884 38.8255 60.4147 39.4352 59.9576L38.228 58.348ZM46.276 52.312L47.4832 50.7024C46.7677 50.166 45.7843 50.166 45.0688 50.7024L46.276 52.312ZM54.324 58.348L53.1168 59.9576C53.7264 60.4147 54.5421 60.4884 55.2238 60.1475C55.9054 59.8067 56.336 59.1101 56.336 58.348H54.324ZM46.276 44.264C40.7201 44.264 36.216 39.76 36.216 34.204H32.192C32.192 41.9824 38.4976 48.288 46.276 48.288V44.264ZM56.336 34.204C56.336 39.76 51.8319 44.264 46.276 44.264V48.288C54.0544 48.288 60.36 41.9824 60.36 34.204H56.336ZM46.276 24.144C51.8319 24.144 56.336 28.648 56.336 34.204H60.36C60.36 26.4256 54.0544 20.12 46.276 20.12V24.144ZM46.276 20.12C38.4976 20.12 32.192 26.4256 32.192 34.204H36.216C36.216 28.648 40.7201 24.144 46.276 24.144V20.12ZM36.216 42.252V58.348H40.24V42.252H36.216ZM39.4352 59.9576L47.4832 53.9216L45.0688 50.7024L37.0208 56.7384L39.4352 59.9576ZM45.0688 53.9216L53.1168 59.9576L55.5312 56.7384L47.4832 50.7024L45.0688 53.9216ZM56.336 58.348V42.252H52.312V58.348H56.336ZM60.36 20.12V6.036H56.336V20.12H60.36ZM54.324 0H6.036V4.024H54.324V0ZM0 6.036V54.324H4.024V6.036H0ZM6.036 60.36H32.192V56.336H6.036V60.36ZM0 54.324C0 57.6575 2.70241 60.36 6.036 60.36V56.336C4.92481 56.336 4.024 55.435 4.024 54.324H0ZM6.036 0C2.70241 0 0 2.70241 0 6.036H4.024C4.024 4.92481 4.92481 4.024 6.036 4.024V0ZM60.36 6.036C60.36 2.70241 57.6575 0 54.324 0V4.024C55.435 4.024 56.336 4.92481 56.336 6.036H60.36ZM12.072 20.12H32.192V16.096H12.072V20.12ZM12.072 32.192H24.144V28.168H12.072V32.192Z" />
                                </svg>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selected !== null && (
                <CertificateModal
                    selected={selected}
                    close={() => setSelected(null)}
                />
            )}
        </>
    );
};

const CertificateModal = ({ selected, close = () => {} }) => {
    const dialog = useRef(null);

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
        window.addEventListener("mousedown", handleMouseClick);
        window.addEventListener("keydown", handleKeyPress);

        return () => {
            setShow(false);
            window.removeEventListener("mousedown", handleMouseClick);
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [dialog]);

    const handleKeyPress = (e) => {
        e = e || window.event;
        if (e.code === "Escape") {
            e.preventDefault();
            close();
        }
    };

    const handleMouseClick = (e) => {
        if (dialog.current && !dialog.current.contains(e.target)) {
            close();
        }
    };

    return (
        <>
            <div
                className={[styles.modal, show ? styles.show : undefined].join(
                    " "
                )}
            >
                <div className={styles.body} ref={dialog}>
                    <img
                        src={data.certificates[selected].certificate}
                        alt={data.certificates[selected].name}
                    />
                </div>
            </div>
        </>
    );
};

export default Certificate;
