interface IDefaultInputProps {
  type: string;
  text?: string;
}

const DefaultInput = ({ type, text }: IDefaultInputProps) => {
  return <input type={type}></input>;
};

export default DefaultInput;
