import React from "react";

interface RowData {
  [key: string]: any;
}

interface DatatableProps {
  rows: RowData[];
  columns: string[];
}

const Datatable: React.FC<DatatableProps> = ({ rows, columns }) => {
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg divide-y divide-[#E6E6E6] ">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-[#E6E6E6]">
                <thead className="bg-[#F7F7F7] ">
                  <tr>
                    {columns.map((column, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-[#303030] uppercase"
                      >
                        {column}
                      </th>
                    ))}
                    {/* <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                    >
                      Action
                    </th> */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 ">
                  {rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {columns.map((column, colIndex) => (
                        <td
                          key={colIndex}
                          className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 "
                        >
                          {row[column]}
                        </td>
                      ))}
                      {/* <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none "
                        >
                          Delete
                        </button>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datatable;
