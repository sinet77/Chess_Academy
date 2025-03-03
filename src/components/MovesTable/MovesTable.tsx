import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import * as style from "./MovesTable.style";

type MovePair = {
  white: string;
  black: string;
};
type MovesTableProps = {
  history: MovePair[];
};

export const MovesTable = ({ history }: MovesTableProps) => {
  return (
    <>
      <Typography sx={style.TableTitle}>Moves history:</Typography>
      <TableContainer sx={style.Table} component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={style.MainRow}>
              <TableCell sx={style.moveColumn}>Move</TableCell>
              <TableCell sx={style.WhiteAndBlackColumn}>White</TableCell>
              <TableCell sx={style.WhiteAndBlackColumn}>Black</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {history.map((move, index) => (
              <TableRow key={index}>
                <TableCell sx={style.moveColumn}>{index + 1}</TableCell>
                <TableCell sx={style.WhiteAndBlackColumn}>
                  {move.white}
                </TableCell>
                <TableCell sx={style.WhiteAndBlackColumn}>
                  {move.black}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
