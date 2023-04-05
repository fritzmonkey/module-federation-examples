import { Suspense, lazy } from "react";
import App from 'next/app';
import dynamic from 'next/dynamic';

const Nav = dynamic(() => import('home/nav'), { suspense:true });
const Welcome = dynamic(() => import('home/Welcome'));
const NameProvider = dynamic(() => import('shared-context_shared-library').then(module => module.NameProvider));

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NameProvider value="Test">
        <Suspense fallback={'loading'}>
            <Nav />
            <Welcome />
        </Suspense>
        <Component {...pageProps} />
      </NameProvider>
    </>
  );
}

MyApp.getInitialProps = async ctx => {
  const appProps = await App.getInitialProps(ctx);
  return appProps;
};
export default MyApp;
