import { DataTable } from "../../organisms";
import { Heading } from "../../atoms";
import Container from "@mui/material/Container";
import data from "../../../locale/en.json";

export default function TableSection() {
  const columns = [
    {
      id: data.PICTURE_COLUMN_ID,
      numeric: false,
      label: data.PICTURE_COLUMN_LABEL,
      width: data.PICTURE_COLUMN_WIDTH,
    },
    {
      id: data.TITLE_COLUMN_ID,
      numeric: false,
      label: data.TITLE_COLUMN_LABEL,
    },
    {
      id: data.TITLE_COLUMN_ID,
      numeric: true,
      label: data.ALBUM_COLUMN_LABEL,
    },
  ];
  return (
    <Container>
      <Heading />
      <DataTable columns={columns} />
    </Container>
  );
}
