import React, { useState, useEffect } from "react";
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
import CircularProgress from "@material-ui/core/CircularProgress";

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

const baseURL = "http://localhost:5000/police";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Police = () => {
  const [policeStations, setPoliceStations] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [loading, setLoading] = useState(false);
  let pos;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        getPoliceStations();
      });
    }
  }, []);

  const getPoliceStations = async () => {
    await axios.get(`${baseURL}/${pos?.lat}/${pos?.lng}`).then((res) => {
      setPoliceStations(res.data.results);
    });
    console.log(policeStations);
  };

  const getInfo = async (placeId) => {
    await axios
      .post(`http://localhost:5000/hospital/number/${placeId}`)
      .then((res) => {
        if (res.data.result.formatted_phone_number === undefined) {
          setNumbers((numbers) => numbers.concat("Number not available"));
        } else {
          setNumbers((numbers) =>
            numbers.concat(res.data.result.formatted_phone_number)
          );
        }
      });
  };

  const getNumbers = () => {
    for (var i = 0; i < 10; i++) {
      getInfo(policeStations[i].place_id);
    }
  };

  const classes = useStyles();

  return (
    <div>
      {/* <button onClick={getNumbers}>Get Numbers</button> */}
      <Button
        variant="contained"
        color="primary"
        onClick={getNumbers}
        style={{ marginLeft: "200px", marginTop: "5px", marginBottom: "20px" }}
      >
        Get Numbers
      </Button>

      {/* <div className="display__policeStaions">
        {policeStations
          .filter((policeStation, index) => index < 10)
          .map((policeStation) => (
            <li key={policeStation.place_id}>{policeStation.name}</li>
          ))}
      </div>
      <div>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </div>
    </div> */}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="left">
                Police Station's Name
              </StyledTableCell>
              <StyledTableCell align="left">Helpline Number</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {policeStations
              .filter((policeStation, ind) => ind < 10)
              .map((policeStation, ind) => (
                <StyledTableRow key={policeStation.place_id}>
                  <StyledTableCell component="th" scope="row">
                    {ind + 1}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {policeStation.name}
                  </StyledTableCell>
                  {numbers && (
                    <StyledTableCell align="left">
                      {numbers[ind]}
                    </StyledTableCell>
                  )}
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {loading && <CircularProgress />}
    </div>
  );
};

export default Police;
