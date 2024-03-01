import { FC, useEffect, useState } from "react";
import Card from "./Card";

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

const CardList: FC<CardData> = () => {
  const [cards, setCards] = useState([]);

  // fetch data from API and set it to the cards state
  useEffect(() => {
    fetch("http://localhost:8000/api/v0/top")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {cards.map((card: CardData) => {
        return ( card.title &&
          <Card
            key={card.id}
            title={card.title}
            body={card.by}
            url={card.url}
          />
        );
      })}
    </div>
  );
};

export default CardList;
