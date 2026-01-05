import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import LinearProgress from "@mui/material/LinearProgress";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import EditePaper from "./Edite";
import DeletePaper from "./Delete";

export default function Tabel({ rows, setRows }) {
  const [idForEdite, setIdForEdite] = useState("");
  const [showEdite, setShowEdite] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortId, setSortId] = useState("asc");
  const [sortAge, setSortAge] = useState("asc");
  const [sortProgress, setSortProgress] = useState("asc");

  function handleProgressSort() {
    const sortedRows = [...rows].sort((a, b) => {
      if (a.progress < b.progress) return sortProgress === "asc" ? 1 : -1;
      if (a.progress > b.progress) return sortProgress === "asc" ? -1 : 1;
      return 0;
    });
    setSortProgress(sortProgress === "asc" ? "desc" : "asc");
    setRows(sortedRows);
  }

  const handleSortByFirstName = () => {
    const sortedRows = [...rows].sort((a, b) => {
      if (a.firstName.toLowerCase() < b.firstName.toLowerCase())
        return sortOrder === "asc" ? 1 : -1;
      if (a.firstName.toLowerCase() > b.firstName.toLowerCase())
        return sortOrder === "asc" ? -1 : 1;
      return 0;
    });

    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setRows(sortedRows);
  };

  function haneldIdSorting() {
    const sortedRows = [...rows].sort((a, b) => {
      if (a.id < b.id) {
        return sortId === "asc" ? 1 : -1;
      }
      if (a.id > b.id) {
        return sortId === "asc" ? -1 : 1;
      }
    });
    setSortId(sortId === "asc" ? "desc" : "asc");
    setRows(sortedRows);
  }

  function handleAgeSort() {
    const RowsCopy = [...rows].sort((a, b) => {
      if (a.age < b.age) return sortAge === "asc" ? 1 : -1;
      if (a.age > b.age) return sortAge === "asc" ? -1 : 1;
      return 0;
    });
    setSortAge(sortAge === "asc" ? "desc" : "asc");
    setRows(RowsCopy);
  }
  return (
    <TableContainer
      component={Paper}
      sx={{ overflow: "auto", maxHeight: "500px" }}
    >
      <Table sx={{ minWidth: "1000px" }} size="small">
        <TableHead>
          <TableRow>
            <TableCell
              className="th"
              sx={{ cursor: "pointer", userSelect: "none" }}
              onClick={haneldIdSorting}
            >
              ID {sortId === "asc" ? "▲" : "▼"}
            </TableCell>

            <TableCell
              className="th"
              align="center"
              sx={{ cursor: "pointer", userSelect: "none" }}
              onClick={handleSortByFirstName}
            >
              First Name {sortOrder === "asc" ? "▲" : "▼"}
            </TableCell>

            <TableCell className="th" align="center">
              Last Name
            </TableCell>
            <TableCell
              className="th"
              align="center"
              sx={{ cursor: "pointer", userSelect: "none" }}
              onClick={handleAgeSort}
            >
              Age {sortAge === "asc" ? "▼" : "▲"}
            </TableCell>
            <TableCell className="th" align="center">
              Email
            </TableCell>
            <TableCell className="th" align="center">
              Phone
            </TableCell>
            <TableCell className="th" align="center">
              Course Name
            </TableCell>
            <TableCell
              className="th"
              align="center"
              sx={{ cursor: "pointer", userSelect: "none" }}
              onClick={handleProgressSort}
            >
              Progress {sortProgress === "asc" ? "▼" : "▲"}
            </TableCell>
            <TableCell className="th" align="center">
              Update
            </TableCell>
            <TableCell className="th" align="center">
              Delete
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="td">{row.id}</TableCell>
              <TableCell className="td" align="center">
                {row.firstName}
              </TableCell>
              <TableCell className="td" align="center">
                {row.lastName}
              </TableCell>
              <TableCell className="td" align="center">
                {row.age}
              </TableCell>
              <TableCell className="td" align="center">
                {row.email}
              </TableCell>
              <TableCell className="td" align="center">
                {row.phone}
              </TableCell>
              <TableCell className="td" align="center">
                {row.courseName}
              </TableCell>
              <TableCell className="td" align="center">
                <LinearProgress variant="determinate" value={row.progress} />
                {`${row.progress}%`}
              </TableCell>
              <TableCell
                className="td"
                align="center"
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    "& .MuiSvgIcon-root": { color: "white" },
                  },
                }}
                onClick={() => {
                  setIdForEdite(row.id);
                  setShowEdite(true);
                }}
              >
                <EditIcon color="primary" />
              </TableCell>
              <TableCell
                className="td"
                align="center"
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "warning.main",
                    "& .MuiSvgIcon-root": { color: "white" },
                  },
                }}
                onClick={() => {
                  setIdForEdite(row.id);
                  setShowDelete(true);
                }}
              >
                <ClearIcon color="warning" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <EditePaper
        showEdite={showEdite}
        setShowEdite={setShowEdite}
        rows={rows}
        setRows={setRows}
        id={idForEdite}
      />
      <DeletePaper
        showDelete={showDelete}
        setShowDelete={setShowDelete}
        rows={rows}
        setRows={setRows}
        id={idForEdite}
      />
    </TableContainer>
  );
}
