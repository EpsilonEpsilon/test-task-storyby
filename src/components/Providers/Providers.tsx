'use client';
import { FC, Fragment, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

interface IProps {
  children: ReactNode;
}

const Providers: FC<IProps> = ({ children }) => {
  return (
    <Fragment>
      {children}
      <Toaster />
    </Fragment>
  );
};

export default Providers;
