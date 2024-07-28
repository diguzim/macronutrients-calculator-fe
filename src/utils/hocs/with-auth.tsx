// src/hocs/withAuth.tsx
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { ComponentType, useEffect } from "react";

import useAuth from "../../contexts/auth/use-auth";
import { ROUTES } from "../constants/routes";

interface WithAuthProps {}

const withAuth = <P extends WithAuthProps>(
  WrappedComponent: ComponentType<P>
) => {
  const ComponentWithAuth = (props: P) => {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
      if (loading) {
        return;
      }

      if (!isAuthenticated) {
        enqueueSnackbar("You must be logged in to view this page", {
          variant: "info",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
          preventDuplicate: true,
        });
        router.push(ROUTES.LOGIN);
      }
    }, [enqueueSnackbar, isAuthenticated, loading, router]);

    if (loading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <CircularProgress />
        </div>
      );
    }

    if (!isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  ComponentWithAuth.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return ComponentWithAuth;
};

export default withAuth;
