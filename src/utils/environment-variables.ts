export function environmentVariables() {
  return {
    public: {
      backendUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    },
  };
}
