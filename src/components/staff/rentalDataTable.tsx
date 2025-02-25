import { Check, Pen, X } from "lucide-react";
import { DataTableProps } from "./inboxTable";

interface RentalDataTableProps extends DataTableProps {
  tableType?: string;
  rentalStatus?: string|null;
}

export const RentalDataTable = ({
  headers,
  data,
  dataKey,
  onEdit,
  onDelete,
  tableType="default",
  rentalStatus
}: RentalDataTableProps) => {
  console.log(data)
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
              {dataKey.map(header => <td key={header} className="p-4 text-gray-300">
                {console.log(header)} 
                  {item[header]}
                </td>)}
              <td className="p-4">
                <div className="flex space-x-2">
                  <button onClick={() => onEdit(item[dataKey[0]])} className="p-1 text-blue-400 hover:text-blue-300">
                    {tableType==="rental"?item[dataKey[5]]!=="Returned"&&<Check size={18} />:<Pen size={18} />}
                  </button>
                  
                  {tableType!=="rental" && tableType!=="staff" ?item[dataKey[5]]!=="Pending" && <button onClick={() => onDelete(item[dataKey[0]])} className="p-1 text-red-400 hover:text-red-300">
                    <X size={18} />
                    </button>:<></>}
                </div>
              </td>
            </tr>)}
        </tbody>
      </table>
    </div>;
};