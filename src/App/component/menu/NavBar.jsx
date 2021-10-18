import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

import logo from "../../images/logo.png";
import avaterimg from "../../images/avater.png";
import AppModal from "../Modal";
import RouteLink from "../RouteLink";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: "20px",
    backgroundColor: "#171717",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(6),
      width: "100%",
    },
    boxShadow: "5px 5px 17px #101010, -5px -5px 17px #1e1e1e",
  },
  searchIcon: {
    padding: theme.spacing(0, 3),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: "13px",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(8)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
      flex: 1,
    },
  },
  sectionMobile: {
    display: "block",
    flex: 1,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  button: {
    backgroundColor: "#f1f1f1",
    color: "#333",
    outline: 0,
    padding: "0px 25px",
    margin: "0 15px",
    border: "1px solid #707070",
    fontSize: "16px",
    borderRadius: "15px",
    fontWeight: 500,
    cursor: "pointer",
    height: "35px",
    "&:hover": {
      color: "#fff",
    },
    [theme.breakpoints.down("md")]: {
      width: "50px",
      padding: "0px 15px",
      fontSize: "12px",
      margin: "0 8px",
    },
  },
  avater: {
    width: "40px",
    height: "40px",
    marginLeft: "30px",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0px",
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [show, setShow] = React.useState(false);

  return (
    <>
      <div className={classes.grow}>
        <AppBar
          position="static"
          style={{ backgroundColor: "transparent", paddingTop: "20px" }}
          elevation={0}
        >
          <Container
            style={{
              padding: 0,
              justifyContent: "space-between",
            }}
          >
            <Toolbar>
              <Link to="/">
                <img src={logo} alt="site-logo" style={{ width: "70px" }} />
              </Link>

              <div className={classes.sectionDesktop}>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon style={{ fontSize: "28px", color: "#fff" }} />
                  </div>
                  <InputBase
                    placeholder="Search by creators arts and collections"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
              </div>
              <div
                className={classes.sectionMobile}
                style={{ flex: 1, textAlign: "right" }}
              >
                <RouteLink to="/search">
                  <SearchIcon
                    style={{
                      fontSize: "48px",
                      margin: "0 0px 0 10px",
                      background: "#171717",
                      borderRadius: "50%",
                      padding: "10px",
                      color: "#fff",
                      boxShadow: "5px 5px 7px #101010, -5px -5px 7px #1e1e1e",
                    }}
                  />
                </RouteLink>
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <div
                  className={classes.sectionDesktop}
                  style={{ flex: "none" }}
                >
                  <Button
                    style={{
                      color: "#fff",
                      fontSize: "16px",
                      margin: "0 15px 0 15px",

                      outline: 0,
                      padding: "0px 25px",
                      textTransform: "capitalize",
                      border: "1px solid #fff",

                      borderRadius: "15px",
                      fontWeight: 500,
                      cursor: "pointer",
                      height: "35px",
                      minWidth: "175px",
                    }}
                    endIcon={<AccountBalanceWalletIcon />}
                  >
                    connect wallet
                  </Button>
                </div>

                <div className={classes.sectionMobile} style={{ flex: "none" }}>
                  <Button
                    style={{
                      color: "#fff",

                      margin: "0 5px 0 5px",

                      outline: 0,
                      padding: "0px 25px",
                      textTransform: "capitalize",
                      border: "1px solid #fff",
                      fontSize: "16px",
                      borderRadius: "15px",
                      fontWeight: 500,
                      cursor: "pointer",
                      height: "35px",
                      width: "30px",
                      minWidth: "30px",
                    }}
                  >
                    <AccountBalanceWalletIcon />
                  </Button>
                </div>

                <RouteLink to="/create">
                  <Button className={classes.button}>Create</Button>
                </RouteLink>
                <Button onClick={() => setShow(true)}>
                  <Avatar
                    alt="avater"
                    src={avaterimg}
                    className={classes.avater}
                  />
                </Button>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
      <AppModal showModal={show} setShow={setShow} />
    </>
  );
}
