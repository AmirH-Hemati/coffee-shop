import { useMutation, useQueryClient } from "@tanstack/react-query";
import { register as registerAPI } from "../../services/apiAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: register, isLoading } = useMutation({
    mutationFn: ({ email, password, userName }) =>
      registerAPI({ email, password, userName }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user", user.data._id]);
      toast.success("succssusfully created account");
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });
  return { register, isLoading };
}
