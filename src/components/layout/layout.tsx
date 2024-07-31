type LayoutProps = {
  size?: "container" | "sm" | "md" | "lg" | "full";
  disableBackgroundEffect?: boolean;
  children: React.ReactNode;
};

export default function Layout({
  children,
  size = "container",
  disableBackgroundEffect = false,
}: LayoutProps) {
  return (
    <div
      className={`
        flex-1 w-full
        ${!disableBackgroundEffect && "bg-gradient-to-b from-white to-primary-light"}
      `}
    >
      <div
        className={`
          ${size === "container" && "container mx-auto"}
          ${size === "sm" && "max-w-screen-sm mx-auto"}
          ${size === "md" && "max-w-screen-md mx-auto"}
          ${size === "lg" && "max-w-screen-lg mx-auto"}
          ${size === "full" && "w-full"}
        `}
      >
        {children}
      </div>
    </div>
  );
}
