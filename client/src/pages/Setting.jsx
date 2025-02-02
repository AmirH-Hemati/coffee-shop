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
    setEmail("");
    setUserName("");
    setImage("");
    // call to api and send form data and rechange data
  }
  return (
    <div className="w-full bg-red-500 h-full flex flex-col items-center p-8">
      <div className="w-[90%] bg-[#F9FAFC] flex gap-10">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4n4D5jth4fm4GE7ut7lWW-04lnDO2OkD-sg&s"
          alt=""
          className="w-24 rounded-full"
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
        className="w-[90%] flex flex-col gap-6"
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

        <div className="flex w-[90%] justify-between">
          <p>Your Profile Picture *</p>
          <label htmlFor="file">
            <div className=" w-40 h-40 rounded-sm bg-red-500  border border-dotted border-black">
              <img
                src={image ? image : user?.data?.avatar}
                alt=""
                className=" h-full rounded-full object-cover"
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
