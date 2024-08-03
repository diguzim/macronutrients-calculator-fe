"use client";

type MenuPositionerProps = {
  visible: boolean;
  children: React.ReactNode;
};

export default function MenuPositioner({
  visible,
  children,
}: MenuPositionerProps) {
  return (
    <div
      className={`
      relative z-10
      ${visible ? "opacity-100 visible" : "opacity-0 invisible"}
      transition-opacity duration-300 ease-in-out
    `}
    >
      <div className="absolute bg-white w-full border-2 border-gray rounded py-4 shadow-2xl">
        {children}
      </div>
    </div>
  );
}
