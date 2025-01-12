import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import * as React from "react";
import BasicSelect from "../FormControls/Select/BasicSelect";

const ServiceCard = ({ details }) => {
  const { name, options, image, description } = details;

  return (
    <Card sx={{ maxWidth: 300, margin: "10px" }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt="Food" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <BasicSelect options={options} name={name} />
      </CardActions>
    </Card>
  );
};

export default ServiceCard;
