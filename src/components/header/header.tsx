export interface HeaderProps {
  text: string;
  size: 1 | 2 | 3 | 4 | 5 | 6;
}

const sizeMappingClass = {
  1: "text-4xl",
  2: "text-3xl",
  3: "text-2xl",
  4: "text-xl",
  5: "text-lg",
  6: "text-base",
};

const Header: React.FC<HeaderProps> = ({ text, size }) => {
  const HeaderElement = `h${size}` as keyof JSX.IntrinsicElements;
  return (
    <HeaderElement className={`text-primary ${sizeMappingClass[size]}`}>
      {text}
    </HeaderElement>
  );
};

export default Header;
