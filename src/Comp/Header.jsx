import { Typography } from "@mui/material";

export default function Header() {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* <h1 className="theTitle">YA-SOURCE</h1>  */}
      <Typography color="primary" sx={{ fontSize: "65px", margin: "26px" }}>
        {" "}
        YA-SOURCE{" "}
      </Typography>
    </div>
  );
}
