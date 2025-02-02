import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changePassword as changePasswordAPI } from "../../services/apiAuth";
import { toast } from "react-toastify";

export function useChangePasswor() {
  const queryClient = useQueryClient();
  const { mutate: changePassword, isLoading } = useMutation({
    mutationFn: ({ email, password, newPassword }) =>
      changePasswordAPI({ email, password, newPassword }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast.success("change password");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });
  return { changePassword, isLoading };
}
