import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = PrimaryButton;
interface PrimaryButton extends BaseProps {
  variant?: 'primary';
}
type BaseProps = ButtonHTMLAttributes<HTMLButtonElement>;
