import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPI } from "../../services/apiAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (user) => {
      console.log(user.data);
      queryClient.setQueryData(["user", user.data]);
      toast.success("welcome ...");
      navigate("/");
      localStorage.setItem("token", user.data);
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });
  return { login, isLoading };
}
