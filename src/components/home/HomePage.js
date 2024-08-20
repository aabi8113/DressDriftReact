import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemList from "../itemList/ItemList";

function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://dress-drift-backend.vercel.app/api/dresses/all');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <section>
      <ItemList items={items} />
    </section>
  );
}

export default HomePage;
