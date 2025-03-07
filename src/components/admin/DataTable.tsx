import { Edit, Trash2 } from "lucide-react";
interface DataTableProps {
  headers: string[];
  dataKey: string[];
  data: any[];
  onEdit: (item: any) => void;
  onDelete: (item: any) => void;
}
export const DataTable = ({
  headers,
  data,
  onEdit,
  dataKey,
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
              {dataKey.map(header => <td key={header} className="p-4 text-gray-300">
                {item[header]}
                </td>)}
              <td className="p-4">
                <div className="flex space-x-2">
                  <button onClick={() => onEdit(item[dataKey[0]])} className="p-1 text-blue-400 hover:text-blue-300">
                    <Edit size={18} />
                  </button>
                  <button onClick={() => onDelete(item[dataKey[0]])} className="p-1 text-red-400 hover:text-red-300">
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>)}
        </tbody>
      </table>
    </div>;
};