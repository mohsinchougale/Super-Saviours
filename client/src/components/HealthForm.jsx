import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  table: {
    minWidth: 650,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function HealthForm() {
  const [healthdetails, setHealthDetails] = useState({});
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const ageRef = useRef();
  const genderRef = useRef("");
  const weightRef = useRef();
  const heightRef = useRef();
  const neckRef = useRef();
  const waistRef = useRef();
  const hipRef = useRef();
  const paperStyle = {
    padding: 20,
    height: "88vh",
    width: 300,
    margin: "15px auto",
  };

  const btnstyle = { margin: "7px 12px" };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const showModal = () => {
    console.log(
      ageRef.current.value,
      genderRef.current.value,
      weightRef.current.value,
      heightRef.current.value,
      neckRef.current.value,
      waistRef.current.value,
      hipRef.current.value
    );
    var options = {
      method: "GET",
      url: "https://fitness-calculator.p.rapidapi.com/bodyfat",
      params: {
        age: ageRef.current.value,
        gender: genderRef.current.value,
        weight: weightRef.current.value,
        height: heightRef.current.value,
        neck: neckRef.current.value,
        waist: waistRef.current.value,
        hip: hipRef.current.value,
      },
      headers: {
        "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
        "x-rapidapi-key": "93a91c5481msh60191a114918ae1p137fa6jsn3b0d190e144d",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.data);
        setHealthDetails(response.data.data);
        setOpen(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle} className={classes.root}>
          <Grid align="center">
            <h2>Health Details</h2>
          </Grid>
          <TextField
            id="outlined-basic"
            label="age"
            variant="outlined"
            required
            inputRef={ageRef}
          />
          <TextField
            id="outlined-basic"
            label="gender"
            variant="outlined"
            required
            inputRef={genderRef}
          />
          <TextField
            id="outlined-basic"
            label="weight(in kg)"
            variant="outlined"
            required
            inputRef={weightRef}
          />
          <TextField
            id="outlined-basic"
            label="height(in cm)"
            variant="outlined"
            required
            inputRef={heightRef}
          />
          <TextField
            id="outlined-basic"
            label="neck(in cm)"
            variant="outlined"
            required
            inputRef={neckRef}
          />
          <TextField
            id="outlined-basic"
            label="waist(in cm)"
            variant="outlined"
            required
            inputRef={waistRef}
          />
          <TextField
            id="outlined-basic"
            label="hip(in cm)"
            variant="outlined"
            required
            inputRef={hipRef}
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={showModal}
          >
            BMI Calculator
          </Button>
        </Paper>
      </Grid>

      {open && (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Your health details</h2>
              <TableContainer component={Paper}>
                <Table
                  className={classes.table}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Body Fat (U.S. Navy Method)</TableCell>
                      <TableCell align="right">Body Fat Category</TableCell>
                      <TableCell align="right">Body Fat Mass</TableCell>
                      <TableCell align="right">Lean Body Mass</TableCell>
                      <TableCell align="right">Body Fat (BMI method)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {healthdetails["Body Fat (U.S. Navy Method)"]}
                      </TableCell>
                      <TableCell align="right">
                        {healthdetails["Body Fat Category"]}
                      </TableCell>
                      <TableCell align="right">
                        {healthdetails["Body Fat Mass"]}
                      </TableCell>
                      <TableCell align="right">
                        {healthdetails["Lean Body Mass"]}
                      </TableCell>
                      <TableCell align="right">
                        {healthdetails["Body Fat (BMI method)"]}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Fade>
        </Modal>
      )}
    </div>
  );
}
