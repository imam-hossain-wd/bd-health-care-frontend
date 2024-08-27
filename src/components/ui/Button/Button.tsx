import { Button as KeepButton } from "keep-react";

type IButtonProps = {
  text: string;
  className: string;
  outlet?: boolean;
};

const Button = ({ text, className, outlet }: IButtonProps) => {
  return outlet ? (
    <KeepButton color="primary" variant="outline"
      className={`py-2 px-4 rounded ${className}`}
    >
      {text}
    </KeepButton>
  ) : (
    <KeepButton
      className={` text-white py-2 px-4 rounded ${className}`}
    >
      {text}
    </KeepButton>
  );
};

export default Button;
