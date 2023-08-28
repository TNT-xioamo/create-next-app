import React, { Fragment } from 'react'
import Head from 'next/head'
import Layout from '../layouts/app-basic'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { StoreProvider } from '@/store'
import '../styles/global.scss'
import '../styles/animate.css'

import { ConfigProvider } from 'antd'
import theme from '../theme/theme-config'

const defaultTitle = 'React App'

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: JSX.Element, props: P) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: {
    title?: string;
  };
};

function getDefaultLayout(page: JSX.Element, pageProps: any): JSX.Element {
  return <Layout>{page}</Layout>;
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const { title = defaultTitle } = pageProps
  const getLayout = Component.getLayout ?? getDefaultLayout

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover' />
      </Head>
      <ConfigProvider theme={theme}>
        <StoreProvider initialValue={{ user: {} }}>
          {getLayout(<Component {...pageProps} />, pageProps)}
        </StoreProvider>
      </ConfigProvider>
    </Fragment>
  );
}

export default App;
