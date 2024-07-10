import AuthenticationContainer from "./authentication-container";
import GeneralContainer from "./general-container";

export default function Topbar() {
  return (
    <div className="flex flex-row items-center justify-between bg-white p-2">
      {/* <Link href="/">
        <Image
          src="/logo-no-background.svg"
          alt="logo"
          width={100}
          height={100}
        />
      </Link> */}
      <GeneralContainer />
      <AuthenticationContainer />
    </div>
  );
}
