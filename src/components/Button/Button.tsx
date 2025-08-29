import styles from './Button.module.css';
import { FC } from 'react';
import { ButtonProps } from '@/components/Button/type';
import clsx from 'clsx';

const Button: FC<ButtonProps> = (props) => {
  const { variant = 'primary', ...buttonProps } = props;
  return (
    <button {...buttonProps} className={clsx(styles.button, props.className, styles[variant])}>
      {props.children}
    </button>
  );
};

export default Button;
