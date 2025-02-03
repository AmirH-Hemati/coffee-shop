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
    <div className="w-full h-full flex  justify-center items-center bg-white">
      <form
        onSubmit={handelChangePassword}
        className="flex flex-col gap-5 justify-center items-center border-2 border-black/20 rounded-sm p-6  w-80"
      >
        <Input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={`md:w-full`}
        />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={`md:w-full`}
        />
        <Input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={`md:w-full `}
        />
        <Button typeButton={`large`} type={`submit`} style={`md:w-full w-full`}>
          change Password
        </Button>
      </form>
    </div>
  );
}

export default ChangePassword;
