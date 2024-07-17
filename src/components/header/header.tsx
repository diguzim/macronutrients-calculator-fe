export interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
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

const Header: React.FC<HeaderProps> = ({
  size,
  className,
  ...remainingProps
}) => {
  const HeaderElement = `h${size}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  return (
    <HeaderElement
      className={`text-primary ${sizeMappingClass[size]} ${className}`}
      {...remainingProps}
    />
  );
};

export default Header;
