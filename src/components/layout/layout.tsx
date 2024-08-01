import PageTitle from "../page-title/page-title";

type LayoutProps = {
  size?: "container" | "sm" | "md" | "lg" | "full";
  disableBackgroundEffect?: boolean;
  children: React.ReactNode;
  title?: string;
  description?: string;
};

export default function Layout({
  children,
  size = "container",
  disableBackgroundEffect = false,
  title,
  description,
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
        <div className="flex flex-col gap-10">
          {title && <PageTitle title={title} description={description} />}
          {children}
        </div>
      </div>
    </div>
  );
}
