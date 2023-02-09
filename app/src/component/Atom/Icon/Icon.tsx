import React from "react";
import cx from "classnames";
export interface IconProps {
  className?: string;
  children: React.ReactElement;
  onClick?(): void | Promise<void>;
}

const IconComponent: React.FC<IconProps> = ({
  className,
  children,
  onClick,
}) => {
  const onClickIcon = React.useCallback(() => {
    if (onClick) {
      onClick();
    } else {
      return;
    }
  }, [onClick]);
  return (
    <div className={cx("Icon", className)} onClick={onClickIcon}>
      {children}
    </div>
  );
};

export const Icon = React.memo(IconComponent);
