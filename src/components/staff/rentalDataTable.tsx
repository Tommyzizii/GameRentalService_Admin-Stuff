import React from "react";
import { Check, Edit, Trash2, X } from "lucide-react";
interface DataTableProps {
  headers: string[];
  data: any[];
  onEdit: (item: any) => void;
  onDelete: (item: any) => void;
}
export const RentalDataTable = ({
  headers,
  data,
  onEdit,
  onDelete
}: DataTableProps) => {
  return <div className="w-full overflow-x-auto rounded-lg border border-gray-700">
      <table className="w-full text-left">
        <thead className="bg-gray-800">
          <tr>
            {headers.map(header => <th key={header} className="p-4 text-gray-300 font-medium">
                {header}
              </th>)}
            <th className="p-4 text-gray-300 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-700">
          {data.map((item, index) => <tr key={index} className="hover:bg-gray-700">
              {headers.map(header => <td key={header} className="p-4 text-gray-300">
                {console.log(header)} 
                  {item[header]}
                </td>)}
              <td className="p-4">
                <div className="flex space-x-2">
                  <button onClick={() => onEdit(item)} className="p-1 text-blue-400 hover:text-blue-300">
                    <Check size={18} />
                  </button>
                  <button onClick={() => onDelete(item)} className="p-1 text-red-400 hover:text-red-300">
                    <X size={18} />
                  </button>
                </div>
              </td>
            </tr>)}
        </tbody>
      </table>
    </div>;
};