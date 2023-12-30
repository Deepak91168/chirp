import React from "react";
import Chat from "../Chat";
import ContactCard from "../contacts/ContactCard";
import Image from "next/image";
import { AiOutlineMenuUnfold } from "react-icons/ai";
const Drawer = () => {
  return (
    <div className="drawer md:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col border-red-500">
        <Chat />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary bg-transparent border-none drawer-button lg:hidden absolute top-2 right-2 rounded-full transition ease-in-out duration-500"
        >
          <AiOutlineMenuUnfold className="text-lg text-white" />
        </label>
      </div>
      <div className="drawer-side border-gray-800">
        <div className="p-2 px-4 fixed shadow-gray-900 shadow-md z-10 flex items-center bg-[#3F0071] border-slate-600 border-r-[0.5px] w-60 sm:w-[350px] lg:w-[450px] xl:w-[500px]">
          <div className="">
            <Image
              alt="Tailwind CSS Navbar component"
              src={
                "data:image/jpeg;base64,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"
              }
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <div className="ml-2">User Name</div>
        </div>
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu w-60 mt-[65px] p-0 sm:w-[350px] lg:w-[450px] xl:w-[500px] min-h-full bg-base-200 text-base-content overflow-y-auto">
          <ContactCard connectRecipient />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
