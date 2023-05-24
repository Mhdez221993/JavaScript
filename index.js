import "./styles.css";

import { useState } from "react";

/*
input rows
input colos
sumit button

on submit
  validata row ans col
  create a table of n cols
  add n rows to the table
    add the index to each data table

*/

function Table({ rows, columns }) {
  return (
    <table>
      <tbody>
        {Array.from({ length: rows }, () => 0).map((_, row) => (
          <tr key={row}>
            {Array.from({ length: columns }, () => 0).map((_, col) => (
              <td key={col}>
                {col % 2 === 0
                  ? rows * col + (row + 1)
                  : rows * (col + 1) - row}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function App() {
  const [rows, setRows] = useState("");
  const [columns, setColumns] = useState("");

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          const data = new FormData(event.target);
          const rows = data.get("rows");
          const columns = data.get("columns");

          setRows(Number(rows));
          setColumns(Number(columns));
        }}
      >
        <label htmlFor="rows">Rows</label>
        <input
          type="number"
          name="rows"
          id="rows"
          min={1}
          defaultValue={rows}
        />

        <label htmlFor="rows">Columns</label>
        <input
          type="number"
          name="columns"
          id="cols"
          min={1}
          defaultValue={columns}
        />
        <button type="submit">Submit</button>
      </form>

      {Boolean(rows) && Boolean(columns) && (
        <Table rows={rows} columns={columns} />
      )}
    </>
  );
}
