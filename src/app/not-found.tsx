import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import Layout from "../components/layout/layout";
import Link from "../components/link/link";
import theme from "../theme/theme";

export default function NotFound() {
  return (
    <Layout
      size="sm"
      title="Page not found"
      description="Could not find requested resource"
    >
      <Link href="/">
        <ChevronLeftIcon sx={{ color: theme.colors.primary }} />
        Return Home
      </Link>
    </Layout>
  );
}
