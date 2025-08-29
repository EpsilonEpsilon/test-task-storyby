import { FC, ReactNode } from 'react';
import styles from "./FormItem.module.css";
import clsx from 'clsx';

interface IProps{
  children:ReactNode
  error?:string
  className?:string
}
const FormItem:FC<IProps> = ({children, error, className})=>{
  return (
    <div className={clsx(styles.root, className)}>
      {children}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}

export default FormItem;
