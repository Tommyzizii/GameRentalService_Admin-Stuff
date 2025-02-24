export interface DataTableProps {
  headers: string[];
  data: any[];
  dataKey: string[];
  onEdit: (item: any) => void;
  onDelete: (item: any) => void;
}
export const InboxTable = ({
  headers,
  data,
  dataKey,
}: DataTableProps) => {
  return <div className="w-full overflow-x-auto rounded-lg border border-gray-700">
      <table className="w-full text-left">
        <thead className="bg-gray-800">
          <tr>
            {headers.map(header => <th key={header} className="p-4 text-gray-300 font-medium">
                {header}
              </th>)}
            {/* <th className="p-4 text-gray-300 font-medium">Actions</th> */}
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-700">
          {data.map((item, index) => <tr key={index} className="hover:bg-gray-700">
              {dataKey.map(header => <td key={header} className="p-4 text-gray-300">
                  {item[header]}
                </td>)}
            </tr>)}
        </tbody>
      </table>
    </div>;
};