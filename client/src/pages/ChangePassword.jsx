import { useState } from "react";
import { useChangePasswor } from "../featurs/authorizaion/useChangePassword";
import Button from "../ui/Button";
import Input from "../ui/Input";

function ChangePassword() {
  const { changePassword } = useChangePasswor();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  function handelChangePassword(e) {
    e.preventDefault();
    changePassword({ email, password, newPassword });
  }
  return (
    <form
      onSubmit={handelChangePassword}
      className="flex flex-col gap-5 justify-center items-center h-full"
    >
      <Input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <Button typeButton={`large`} type={`submit`}>
        change Password
      </Button>
    </form>
  );
}

export default ChangePassword;
