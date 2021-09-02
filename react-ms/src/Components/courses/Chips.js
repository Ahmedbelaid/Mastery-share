import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    paddingTop: "3rem",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function SmallChips() {
  const classes = useStyles();
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <div className={classes.root}>
      <Chip
        size="small"
        avatar={<Avatar>M</Avatar>}
        label="Writing"
        onClick={handleClick}
      />
      <Chip
        size="small"
        avatar={<Avatar>M</Avatar>}
        label="Business"
        onClick={handleClick}
      />
      <Chip
        size="small"
        avatar={<Avatar>M</Avatar>}
        label="Music"
        onClick={handleClick}
      />
      <Chip
        size="small"
        avatar={<Avatar>M</Avatar>}
        label="Sports/Gaming"
        onClick={handleClick}
      />
      <Chip
        size="small"
        avatar={<Avatar>M</Avatar>}
        label="Community/goverment"
        onClick={handleClick}
      />
      <Chip
        size="small"
        avatar={<Avatar>M</Avatar>}
        label="Home/Lifestyle"
        onClick={handleClick}
      />
      <Chip
        size="small"
        avatar={<Avatar>M</Avatar>}
        label="Design/Style"
        onClick={handleClick}
      />
      <Chip
        size="small"
        avatar={<Avatar>M</Avatar>}
        label="Science/tech"
        onClick={handleClick}
      />
    </div>
  );
}
