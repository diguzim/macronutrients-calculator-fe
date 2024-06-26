import { Control, useForm } from "react-hook-form";

interface UseFormControllerProps {
  defaultValues: Record<string, any>;
}

interface UseFormControllerResult {
  control: Control<any>;
  handleSubmit: ReturnType<typeof useForm>["handleSubmit"];
}

const useFormController = ({
  defaultValues,
}: UseFormControllerProps): UseFormControllerResult => {
  const { control, handleSubmit } = useForm({
    defaultValues,
  });

  return { control, handleSubmit };
};

export default useFormController;
