import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";

const TableRow = ({
  singleRow,
  isIndeterminate,
  allSelectedUsers,
  setAllSelectedUsers,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <tr>
      <th className="w-10 text-center px-0">
        <label>
          <input
            type="checkbox"
            onChange={() => setIsSelected(!isSelected)}
            checked={isSelected}
            className="checkbox border-[#7F56D9] [--chkbg:theme(colors.white)] [--chkfg:#7F56D9]"
          />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={singleRow?.avatar}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{singleRow?.first_name}</div>
            <div className="text-sm opacity-50">{singleRow?.last_name}</div>
          </div>
        </div>
      </td>
      <td>
        {singleRow?.email}
        <br />
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
      </td>
      <td>Purple</td>
      <th className="w-32 ">
        <button className="btn bg-transparent hover:bg-transparent border-0 btn-xs">
          <RiDeleteBin6Line size={20} />
        </button>
        <button className="btn bg-transparent hover:bg-transparent border-0 btn-xs">
          <FiEdit2 size={20} />
        </button>
      </th>
    </tr>
  );
};

export default TableRow;
