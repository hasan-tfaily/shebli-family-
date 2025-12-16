"use client";
import React from "react";

const columns = ["KidzMondo City", "KidzMondo Village", "KidzMondo Popup"] as const;

const rows = [
  {
    label: "Type",
    values: [
      ["Fixed", "Permanent"],
      ["Fixed", "Permanent"],
      ["Mobile", "Temporary"],
    ],
  },
  {
    label: "Target Age",
    values: [["2 to 14"], ["2 to 14"], ["2 to 14"]],
  },
  {
    label: "Size",
    values: [["BUA +5000sqm"], ["BUA +3000sqm"], ["+1200 sqm"]],
  },
  {
    label: "Location type",
    values: [
      ["Standalone", "In Malls", "Extension to Malls", "Mixed-used complexes"],
      ["Standalone", "In Malls", "Extension to Malls", "Mixed-used complexes"],
      ["Standalone", "In Malls", "Activations"],
    ],
  },
];

export default function KidzMondoFormatsTable() {
  return (
    <section className="kidz-formats">
        <div className="tf-container">
        <div className="row">
          <div className="col-12">
      <div className="kidz-formats__head">
        <h3 className="kidz-formats__title">KidzMondo Formats</h3>
        <p className="kidz-formats__subtitle">
          Quick comparison between City, Village, and Popup concepts.
        </p>
      </div>

      {/* Desktop / Tablet table */}
      <div className="kidz-table-wrap">
        <table className="kidz-table" aria-label="KidzMondo formats comparison table">
          <thead>
            <tr>
              <th className="kidz-table__corner" scope="col" aria-hidden="true"></th>
              {columns.map((c) => (
                <th key={c} scope="col" className="kidz-table__th">
                  {c}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <th scope="row" className="kidz-table__rowhead">
                  {row.label}
                </th>

                {row.values.map((cell, idx) => (
                  <td key={idx} className="kidz-table__td">
                    {cell.length > 1 ? (
                      <ul className="kidz-table__list">
                        {cell.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <span className="kidz-table__text">{cell[0]}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="kidz-cards" aria-label="KidzMondo formats comparison cards">
        {columns.map((col, colIndex) => (
          <div key={col} className="kidz-card">
            <div className="kidz-card__title">{col}</div>

            {rows.map((row) => {
              const cell = row.values[colIndex];
              return (
                <div key={row.label} className="kidz-card__row">
                  <div className="kidz-card__label">{row.label}</div>
                  <div className="kidz-card__value">
                    {cell.length > 1 ? (
                      <ul className="kidz-card__list">
                        {cell.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <span>{cell[0]}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      </div>
      </div>
      </div>
    </section>
  );
}
 