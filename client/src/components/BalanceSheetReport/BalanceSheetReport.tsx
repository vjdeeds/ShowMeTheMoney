import React, { useEffect, useState } from "react";
import axios from "axios";
import BalanceSheetReportTable from "../BalaceSheetReportTable/BalanceSheetReportTable";
import { BalanceSheetItem } from "../../types/BalanceSheetItem";

const BalanceSheetReport = () => {
  const [data, setData] = useState<BalanceSheetItem | null>(null);

  useEffect(() => {
    axios
      .get("http://server:4000/api/balance-sheet")
      .then((response) => {
        setData(response.data.Reports[0]);
      })
      .catch((error) => console.error("Error fetching balance sheet:", error));
  }, []);

  return (
    <div>
      {data ? (
        <BalanceSheetReportTable report={data}></BalanceSheetReportTable>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BalanceSheetReport;
