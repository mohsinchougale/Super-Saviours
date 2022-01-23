import React, { useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import Loader from "react-js-loader";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const baseURL = "http://localhost:5000/hospital";
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  let pos;

  const getHospitals = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    }

    axios.get(`${baseURL}/${pos.lat}/${pos.lng}`).then((res) => {
      setHospitals(res.data.results);
    });
    console.log(hospitals);
  };

  const classes = useStyles();
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={getHospitals}
        style={{ marginLeft: "725px", marginTop: "5px", marginBottom: "20px" }}
      >
        Send SOS
      </Button>
      {/* <div className="display__hospitals">
        {hospitals.map((hospital) => (
          <li key={hospital.place_id}>{hospital.name}</li>
        ))}
      </div> */}

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="left">Hospital Name</StyledTableCell>
              {/* <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {hospitals.map((hospital, ind) => (
              <StyledTableRow key={hospital.place_id}>
                <StyledTableCell component="th" scope="row">
                  {ind + 1}
                </StyledTableCell>
                <StyledTableCell align="left">{hospital.name}</StyledTableCell>
                {/* <StyledTableCell align="right">{row.fat}</StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Hospitals;
