import React, { useEffect } from "react";
import { initializeFixedTable } from "./fixedTable";

const makingUpFakeNumbers = (a, b, c) =>
  Math.round(a * (b + c)).toLocaleString("en-US");

interface TableProps {
  columns: number;
  fixed?: boolean;
}

const BaseTable = ({ columns }) => {
  let year = 2024;
  const arr = new Array(columns)
    .fill(null)
    .map((v, i) => year - i)
    .reverse();
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Enrollment</th>
          {arr.map((v, i) => (
            <th scope="col" key={i}>
              Fall {v}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            <p>
              use of <code>&lt; a &gt;</code> in cells{" "}
              <a href="#">example link</a>
            </p>
            Metropolitan campus population
          </th>
          {arr.map((v, i) => (
            <td key={i}>{makingUpFakeNumbers(v, 35, i)}</td>
          ))}
        </tr>
        <tr>
          <th scope="row" className="indent">
            Tempe
          </th>
          {arr.map((v, i) => (
            <td key={i}>{makingUpFakeNumbers(v, 25, i)}</td>
          ))}
        </tr>
        <tr>
          <th scope="row" className="indent">
            Downtown
          </th>
          {arr.map((v, i) => (
            <td key={i}>{makingUpFakeNumbers(v, 7, i)}</td>
          ))}
        </tr>
        <tr>
          <th scope="row" className="indent">
            Polytechnic
          </th>
          {arr.map((v, i) => (
            <td key={i}>{makingUpFakeNumbers(v, 1.6, i / 2)}</td>
          ))}
        </tr>
        <tr>
          <th scope="row" className="indent">
            West
          </th>
          {arr.map((v, i) => (
            <td key={i}>{makingUpFakeNumbers(v, 0.8, i / 4)}</td>
          ))}
        </tr>
        <tr>
          <th scope="row" className="indent">
            Thunderbird
          </th>
          {arr.map((v, i) => (
            <td key={i}>{makingUpFakeNumbers(v, 0.1, i / 10)}</td>
          ))}
        </tr>
        <tr>
          <th scope="row" className="normal">
            Skysong Campus
          </th>
          {arr.map((v, i) => (
            <td key={i}>{makingUpFakeNumbers(v, 5, i / 5)}</td>
          ))}
        </tr>
        <tr>
          <th scope="row">Total</th>
          {arr.map((v, i) => (
            <td key={i}>{makingUpFakeNumbers(v, 50, i)}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export const Table: React.FC<TableProps> = ({ columns, fixed = false }) => {
  useEffect(() => {
    if (fixed) {
      initializeFixedTable();
    }
  }, []);

  if (!fixed) {
    return (
      <div className="uds-table" tabIndex={0}>
        <BaseTable columns={columns} />
      </div>
    );
  }
  return (
    <div className="uds-table-fixed-wrapper">
      <div className="scroll-control previous">
        <button type="button" className="btn btn-circle btn-circle-alt-gray">
          <i className="fas fa-chevron-left"></i>
          <span className="visually-hidden">Previous</span>
        </button>
      </div>

      <div className="scroll-control next">
        <button type="button" className="btn btn-circle btn-circle-alt-gray">
          <i className="fas fa-chevron-right"></i>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="uds-table uds-table-fixed" tabIndex={0}>
        <BaseTable columns={columns} />
      </div>
    </div>
  );
};
