import React from 'react';
import Head from 'next/head';
import hello from '../util/hello';
import styled from '@emotion/styled';

const FancyShadowBox = styled.div({
    margin: '50px auto 0 auto',
    padding: '20px',
    backgroundColor: '#fff1f1',
    textAlign: 'center'
});
const IndexPage = () => (
    <>
        <Head>
            <title>Hello World</title>
        </Head>
        <FancyShadowBox>{hello()}</FancyShadowBox>
    </>
);
IndexPage.displayName = 'IndexPage';
export default IndexPage;
