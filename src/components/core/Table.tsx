import { DataGrid, GridColDef, DataGridProps } from "@mui/x-data-grid";
import Loading from "./Loading";

interface Props {
  apiRef?: DataGridProps["apiRef"];
  columns?: GridColDef[];
  rows?: any[];
}

function Table({ apiRef, columns, rows }: Props) {
  const loading = !apiRef || !columns || !rows;

  return loading ? (
    <Loading message="Loading Table Content..." />
  ) : (
    <DataGrid
      pagination
      autoPageSize
      apiRef={apiRef}
      rows={rows}
      columns={columns}
      checkboxSelection
    />
  );
}

export default Table;
