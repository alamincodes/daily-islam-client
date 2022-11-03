import React from "react";

const Modal = ({ setModal }) => {
  return (
    <div>
      <div className="justify-center items-center sm:mx-6 flex fixed inset-0 z-50 ">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="  rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*body*/}
            <div className="relative p-5 flex-auto">
              <p className="text-black">হাদিসটি ডাউনলোড করার জন্য ধন্যবাদ 🖤</p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-4 border-slate-200 rounded-b">
              <button
                className="bg-black px-6 py-1 rounded-full text-[20px]"
                type="button"
                onClick={() => setModal(false)}
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default Modal;
