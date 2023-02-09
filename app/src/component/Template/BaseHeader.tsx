import cx from "classnames";
import { Icon } from "../Atom/Icon/Icon";
import { Text } from "../Atom/Text/Text";

export interface BaseHeaderProps {
  className?: string;
  title?: string;
  children?: React.ReactNode;
  showBackButton?: boolean;
  onBack?(): void | Promise<void>;
}

const BaseHeader: React.FC<BaseHeaderProps> = ({
  className,
  title,
  children,
  showBackButton,
  onBack,
}) => {
  return (
    <div className={cx("baseHeader", className)}>
      {showBackButton && (
        <Icon className="backIconWrapper" onClick={onBack}>
          <p>왼쪽</p>
        </Icon>
      )}
      {title && <Text className="baseHeaderTitle">{title}</Text>}
      {children}
    </div>
  );
};

export default BaseHeader;
