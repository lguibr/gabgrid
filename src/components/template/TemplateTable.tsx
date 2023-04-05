import React, { useEffect } from "react";
import { useLocalStorageState } from "../../contexts/useLocalStorage";
import Table from "../core/Table";
import { GridColDef } from "@mui/x-data-grid";
import { GridApiCommunity } from "@mui/x-data-grid/models/api/gridApiCommunity";
import { Template } from "../../utils/types";

interface Props {
  tableRef: React.MutableRefObject<GridApiCommunity> | undefined;
}

function TemplateTable({ tableRef }: Props) {
  const { data } = useLocalStorageState();

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 150 },
    { field: "description", headerName: "Description", flex: 1 },
  ];

  const rows: Template[] = [
    // Replace the following lines with your actual data
    {
      id: 1,
      title: "Template 1",
      description: "This is a template",
      messages: [
        { role: "user", content: "Hello" },
        { role: "assistant", content: "Hi there!" },
      ],
    },
    {
      id: 2,
      title: "Template 2",
      description: "This is another template",
      messages: [
        { role: "user", content: "How are you?" },
        { role: "assistant", content: "I'm doing great, thank you!" },
      ],
    },
  ];

  useEffect(() => {
    console.log({ data });
  }, [data]);

  return <Table apiRef={tableRef} rows={rows} columns={columns} />;
}

export default TemplateTable;
