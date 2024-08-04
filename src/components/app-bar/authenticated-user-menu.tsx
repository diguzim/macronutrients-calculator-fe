import AccountCircle from "@mui/icons-material/AccountCircle";
import { useTranslation } from "react-i18next";
import theme from "../../theme/theme";
import BarButton from "./bar-button";

type TopLeftButtonsProps = {
  active: boolean;
  handleBarItemClick: (item: string) => void;
};

export default function AuthenticatedUserMenu(props: TopLeftButtonsProps) {
  const { t } = useTranslation();

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
      {t("appBar.myFoodsMenu.button")}
    </BarButton>
  );
}
