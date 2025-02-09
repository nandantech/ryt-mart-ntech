import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import * as React from "react";
import BasicSelect from "../FormControls/Select/BasicSelect";
import CardSkeleton from "../Skeleton/CardSkeleton";

const ServiceCard = ({ details }) => {
  const { name, options, image, description } = details;

  const [showCard, setShowCard] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowCard(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!showCard) {
    //TODO: Line 14-27 is for loader testing, should be removed when integrated with redux/backend apis
    return <CardSkeleton />;
  }

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
