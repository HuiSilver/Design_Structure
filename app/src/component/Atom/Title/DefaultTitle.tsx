interface IDefaultTitleProps {
  title: string;
  className?: string;
}

const DefaultTitle = ({ title, className }: IDefaultTitleProps) => {
  return <h1 className={`title ${className}`}>{title}</h1>;
};

export default DefaultTitle;
