import {
  Button,
  InputAdornment,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { useState } from "react";

import inputImg from "../../images/img-input.png";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "500px",
    backgroundColor: "#171717",
    borderRadius: "15px",
    margin: "40px auto 20px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0px 0",
    boxShadow: "5px 5px 7px #101010, -5px -5px 7px #1e1e1e",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  inputBox: {
    margin: "10px 0",
    color: "gray",
  },
  button: {
    backgroundColor: "#FF9C00",
    color: "#fff",
    outline: 0,
    padding: "5px 20px",
    minWidth: "200px",
    border: 0,

    borderRadius: "50px",
    fontWeight: 500,
    cursor: "pointer",
    fontSize: "16px",
    display: "block",
    margin: "30px auto",
  },
}));
const Create = () => {
  const classes = useStyles();
  const [imageUrl, setImageUrl] = useState(null);
  return (
    <div className={classes.box}>
      <input
        type="file"
        name="image"
        id="image"
        accept="image/*"
        style={{ visibility: "hidden" }}
        onChange={(e) => setImageUrl(URL.createObjectURL(e.target.files[0]))}
      />
      <label for="image">
        <div
          style={{
            width: "300px",
            height: "220px",
            borderRadius: "15px",
            border: "2px solid #878787",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            overflow: "hidden",
          }}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="input" style={{ width: "100%" }} />
          ) : (
            <>
              <span
                style={{
                  color: "#FF9C00",
                  fontSize: "18px",
                  margin: "0 10px 0 0 ",
                }}
              >
                Choose File
              </span>
              <img src={inputImg} alt="input" style={{ width: "40px" }} />
            </>
          )}
        </div>
      </label>

      <div style={{ width: "300px", marginTop: "30px" }}>
        <TextField
          id="standard-basic"
          label="NFT Name"
          fullWidth
          className={classes.inputBox}
        />
        <TextField
          id="standard-basic"
          label="NFT Description"
          fullWidth
          multiline
          rows={4}
          className={classes.inputBox}
        />
        <TextField
          id="standard-basic"
          label="NFT Price"
          fullWidth
          className={classes.inputBox}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" style={{ color: "#fff" }}>
                BNB
              </InputAdornment>
            ),
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px 0",
          }}
        >
          <p style={{ fontSize: "14px", color: "gray", margin: 0 }}>
            Service Fee
          </p>
          <p style={{ fontSize: "14px", color: "gray", margin: 0 }}>2.5%</p>
        </div>
        <p style={{ fontSize: "14px", color: "gray", margin: 0 }}>
          You will receive
        </p>
        <Button className={classes.button}>Approve</Button>
      </div>
    </div>
  );
};

export default Create;
