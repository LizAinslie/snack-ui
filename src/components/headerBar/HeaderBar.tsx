import {
  ComponentPropsWithoutRef,
  ElementType,
  FC,
  forwardRef,
  PropsWithChildren,
} from "react";
import { PropsWithColor, PropsWithDark } from "../../util/types/propTypes";
import { PolymorphicRef } from "../../util/types/polymorphic";
import styles from "./HeaderBar.module.scss";
import clsx from "clsx";

export type HeaderBarProps<C extends ElementType> = {
  as?: C;
} & PropsWithChildren &
  PropsWithDark &
  PropsWithColor &
  ComponentPropsWithoutRef<C>;

export const HeaderBar: FC<HeaderBarProps<ElementType<any>>> = forwardRef(
  <C extends ElementType = "header">(
    { as, color, dark, children, ...rest }: HeaderBarProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const Component = as ?? "header";

    return (
      <Component
        ref={ref}
        className={clsx(styles.headerBar, styles[`${color}`], {
          [styles.dark]: dark,
        })}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);
