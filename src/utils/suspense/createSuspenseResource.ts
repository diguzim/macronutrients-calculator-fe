export function createSuspenseResource<T>(fetchFunction: () => Promise<T>) {
  let status: "pending" | "success" | "error" = "pending";
  let result: T;
  let error: any;
  const suspender = fetchFunction().then(
    (data) => {
      status = "success";
      result = data;
    },
    (err) => {
      status = "error";
      error = err;
    }
  );

  return {
    read(): T {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw error;
      } else if (status === "success") {
        return result;
      }
      throw new Error("Unexpected status");
    },
  };
}
