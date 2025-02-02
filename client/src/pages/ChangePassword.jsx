import { useState } from "react";
import { useChangePasswor } from "../featurs/authorizaion/useChangePassword";
import Button from "../ui/Button";
import Input from "../ui/Input";

function ChangePassword() {
  const { changePassword } = useChangePasswor();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPasswor, setNewPasswor] = useState("second");
  function handelChangePassword(e) {
    e.preventDefault();
    changePassword({ email, password, newPasswor });
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
        value={newPasswor}
        onChange={(e) => setNewPasswor(e.target.value)}
      />
      <Button typeButton={`large`} type={`submit`}>
        change Password
      </Button>
    </form>
  );
}

export default ChangePassword;
