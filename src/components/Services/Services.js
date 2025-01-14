import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./Services.less";
import ServiceCard from "../Card/ServiceCard";
import { Suspense } from "react";
import CardSkeleton from "../Skeleton/CardSkeleton";

const categories = [
  {
    name: "Food",
    key: "food",
    options: ["Italian", "Chinese", "Indian", "Mexican"],
    image:
      "https://www.eatingwell.com/thmb/088YHsNmHkUQ7iNGP4375MiAXOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_7866255_foods-you-should-eat-every-week-to-lose-weight_-04-d58e9c481bce4a29b47295baade4072d.jpg", // Replace with actual image path
    description: "Explore a variety of cuisines to tantalize your taste buds.",
  },
  {
    name: "Drinks",
    key: "drinks",
    options: ["Wine", "Cocktail", "Mocktail", "Juice"],
    image:
      "https://demitris.com/cdn/shop/articles/image1_eb503a8a-f1e9-4bb0-ac55-fd0942ae5c95.png?v=1648496730", // Should replace with our personal space location( AWS S3 maybe)
    description: "Find the perfect drink to complement your evening.",
  },
  {
    name: "Arts & Entertainment",
    key: "arts",
    options: ["Live Music", "Dance Performance", "Movie Screening", "Theater"],
    image:
      "https://lh6.googleusercontent.com/proxy/_SgZHWajwCLuwYQ_mTbmRUqs2BJC_EQs5FaCc36jF59285gOGlQ6jOgUJQiyu7MzSVo9FliLJ1b_HWBw_rj7wwm-sfHS69DVUhXDD5yhc0IE2HGzJfvJ0LqfnbqrkWar_oZNa9NHAWYeqt05tteueAutvmTzPRYPSmTJqf5rL1NkQA", // Replace with actual image path
    description: "Enjoy live performances and cultural experiences.",
  },
  {
    name: "Social Gatherings",
    key: "social",
    options: ["Dinner Party", "Picnic", "Game Night", "Barbecue"],
    image:
      "https://d3srkhfokg8sj0.cloudfront.net/wp-content/uploads/sites/669/0418_STD_SocialGathering_Feature.jpg", // Replace with actual image path
    description: "Host or join a gathering for a memorable experience.",
  },
  {
    name: "Parks & Recreation",
    key: "parks",
    options: ["Nature Walk", "Beach Visit", "Hiking", "Botanical Garden"],
    image: "https://www.gjcity.org/ImageRepository/Document?documentID=13492", // Replace with actual image path
    description: "Reconnect with nature through outdoor activities.",
  },
  {
    name: "Shopping",
    key: "shopping",
    options: ["Mall", "Boutique", "Online", "Street Market"],
    image:
      "https://www.cuddlynest.com/blog/wp-content/uploads/2022/08/shopping-in-san-francisco-scaled.jpg", // Replace with actual image path
    description: "Find the best places to shop for fashion, gadgets, and more.",
  },
];

const Services = () => {
  return (
    <Box
      sx={{
        display: "flex",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          height: "100%",
          backgroundColor: "F8F8FF",
        },
      }}
    >
      <Paper elevation={16}>
        <div className={"title-container"}>
          <h1>Our Services</h1>
          <span>Choose the best Service for your favorite activities</span>
        </div>
        <div className={"cards-container"}>
          {categories.map((category) => (
            <Suspense key={category.key} fallback={<CardSkeleton />}>
              <ServiceCard details={category} />
            </Suspense>
          ))}
        </div>
      </Paper>
    </Box>
  );
};

export default Services;
