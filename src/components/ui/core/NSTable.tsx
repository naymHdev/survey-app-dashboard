"use client";

import React, { useState } from "react";

interface Column {
  label: string;
  key: string;
}

interface Row {
  [key: string]: string | number;
}

interface TableProps {
  columns: Column[];
  rows: Row[];
  itemsPerPage?: number;
}

const NSTable: React.FC<TableProps> = ({
  columns,
  rows,
  itemsPerPage = 10,
}) => {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  }>({
    key: "",
    direction: "asc",
  });
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Sorting logic
  const sortedRows = React.useMemo(() => {
    let sortableRows = [...rows];
    if (sortConfig.key) {
      sortableRows.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableRows;
  }, [rows, sortConfig]);

  // Pagination logic
  const pageCount = Math.ceil(sortedRows.length / itemsPerPage);
  const currentData = sortedRows.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-4 py-2 text-left cursor-pointer"
                onClick={() => handleSort(column.key)}
              >
                {column.label}
                {sortConfig.key === column.key && (
                  <span
                    className={`ml-2 ${
                      sortConfig.direction === "asc" ? "⬆" : "⬇"
                    }`}
                  />
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, index) => (
            <tr key={index} className="border-t hover:bg-gray-50">
              {columns.map((column) => (
                <td key={column.key} className="px-4 py-2">
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="flex justify-between items-center py-2">
        <button
          onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {pageCount}
        </span>
        <button
          onClick={() =>
            setCurrentPage(
              currentPage < pageCount ? currentPage + 1 : pageCount
            )
          }
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NSTable;
