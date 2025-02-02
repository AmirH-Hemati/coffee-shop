import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProfile as editProfileAPI } from "../../services/apiUser";
import { toast } from "react-toastify";

export function useEditProfile() {
  const queryClient = useQueryClient();
  const { mutate: editProfile, isLoading } = useMutation({
    mutationFn: (formData) => editProfileAPI(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast.success("change information profile");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { editProfile, isLoading };
}
