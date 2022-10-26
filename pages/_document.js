import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <meta
                    name="keywords"
                    content="Chirag Goyal, portfolio, resume, software developer, mern, web developer, android developer"
                />
                <meta name="author" content="Chirag Goyal" />
                <meta
                    property="og:url"
                    content="https://chiraggoyal.vercel.app/"
                />
                <meta property="og:type" content="Website" />
                <meta property="og:title" content="Chirag Goyal" />
                <meta
                    property="og:description"
                    content="I'm a third year student who is very passionate about software development. I always look forward to exploring more with every opportunity. I consider myself a highly motivated person when it comes to Computer Programming."
                />
                <meta property="twitter:title" content="Chirag Goyal" />
                <meta
                    property="twitter:description"
                    content="I'm a third year student who is very passionate about software development. I always look forward to exploring more with every opportunity. I consider myself a highly motivated person when it comes to Computer Programming."
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
