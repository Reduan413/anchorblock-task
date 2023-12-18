import React, { useState } from "react";
import Layout from "../Components/Layout";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineAdd } from "react-icons/md";
import TableRow from "../Components/TableRow";
import { useGetAllUsersQuery } from "../features/apiSlice";

const Users = () => {
  const [pageNo, setPageNo] = useState(1);
  const {
    data: allUsersData,
    error,
    isError,
    isLoading,
  } = useGetAllUsersQuery(pageNo);

  const [isIndeterminate, setIndeterminate] = useState(false);
  const [allSelectedUsers, setAllSelectedUsers] = useState([]);

  return (
    <Layout className="">
      <div className="w-11/12 m-auto">
        <div className="flex flex-row justify-between pt-4">
          <div>
            <h1>Users</h1>
          </div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <div className="relative ">
              <label
                title="Click to upload"
                for="button2"
                className="cursor-pointer flex items-center gap-4 px-4 py-2 before:border-2  rounded-lg shadow hover:shadow-3xl
                hover:before:border-gray-300 group dark:before:bg-darker dark:hover:before:border-gray-500 before:bg-white dark:before:border-gray-600 before:absolute before:inset-0 before:rounded-lg  before:transition-transform before:duration-300 hover:before:scale-105"
              >
                <div className="w-max relative">
                  <IoCloudUploadOutline />
                </div>
                <div className="relative">
                  <span className="block text-base font-semibold relative text-blue-900  group-hover:text-blue-500">
                    Import
                  </span>
                </div>
              </label>
              <input
                hidden=""
                type="file"
                name="button2"
                id="button2"
                className="hidden"
              />
            </div>
            <div>
              <button
                className="flex justify-center items-center gap-1 bg-[#7F56D9] border-0 text-white focus:outline-0"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                <MdOutlineAdd size={20} />
                Add User
              </button>
            </div>

            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  Press ESC key or click on ✕ button to close
                </p>
              </div>
            </dialog>
          </div>
        </div>
        <div className="overflow-x-auto my-8 border-2 border-[#EAECF0] rounded-lg shadow  shadow-5xl ">
          <table className="table border-b-2">
            {/* head */}
            <thead className="bg-[#F9FAFB]">
              <tr>
                <th className="w-10 text-center px-0">
                  <label>
                    <input
                      type="checkbox"
                      onChange={() => setIndeterminate(!isIndeterminate)}
                      checked={isIndeterminate}
                      className="checkbox border-[#7F56D9] [--chkbg:theme(colors.white)] [--chkfg:#7F56D9]"
                      ref={(el) => el && (el.indeterminate = isIndeterminate)}
                    />
                  </label>
                </th>
                <th>User Info</th>
                <th>About</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {allUsersData?.data?.map((singleRow, index) => (
                <TableRow
                  key={index}
                  singleRow={singleRow}
                  isIndeterminate={isIndeterminate}
                  allSelectedUsers={allSelectedUsers}
                  setAllSelectedUsers={setAllSelectedUsers}
                />
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center px-6 py-4 ">
            <button
              className="flex justify-center items-center py-2 px-4 text-black border-2 border-[#D0D5DD] shadow shadow-5xl"
              onClick={() => {
                if (pageNo > 1) {
                  setPageNo(pageNo - 1);
                }
              }}
            >
              Previous
            </button>

            <p className="text-black font-medium">
              Page {allUsersData?.page} of {allUsersData?.total}
            </p>

            <button
              className="flex justify-center items-center py-2 px-4 text-black border-2 border-[#D0D5DD] shadow shadow-5xl"
              onClick={() => {
                if (pageNo < allUsersData?.total) {
                  setPageNo(pageNo + 1);
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
