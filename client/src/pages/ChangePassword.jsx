import Button from "../ui/Button";
import Input from "../ui/Input";

function ChangePassword() {
  return (
    <form className="flex flex-col gap-5 justify-center items-center h-full">
      <Input type="text" placeholder="email" />
      <Input type="password" placeholder="password"/>
      <Input type="password" placeholder="New Password"/>
      <Button typeButton={`large`} type={`submit`}>change Password</Button>
    </form>
  );
}

export default ChangePassword;
