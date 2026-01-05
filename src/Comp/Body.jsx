import AddPaper from "./AddPaper";
import Alert from "@mui/material/Alert";
import Tabel from "./TabelBody";
import { useState } from "react";

export default function Body({ show, setShow }) {
  const [rows, setRows] = useState([]);
  const [alertOpen, setAlertOpen] = useState(false);

  function handleShowAlert() {
    setAlertOpen(true);
    setTimeout(() => {
      setAlertOpen(false);
    }, 5000);
  }
  // console.log(rows[0].id);
  return (
    <div className="body">
      <Tabel rows={rows} setRows={setRows} />
      {alertOpen && (
        <Alert className="alert" severity="success">
          Done! The student has been added
        </Alert>
      )}

      <AddPaper
        show={show}
        setShow={setShow}
        rows={rows}
        setRows={setRows}
        onSuccess={handleShowAlert}
      />
    </div>
  );
}
