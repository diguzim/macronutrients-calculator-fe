import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ReactNode } from "react";
import theme from "../../theme/theme";
import Button from "../button/button";

type BarButtonProps = {
  children: ReactNode;
  onClick: () => void;
  active: boolean;
};

export default function BarButton(props: BarButtonProps) {
  return (
    <Button
      variant="text"
      onClick={props.onClick}
      endIcon={
        <ExpandMoreIcon
          sx={{
            transform: props.active ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
            color: theme.colors.primary.contrast,
          }}
        />
      }
    >
      {props.children}
    </Button>
  );
}
