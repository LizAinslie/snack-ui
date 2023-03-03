import clsx from 'clsx';
import {
  ComponentPropsWithoutRef, 
  ElementType, 
  forwardRef, 
  PropsWithChildren
} from 'react';
import { PolymorphicRef } from '../../util/types/polymorphic';
import { PropsWithColor, PropsWithDark } from '../../util/types/propTypes';
import styles from './PageContainer.module.scss';

export type PageContainerProps<C extends ElementType> = {
  as?: C;
  fullPage: boolean;
} & PropsWithColor & PropsWithDark & PropsWithChildren 
  & ComponentPropsWithoutRef<C>;

const PageContainer = forwardRef(<C extends ElementType = "div",>({
  fullPage = false,
  dark = false,
  color,
  as,
  children,
  ...rest
}: PageContainerProps<C>, ref: PolymorphicRef<C>) => {
  const Component = as || 'div';

  return (
    <Component
      ref={ref}
      className={clsx(styles.pageContainer, styles[`${color}`], {
        [styles.fullPage]: fullPage,
        [styles.dark]: dark,
      })}
      {...rest}
    >{children}</Component>
  );
});

export default PageContainer;

