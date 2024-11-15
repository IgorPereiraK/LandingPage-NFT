type ButtonProps = {
  text: string;
};

export default function ButtonPink({ text }: ButtonProps) {
  return (
    <button className="text-base py-2 px-8 text-black rounded-md bg-gradient-to-r from-pink to-purple  hover:to-pink hover:from-purple hover:text-white transition-all duration-300 ease-in-out">
      {text}
    </button>
  );
}
