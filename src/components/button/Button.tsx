import { 
  ComponentPropsWithoutRef,
  ElementType,
  forwardRef,
  PropsWithChildren
} from "react";
import { clsx } from "clsx";

import { PolymorphicRef } from "../../util/types/polymorphic";
import { PropsWithColor } from "../../util/types/propTypes";

import styles from './Button.module.scss';

type ButtonProps<C extends ElementType> = {
  as?: C;
  block?: boolean,
  muted?: boolean,
} & PropsWithChildren & PropsWithColor & ComponentPropsWithoutRef<C>;

export const SButton = forwardRef(<C extends ElementType = "button">({
  block = false,
  muted = false,
  color,
  children,
  as,
  ...rest
}: ButtonProps<C>, ref: PolymorphicRef<C>) => {
  const Component = as || 'button';
  
  return <Component
    ref={ref} 
    className={clsx(styles.button, styles[color], {
      [styles.block]: block,
      [styles.muted]: muted,
    })}
    {...rest}
  >{children}</Component>
});

