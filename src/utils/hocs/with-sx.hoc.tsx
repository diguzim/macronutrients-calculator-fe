import { SxProps, Theme } from "@mui/system";
import { ComponentType } from "react";

export const withSx = (Component: ComponentType<any>, sx: SxProps<Theme>) => {
  const ComponentWithSx = (props: any) => {
    return <Component {...props} sx={sx} />;
  };

  ComponentWithSx.displayName = `withSx(${Component.displayName || Component.name})`;

  return <ComponentWithSx />;
};
