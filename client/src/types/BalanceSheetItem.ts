// export interface BalanceSheetItem {
//   date: string;
//   totalAssets: number;
//   totalLiabilities: number;
//   totalEquity: number;
// }

interface Cell {
  Value: string;
  Attributes?: { Value: string; Id: string }[];
}

interface Row {
  RowType: string;
  Title?: string;
  Cells?: Cell[];
  Rows?: Row[];
}

export interface BalanceSheetItem {
  ReportID: string;
  ReportName: string;
  ReportType: string;
  ReportTitles: string[];
  ReportDate: string;
  UpdatedDateUTC: string;
  Fields: string[];
  Rows: Row[];
}
