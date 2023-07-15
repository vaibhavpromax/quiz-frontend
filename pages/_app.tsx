// _app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import '../assets/colors.css'
import '../styles/global.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
