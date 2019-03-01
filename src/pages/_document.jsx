import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { renderToString } from 'react-dom/server';
import { extractCritical } from 'emotion-server';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const page = renderPage();
        const { css, ids } = extractCritical(renderToString(() => page.html || page.errorHtml));
        return {
            ...page,
            style: {
                css,
                ids
            }
        };
    }

    constructor(props) {
        super(props);
        const {
            __NEXT_DATA__,
            style: { ids }
        } = this.props;

        if (ids) {
            __NEXT_DATA__.style = { ids };
        }
    }

    render() {
        const { style } = this.props;
        return (
            <html lang="en">
                <Head>
                    <meta name="viewport" content="width=device-width" />
                    <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
                    <style dangerouslySetInnerHTML={{ __html: style.css }} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
