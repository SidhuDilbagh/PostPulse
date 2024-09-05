import { TextInput } from "flowbite-react";
import { useSelector } from "react-redux";

export default function DashPro() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="w-full">
      <form className="flex flex-col gap-4">
        <h1 className="self-center max-w-min font-semibold mt-6 text-gray-400 text-2xl whitespace-nowrap">My Profile</h1>
        <img
          src={currentUser.profilePicture}
          className="self-center rounded-full border-8 mb-3 border-gray-200 object-cover h-32 w-32"
          alt="profile picture"
        />
        <TextInput type="text" id="username" className="max-w-sm w-6/12 place-self-center" placeholder='username' defaultValue={currentUser.username} />
        <TextInput type="email" id="email" className="max-w-sm w-6/12 place-self-center" placeholder='email' defaultValue={currentUser.email} />
      </form>
      <div className="text-red-500 flex justify-between mt-5">
        <span className="cursor-pointer">SignOut</span>
        <span className="cursor-pointer">Delete Account</span>
      </div>
    </div>
  );
}
