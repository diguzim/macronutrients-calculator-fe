import NextLink, { LinkProps as NextLinkProps } from "next/link";

interface LinkProps extends NextLinkProps {
  children: React.ReactNode;
  className?: string;
}

export default function Link(props: LinkProps) {
  return (
    <NextLink
      {...props}
      className={`
        ${props.className}
        text-primary
        border-b-2 border-transparent hover:border-primary transition duration-300
      `}
    >
      {props.children}
    </NextLink>
  );
}
