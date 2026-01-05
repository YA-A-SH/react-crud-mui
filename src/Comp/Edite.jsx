import { Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

export default function EditePaper({
  showEdite,
  setShowEdite,
  rows,
  setRows,
  id,
}) {
  const [editData, setEditData] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("student")) || [];
    const Filtered = data.filter((r) => {
      return r.id && id !== undefined;
    });
    const editData = Filtered.find((r) => r.id === id);
    if (editData) setEditData(editData);
  }, [id]);

  // console.log("*****************************", editData.id);
  function handelCansel() {
    setShowEdite(false);
  }
  function handelEdite() {
    const updatedRows = rows.map((r) => {
      if (r.id === id) {
        return editData;
      } else {
        return r;
      }
    });
    setRows(updatedRows);
    setShowEdite(false);
    localStorage.setItem("student", JSON.stringify(updatedRows));
  }
  if (showEdite) {
    return (
      <div
        className="popup-overlay"
        onClick={() => setShowEdite(false)}
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
          className="Addpaper"
          elevation={7}
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="EditeText">Edite Student</h3>
          <p className="addDetailes">
            Please Note That Some Info Can't Be Edited
          </p>
          <TextField
            sx={{ width: "70%" }}
            required
            className="txtfield"
            variant="outlined"
            label="Enter Your First Name"
            disabled
            value={editData.firstName}
            onChange={(e) => {
              setEditData({ ...editData, firstName: e.target.value });
              console.log(editData);
            }}
            error={editData.firstName === "" ? true : false}
            helperText={
              editData.firstName === ""
                ? "Please Enter You'r First Name"
                : `Good Start For Him`
            }
          />
          <TextField
            required
            sx={{ width: "70%" }}
            className="txtfield"
            variant="outlined"
            label="Enter Your Last Name"
            disabled
            value={editData.lastName}
            onChange={(e) => {
              setEditData({ ...editData, lastName: e.target.value });
            }}
            error={editData.lastName === "" ? true : false}
            helperText={
              editData.lastName === ""
                ? "Please Enter You'r Last Name"
                : `Hola ${editData.firstName}`
            }
          />
          <TextField
            required
            sx={{ width: "70%" }}
            type="number"
            className="txtfield"
            variant="outlined"
            label="Enter Your Age"
            value={editData.age}
            onChange={(e) => {
              setEditData({ ...editData, age: e.target.value });
            }}
            error={
              editData.age === "" || editData.age > 100 || editData.age < 15
                ? true
                : false
            }
            helperText={
              editData.age === ""
                ? "Please Enter A Right Age"
                : editData.age > 100
                ? "Realy !? Your Age Is Like That Come On :( F*** Y**"
                : editData.age < 15
                ? "Go And Find Somthing Else To Do Boy"
                : "Letttttts Goooo "
            }
            // ||  ||
          />
          <TextField
            required
            sx={{ width: "70%" }}
            type="email"
            className="txtfield"
            variant="outlined"
            label="Enter Your Email"
            value={editData.email}
            onChange={(e) => {
              setEditData({ ...editData, email: e.target.value });
            }}
            error={
              editData.email === "" || !editData.email?.endsWith("@gmail.com")
            }
            helperText={
              editData.email === ""
                ? "Please enter your email"
                : !editData.email?.endsWith("@gmail.com")
                ? "Email must end with @gmail.com"
                : "Looks good!"
            }
          />
          <TextField
            required
            sx={{ width: "70%" }}
            type="number"
            className="txtfield"
            variant="outlined"
            label="Enter Your Phone"
            value={editData.phone}
            onChange={(e) => {
              setEditData({ ...editData, phone: e.target.value });
            }}
            error={
              !editData.phone ||
              editData.phone.length > 12 ||
              editData.phone.length < 9
            }
            helperText={
              !editData.phone ||
              editData.phone.length > 12 ||
              editData.phone.length < 9
                ? "Please Enter A Right Phone Number"
                : `Thanks ${editData.firstName}`
            }
          />
          <TextField
            required
            sx={{ width: "70%" }}
            className="txtfield"
            variant="outlined"
            label="Enter The Course Name"
            disabled
            value={editData.courseName}
            onChange={(e) => {
              setEditData({ ...editData, courseName: e.target.value });
            }}
            error={editData.courseName === "" ? true : false}
            helperText={
              editData.courseName === ""
                ? "Please Enter The Course Name"
                : `Wellcome To Our Course ${editData.firstName}`
            }
          />
          <TextField
            required
            sx={{ width: "70%" }}
            type="number"
            className="txtfield"
            variant="outlined"
            label="Enter Your Progress In The Course"
            value={editData.progress}
            onChange={(e) => {
              setEditData({ ...editData, progress: e.target.value });
            }}
            error={
              editData.progress === "" ||
              editData.progress < 0 ||
              editData.progress > 100
                ? true
                : false
            }
            helperText={
              editData.progress === "" ||
              editData.progress < 0 ||
              editData.progress > 100
                ? "Please Enter You'r Progress"
                : `Wellcome To Our Course ${editData.firstName}`
            }
          />
          <div className="addButton">
            <Button
              variant="contained"
              size="large"
              color="success"
              onClick={handelEdite}
            >
              {" "}
              Conform Edite
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
