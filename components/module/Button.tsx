interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="bg-black text-white px-4 py-3 rounded-xl text-sm">
      {text}
    </button>
  );
};

export default Button;
