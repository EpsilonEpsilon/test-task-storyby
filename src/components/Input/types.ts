import { InputHTMLAttributes, ReactNode } from 'react';

export type InputProps = PrimaryInput;

interface PrimaryInput extends BaseProps {
  variant?: 'primary';
}
interface BaseProps extends InputHTMLAttributes<HTMLInputElement> {
  rootClassName?: string;
  before?: ReactNode;
}
