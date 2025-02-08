import React from "react";
import { BalanceSheetItem } from "../../types/BalanceSheetItem";

interface BalanceSheetReportTableProps {
  report: BalanceSheetItem;
}

const BalanceSheetReportTable: React.FC<BalanceSheetReportTableProps> = ({
  report,
}) => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">{report.ReportTitles[0]}</h2>
        <h3 className="text-gray-600 mb-4">{report.ReportTitles[1]}</h3>
        <h4 className="text-gray-500 mb-4">{report.ReportTitles[2]}</h4>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            {report.Rows.filter((row) => row.RowType === "Header").map(
              (row, index) => (
                <tr key={index} className="bg-gray-200">
                  {row.Cells?.map((cell, i) => (
                    <th
                      key={i}
                      className="border border-gray-300 px-4 py-2 text-left"
                    >
                      {cell.Value}
                    </th>
                  ))}
                </tr>
              )
            )}
          </thead>
          <tbody>
            {report.Rows.slice(1).map((section, sectionIndex) =>
              section.Rows && section.Rows.length > 0 ? (
                <React.Fragment key={sectionIndex}>
                  <tr className="bg-gray-100">
                    <td colSpan={3} className="py-2 px-4 font-bold border-b">
                      {section.Title}
                    </td>
                  </tr>
                  {section.Rows.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className={
                        row.RowType === "SummaryRow" ? "font-bold" : ""
                      }
                    >
                      {row.Cells &&
                        row.Cells.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="py-2 px-4 border-b border-r"
                          >
                            {cell.Value}
                          </td>
                        ))}
                    </tr>
                  ))}
                </React.Fragment>
              ) : null
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BalanceSheetReportTable;
