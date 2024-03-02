import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import MyCard from "./Card";
import useFetch from "../hooks/useFetch";

interface CardData {
  id: number;
  title?: string;
  score?: number;
  by?: string;
  time?: number;
  url?: string;
  descendants: number;
  kids: number[];
}

const bodyItem = (item: CardData) => {
  return (
    <>
      <Typography variant="body1">
        {item.score} points by {item.by} at {item.time}
      </Typography>
      <Typography variant="body1">{item.descendants} comments</Typography>
    </>
  );
};

const CardList = () => {
  const { data, loading, error } = useFetch("http://localhost:8000/api/v0/top");

  return (
    <Container
      maxWidth="xl"
      sx={{
        margin: "0 auto",
      }}
      disableGutters
    >
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data.map(
        (item: CardData) =>
          item.title && (
            <MyCard
              key={item.id}
              title={item.title || ""}
              body={bodyItem(item)}
              url={item.url || ""}
            />
          )
      )}
    </Container>
  );
};

export default CardList;
