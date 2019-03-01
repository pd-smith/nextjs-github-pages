import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { hydrate, injectGlobal } from 'emotion';

function onClientBootstrap() {
    hydrate(window.__NEXT_DATA__.style.ids);
}

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = Component.getInitialProps(ctx);
        }
        return { pageProps };
    }

    constructor(props) {
        super(props);

        if (typeof window !== 'undefined') {
            onClientBootstrap();
        }

        injectGlobal`
            html, body {
                font-family: 'Poppins', sans-serif;
                line-height: 1.5;
            }

            html { 
                height:100%;
            }
            body {
                min-height:100%;
                margin: 0;
                position:relative;
            }
        `;
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <title>Main Site</title>
                </Head>
                <Container>
                    <Component {...pageProps} />
                </Container>
            </>
        );
    }
}
