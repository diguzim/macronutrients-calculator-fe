import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";

import AuthenticationContainer from "./authentication-container";

export default function Topbar() {
  return (
    <div className="flex flex-row items-center justify-between bg-white">
      <div className="flex flex-col items-center w-60 bg-primary p-2 m-1">
        <div className="flex flex-row items-center gap-1 justify-center">
          <PercentOutlinedIcon />
          <h1>MaCal</h1>
          <PercentOutlinedIcon />
        </div>
        <p>Macronutrients Calculator</p>
      </div>
      <AuthenticationContainer />
    </div>
  );
}
