import { Button, Container, makeStyles } from "@material-ui/core";
import { useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import exploreImg from "../../images/explore.png";
import nftImage1 from "../../images/group3.png";
import nftImage2 from "../../images/group4.png";
import nftImage3 from "../../images/group5.png";
import AppModal2 from "../Modal2";
import Card from "./Card";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#f1f1f1",
    color: "#333",
    outline: 0,
    padding: "0px 15px 0px 15px",
    margin: "10px 30px 10px 0",

    border: "1px solid #707070",
    fontSize: "16px",
    borderRadius: "15px",
    fontWeight: 500,
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
    flex: 1,
  },
  lbutton: {
    backgroundColor: "#f1f1f1",
    color: "#333",
    outline: 0,
    padding: "0px 15px 0px 15px",

    border: "1px solid #707070",
    fontSize: "16px",
    borderRadius: "15px",
    fontWeight: 500,
    cursor: "pointer",

    display: "block",
    margin: "auto",
    marginTop: "30px",
    "&:hover": {
      color: "#fff",
    },
  },
  card: {
    width: "250px",
    height: "280px",
    border: "2px solid #FF9C00",
    borderRadius: "25px",
    backgroundColor: "#fff",
    margin: "15px 15px 15px 0",
  },
}));

const Explore = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  return (
    <section style={{ padding: "50px 0 50px 0" }}>
      <Container>
        <div
          style={{
            borderBottom: "2px solid #2B2B2B",
            paddingBottom: "15px",
            position: "relative",
          }}
        >
          <h3
            style={{
              display: "inline-block",
              fontSize: "24px",
              color: "#fff",
              margin: "0 30px 0 0",
              lineHeight: 1.8,
              paddingBottom: "10px",
            }}
          >
            Explore
          </h3>
          <div style={{ paddingRight: "60px" }}>
            <ScrollMenu>
              <Button className={classes.button}>Category</Button>
              <Button className={classes.button}>Category</Button>
              <Button className={classes.button}>Category</Button>
              <Button className={classes.button}>Category</Button>
              <Button className={classes.button}>Category</Button>
            </ScrollMenu>
          </div>

          <Button
            style={{
              position: "absolute",
              right: 0,
              top: "46%",
              width: "45px",
              zIndex: 1,
              backgroundColor: "#131313",
            }}
            onClick={() => setShow(true)}
          >
            <img src={exploreImg} alt="explore" style={{ width: "50px" }} />
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexFlow: "wrap",
            flex: "0 1 auto",
            justifyContent: "center",
            marginTop: "30px",
            width: "100%",
          }}
        >
          <Card
            title="Tomi anime name"
            img={nftImage1}
            price={{ bnb: 0.03, dollar: 103 }}
          />
          <Card
            title="Tomi anime name"
            img={nftImage2}
            price={{ bnb: 0.03, dollar: 103 }}
          />
          <Card
            title="Tomi anime name"
            img={nftImage3}
            price={{ bnb: 0.03, dollar: 103 }}
          />
          <Card
            title="Tomi anime name"
            img={nftImage1}
            price={{ bnb: 0.03, dollar: 103 }}
          />
          <Card
            title="Tomi anime name"
            img={nftImage2}
            price={{ bnb: 0.03, dollar: 103 }}
          />
          <Card
            title="Tomi anime name"
            img={nftImage3}
            price={{ bnb: 0.03, dollar: 103 }}
          />
          <Card
            title="Tomi anime name"
            img={nftImage3}
            price={{ bnb: 0.03, dollar: 103 }}
          />
          <Card
            title="Tomi anime name"
            img={nftImage1}
            price={{ bnb: 0.03, dollar: 103 }}
          />
          <Card
            title="Tomi anime name"
            img={nftImage2}
            price={{ bnb: 0.03, dollar: 103 }}
          />
          <Card
            title="Tomi anime name"
            img={nftImage1}
            price={{ bnb: 0.03, dollar: 103 }}
          />
          <Card
            title="Tomi anime name"
            img={nftImage3}
            price={{ bnb: 0.03, dollar: 103 }}
          />
          <Card
            title="Tomi anime name"
            img={nftImage2}
            price={{ bnb: 0.03, dollar: 103 }}
          />
        </div>
        <Button className={classes.lbutton}>Load more</Button>
      </Container>
      <AppModal2 setShow={setShow} showModal={show} />
    </section>
  );
};

export default Explore;
