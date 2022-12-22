import "./style.scss";

export interface IButtonCapsuleProps {
  /** 버튼명 */
  className?: string;
  /** 버튼 내용 */
  text?: string;
}

const ButtonCapsule = ({ className, text }: IButtonCapsuleProps) => {
  return <button className={`buttonCapsule ${className}`}>{text}</button>;
};

export default ButtonCapsule;
