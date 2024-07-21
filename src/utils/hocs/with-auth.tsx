// src/hocs/withAuth.tsx
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { ComponentType, useEffect } from "react";
import useAuth from "../../contexts/auth/use-auth";

interface WithAuthProps {}

const withAuth = <P extends WithAuthProps>(
  WrappedComponent: ComponentType<P>
) => {
  const ComponentWithAuth = (props: P) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
      if (!isAuthenticated) {
        enqueueSnackbar("You must be logged in to view this page", {
          variant: "info",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
          preventDuplicate: true,
        });
        router.replace("/login");
      }
    }, [enqueueSnackbar, isAuthenticated, router]);

    if (!isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  ComponentWithAuth.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return ComponentWithAuth;
};

export default withAuth;
