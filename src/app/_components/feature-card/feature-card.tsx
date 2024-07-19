import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";

import Button from "../../../components/button/button";
import Header from "../../../components/header/header";
import theme from "../../../theme/theme";

type FeatureCardProps = {
  title: string;
  description: string;
  actionLink: string;
  actionText: string;
  icon: React.ReactNode;
};

export default function FeatureCard({
  title,
  description,
  actionLink,
  actionText,
  icon,
}: FeatureCardProps) {
  const sx = { color: theme.colors.primary.contrast };

  return (
    <div className="flex flex-col bg-secondary-light px-4 py-5 w-80">
      <div className="flex flex-row items-center justify-center gap-2">
        <Header
          size={3}
          className="text-primary-dark font-semibold text-center"
        >
          {title}
        </Header>
        {icon}
      </div>
      <p className="mt-2 mb-4 text-secondary-contrast">{description}</p>
      <div className="grow" />
      <Link href={actionLink} className="self-end" passHref>
        <Button size="small" endIcon={<ChevronRightIcon sx={sx} />}>
          {actionText}
        </Button>
      </Link>
    </div>
  );
}
