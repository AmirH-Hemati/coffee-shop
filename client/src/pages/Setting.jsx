import { MessageText } from "iconsax-react";
import { useUser } from "../featurs/authorizaion/useUser";
import FormLabel from "../ui/FormLabel";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import { useEditProfile } from "../featurs/user/useEditFrofile";

function Setting() {
  const { user } = useUser();
  const { editProfile } = useEditProfile();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [image, setImage] = useState("");
  const [file, setFile] = useState("");
  useEffect(() => {
    if (user?.data) {
      setEmail(user?.data?.email);
      setUserName(user?.data?.userName);
    }
  }, [user?.data]);

  function handelChangeProfile(e) {
    e.preventDefault();
    if (email === "" || userName === "") return;
    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("file", file);
    editProfile(formData);
  }
  return (
    <div className="w-full bg-[#F9F5F5] h-full flex flex-col items-center p-4 text-sm">
      <div className="w-full bg-[#F9FAFC] flex gap-10">
        <img
          src={user?.data?.avatar}
          alt=""
          className="w-12 h-12 md:w-24 md:h-24 object-cover rounded-full"
        />
        <div className="flex flex-col">
          <div className="flex items-center">
            <p>{user?.data?.userName}</p>
            <p className="bg-yellow-300  px-2 rounded-2xl">
              {user?.data?.role}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MessageText size="20" color="black" />
            <p>{user?.data?.email}</p>
          </div>
        </div>
      </div>
      <form
        className="w-full flex flex-col gap-6"
        onSubmit={handelChangeProfile}
      >
        <FormLabel label={`User Name`}>
          <Input
            type={`text`}
            value={userName}
            name={`userName`}
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormLabel>
        <FormLabel label={`Email`}>
          <Input
            type={`text`}
            value={email}
            name={`email`}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormLabel>
        <p className=""></p>

        <div className="flex w-full justify-between  font-semibold ">
          <p>Your Profile Picture *</p>
          <label htmlFor="file">
            <div className=" w-22 h-22 rounded-sm p-1 md:w-40 md:h-40 cursor-pointer  bg-white border border-dotted border-black">
              <img
                src={image ? image : user?.data?.avatar}
                alt=""
                className=" h-full  object-cover rounded-full"
              />
            </div>
          </label>

          <input
            type="file"
            name="file"
            id="file"
            className="hidden"
            onChange={(e) => {
              setImage(URL.createObjectURL(e.target.files[0]));
              setFile(e.target.files[0]);
            }}
          />
        </div>
        <Button typeButton={`large`} style={`self-end`}>
          Save
        </Button>
      </form>
    </div>
  );
}

export default Setting;
