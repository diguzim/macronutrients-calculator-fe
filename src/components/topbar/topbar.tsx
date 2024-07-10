import AuthenticationContainer from "./authentication-container";
import GeneralContainer from "./general-container";

export default function Topbar() {
  return (
    <div className="flex flex-row items-center justify-between py-2 px-6 border-b-2">
      <GeneralContainer />
      <AuthenticationContainer />
    </div>
  );
}
