import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Project from "../components/Project";
import Certificate from "../components/Certificate";
import Skill from "../components/Skill";
import Academic from "../components/Academic";
import Contact from "../components/Contact";
import data from "../public/data";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
        });
    }, []);

    return (
        <>
            <Head>
                <title>Chirag Goyal</title>
                <meta name="description" content={data.summary || ""} />
            </Head>

            <Navbar />

            <div data-aos="zoom-in-up">
                <Hero />
            </div>

            <Experience />

            <Project />

            <Certificate />

            <Skill />

            <Academic />

            <Contact />
        </>
    );
};

export default Home;
