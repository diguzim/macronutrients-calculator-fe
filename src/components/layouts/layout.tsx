type LayoutProps = {
  size: "sm" | "md" | "lg" | "full";
  disableBackgroundEffect?: boolean;
  children: React.ReactNode;
};

export default function Layout({
  children,
  size,
  disableBackgroundEffect = false,
}: LayoutProps) {
  return (
    <div
      className={`
        flex-1 w-full
        ${!disableBackgroundEffect && "bg-gradient-to-b from-white to-primary-dark"}
      `}
    >
      <div className="max-w-[1000px] bg-blue-600 mx-auto">{children}</div>
    </div>
  );
}
