import React from "react";
import Addnewcontact from "../dialogs/Addnewcontact";
import { useState } from "react";
const AddContact = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  const AddContact = () => {
    //* TODO: Add new contact to the database
  };
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-md text-center">Add New Contact</h3>
          <form className="mt-2">
            <input
              className="input input-bordered input-secondary w-full"
              type="email"
              placeholder="example@gmail.com"
            />
            <div className="text-center mt-4">
              <button className="btn btn-active btn-primary w-[60%]">
                Add
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default AddContact;
