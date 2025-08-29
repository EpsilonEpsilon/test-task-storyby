import { FC } from 'react';
import { InputProps } from '@/components/Input/types';
import styles from './Input.module.css';
import clsx from 'clsx';
const Input: FC<InputProps> = (props) => {
  const { rootClassName, variant = 'primary', before, ...inputProps } = props;
  return (
    <div className={clsx(styles.root, rootClassName, styles[variant])}>
      {before}
      <input {...inputProps} className={clsx(styles.input, props.className)} />
    </div>
  );
};

export default Input;
