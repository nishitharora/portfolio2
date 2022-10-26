import Head from "next/head";
import styles from "../../styles/project/project.module.css";
import { useRouter } from "next/router";
import Left from "../../components/project/Left";
import data from "../../public/data";
import { useState, useEffect } from "react";
import Right from "../../components/project/Right";

const Project = () => {
    const router = useRouter();
    const { id } = router.query;

    const [projectInfo, setProjectInfo] = useState(null);

    useEffect(() => {
        if (router.isReady) {
            let loaded = false;

            data.projects.forEach((project) => {
                if (!loaded) {
                    project.projects.forEach((p) => {
                        if (p.id === id) {
                            setProjectInfo(p);
                            loaded = true;
                            return;
                        }
                    });
                }
            });

            if (!loaded) {
                router.push("/404");
            }
        }
    }, [id, router]);

    return (
        projectInfo && (
            <>
                <Head>
                    <title>
                        {(projectInfo.name || "Project") + " by " + data.name}
                    </title>
                    <meta
                        name="description"
                        content={projectInfo.features.join(" ") || ""}
                    />
                </Head>

                <div className={styles.main}>
                    <Left
                        logo={projectInfo.logo}
                        name={projectInfo.name}
                        links={projectInfo.links}
                    />
                    <Right
                        screenshots={projectInfo.screenshots}
                        features={projectInfo.features}
                        tools={projectInfo.tools}
                    />
                </div>
            </>
        )
    );
};

export default Project;
