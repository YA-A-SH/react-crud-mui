import { Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
export default function AddPaper(props) {
  const [email, setEmail] = useState("");
  const [data, setData] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phone: "",
    courseName: "",
    progress: "",
  });
  function handelCansel() {
    props.setShow(false);
  }

  useEffect(() => {
    const saveData = JSON.parse(localStorage.getItem("student"));
    if (saveData) {
      props.setRows(saveData);
    }
  }, []);
  function handelAdd() {
    const newData = { ...data, id: props.rows.length + 1 };
    const updatedRows = [...props.rows, newData];
    props.setRows(updatedRows);
    props.onSuccess();
    setData({
      id: 0,
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      phone: "",
      courseName: "",
      progress: "",
    });
    props.setShow(false);
    localStorage.setItem("student", JSON.stringify(updatedRows));
  }
  function isFormValid() {
    return (
      data.firstName !== "" &&
      data.lastName !== "" &&
      data.age !== "" &&
      data.age > 0 &&
      data.age <= 150 &&
      data.email !== "" &&
      data.phone !== "" &&
      data.phone.length >= 9 &&
      data.phone.length <= 12 &&
      data.courseName !== "" &&
      data.progress !== "" &&
      data.progress >= 0 &&
      data.progress <= 100
    );
  }

  // console.log(email.map)
  if (props.show) {
    return (
      <div
        className="popup-overlay"
        onClick={() => props.setShow(false)}
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
          sx={{ marginBottom: "30px" }}
        >
          <h3 className="addText">Add New Student</h3>
          <p className="addDetailes">
            Please Add This Details ( * ) Means Required
          </p>
          <TextField
            sx={{ width: "70%" }}
            required
            className="txtfield"
            variant="outlined"
            label="Enter Your First Name"
            value={data.firstName}
            onChange={(e) => {
              setData({ ...data, firstName: e.target.value });
            }}
            error={data.firstName === "" ? true : false}
            helperText={
              data.firstName === ""
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
            value={data.lastName}
            onChange={(e) => {
              setData({ ...data, lastName: e.target.value });
            }}
            error={data.lastName === "" ? true : false}
            helperText={
              data.lastName === ""
                ? "Please Enter You'r Last Name"
                : `Hola ${data.firstName}`
            }
          />
          <TextField
            required
            sx={{ width: "70%" }}
            type="number"
            className="txtfield"
            variant="outlined"
            label="Enter Your Age"
            value={data.age}
            onChange={(e) => {
              setData({ ...data, age: e.target.value });
            }}
            error={
              data.age === "" || data.age > 100 || data.age < 15 ? true : false
            }
            helperText={
              data.age === ""
                ? "Please Enter A Right Age"
                : data.age > 100
                ? "Realy !? Your Age Is Like That Come On :( F*** Y**"
                : data.age < 15
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
            value={data.email}
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
            error={data.email === "" || !data.email.endsWith("@gmail.com")}
            helperText={
              data.email === ""
                ? "Please enter your email"
                : !data.email.endsWith("@gmail.com")
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
            value={data.phone}
            onChange={(e) => {
              setData({ ...data, phone: e.target.value });
            }}
            error={
              data.phone === "" ||
              data.phone.length > 11 ||
              data.phone.length < 9
                ? true
                : false
            }
            helperText={
              data.phone === "" ||
              data.phone.length > 12 ||
              data.phone.length < 9
                ? "Please Enter A Right Phone Number"
                : `Thanks ${data.firstName}`
            }
          />
          <TextField
            required
            sx={{ width: "70%" }}
            className="txtfield"
            variant="outlined"
            label="Enter The Course Name"
            value={data.courseName}
            onChange={(e) => {
              setData({ ...data, courseName: e.target.value });
            }}
            error={data.courseName === "" ? true : false}
            helperText={
              data.courseName === ""
                ? "Please Enter The Course Name"
                : `Wellcome To Our Course ${data.firstName}`
            }
          />
          <TextField
            required
            sx={{ width: "70%" }}
            type="number"
            className="txtfield"
            variant="outlined"
            label="Enter Your Progress In The Course"
            value={data.progress}
            onChange={(e) => {
              setData({ ...data, progress: e.target.value });
            }}
            error={
              data.progress === "" || data.progress < 0 || data.progress > 100
                ? true
                : false
            }
            helperText={
              data.progress === "" || data.progress < 0 || data.progress > 100
                ? "Please Enter You'r Progress"
                : `Wellcome To Our Course ${data.firstName}`
            }
          />
          <div className="addButton">
            <Button
              variant="outlined"
              size="large"
              color="success"
              onClick={handelAdd}
              disabled={!isFormValid()}
            >
              {" "}
              Add Std
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
