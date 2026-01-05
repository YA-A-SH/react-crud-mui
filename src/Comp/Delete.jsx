import { Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

export default function DeletePaper({
  showDelete,
  setShowDelete,
  rows,
  setRows,
  id,
}) {
  const [editData, setEditData] = useState([]);
  const [std, setStd] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("student"));
    if (data) {
      const Filtered = data.filter((r) => {
        return r.id && id !== undefined;
      });

      const editData = Filtered.find((r) => r.id === id);
      setStd(editData);
      const delFilter = Filtered.filter((r) => {
        return r.id !== id;
      });

      setEditData(delFilter);
    }
  }, [id]);

  console.log("*****************************", editData);
  function handelCansel() {
    setShowDelete(false);
  }
  function handelDelete() {
    setRows(editData);
    setShowDelete(false);
    localStorage.setItem("student", JSON.stringify(editData));
  }
  if (showDelete) {
    return (
      <div
        className="popup-overlay"
        onClick={() => setShowDelete(false)}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 999,
        }}
      >
        <Paper
          className="delPaper"
          elevation={7}
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="delText">Delete A Student</h3>
          <div className="delDetailes">
            You Can't Get (
            <p className="theName">
              {`${std?.firstName || ""}-${std?.lastName || ""}`}
            </p>
            ) Back After Delete Are You Sure ???
          </div>

          <div className="addButton">
            <Button
              variant="contained"
              size="large"
              color="warning"
              onClick={handelDelete}
            >
              {" "}
              Conform Delete
            </Button>
            <Button
              variant="outlined"
              color="error"
              size="large"
              onClick={handelCansel}
            >
              {" "}
              Cansel
            </Button>
          </div>
        </Paper>
      </div>
    );
  } else {
    return null;
  }
}
