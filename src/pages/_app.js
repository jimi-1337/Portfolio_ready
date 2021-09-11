import Theme from '../styles/theme';
import Head from 'next/head'

const prefix = '/Portfolio_ready';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <link rel="shortcut icon" href={prefix + '/favicon.ico'}></link>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 