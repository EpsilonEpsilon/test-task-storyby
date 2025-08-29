'use client';
import { FC, Fragment, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { Analytics } from "@vercel/analytics/next"
interface IProps {
  children: ReactNode;
}

const Providers: FC<IProps> = ({ children }) => {
  return (
    <Fragment>
      {children}
      <Toaster />
      <Analytics/>
    </Fragment>
  );
};

export default Providers;
