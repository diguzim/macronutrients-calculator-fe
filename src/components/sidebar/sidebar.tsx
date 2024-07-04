import NavigationLinks from "./navigation-links";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-1 h-full w-60 m-1">
      <NavigationLinks />
    </div>
  );
}
