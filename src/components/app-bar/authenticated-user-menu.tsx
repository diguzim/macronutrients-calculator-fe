import AccountCircle from "@mui/icons-material/AccountCircle";
import theme from "../../theme/theme";
import BarButton from "./bar-button";

type TopLeftButtonsProps = {
  active: boolean;
  handleBarItemClick: (item: string) => void;
};

export default function AuthenticatedUserMenu(props: TopLeftButtonsProps) {
  return (
    <BarButton
      onClick={() => props.handleBarItemClick("my-foods")}
      active={props.active}
      leftIcon={
        <AccountCircle
          sx={{
            color: theme.colors.black,
          }}
        />
      }
    >
      My Foods
    </BarButton>
  );
}
