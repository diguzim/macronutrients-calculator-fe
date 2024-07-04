import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";

import AuthenticationContainer from "./authentication-container";

export default function Topbar() {
  return (
    <div className="flex flex-row items-center justify-between bg-gray-50">
      <div className="bg-blue-600 p-2 text-white">
        <div className="flex flex-row items-center gap-1">
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
