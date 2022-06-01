import { createGetInitialProps } from '@mantine/next'
import Document, { Head, Html, Main, NextScript } from "next/document";

const mantineGetInitialProps = createGetInitialProps();

export default class _Document extends Document {
    static getInitialProps = mantineGetInitialProps;

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}