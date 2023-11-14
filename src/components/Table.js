import React from "react";
import DataTable from "react-data-table-component";

const Table = ({ data, columns }) => {
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#1f2937",
      },
    },
    headCells: {
      style: {
        color: "#ffffff",
        textAlign: "center",
      },
    },
    cells: {
      style: {
        textAlign: "center",
      },
    },
  };

  return (
    <div className="mt-2 mx-4">
      <DataTable
        columns={columns}
        data={data}
        pagination
        customStyles={customStyles}
      />
    </div>
  );
};

export default Table;
