import Theme from '../styles/theme';

const prefix = '/Portfolio_ready';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={prefix + '/favicon.ico'}></link>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 