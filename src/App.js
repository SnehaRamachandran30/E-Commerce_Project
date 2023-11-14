import "./styles.css";
import Sizes from "./component/sizes";
import { useState, useEffect } from "react";
import Displaydress from "./component/displaydress";
import Head from "./component/header";

function App() {
  let d = [
    {
      id: 1,
      size: "XS",
      type: "Full Gown",
      color: "Red",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJlc3N8ZW58MHx8MHx8fDA%3D",
      price: "$10"
    },
    {
      id: 2,
      size: "XS",
      type: "Mini Skirt",
      color: "White",
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRyZXNzfGVufDB8fDB8fHww",
      price: "$8"
    },
    {
      id: 3,
      size: "S",
      type: "Long Gown",
      color: "Green",
      image:
        "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRyZXNzfGVufDB8fDB8fHww",
      price: "$9"
    },
    {
      id: 4,
      size: "S",
      type: "Floral Long Sleevles Gown",
      color: "Green",
      image:
        "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGRyZXNzfGVufDB8fDB8fHww",
      price: "$9"
    },
    {
      id: 5,
      size: "S",
      type: "Party Wear Mini Skirt",
      color: "Silver",
      image:
        "https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRyZXNzfGVufDB8fDB8fHww",
      price: "$11"
    },
    {
      id: 6,
      size: "L",
      type: "Jumpsuit",
      color: "Blue",
      image:
        "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGRyZXNzfGVufDB8fDB8fHww",
      price: "$10"
    },
    {
      id: 7,
      size: "L",
      type: "Over Coat and Pant",
      color: "Black",
      image:
        "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGRyZXNzfGVufDB8fDB8fHww",
      price: "$10"
    },
    {
      id: 8,
      size: "XL",
      type: "Floral Skirt",
      color: "NavyBlue",
      image:
        "https://images.unsplash.com/photo-1600102427329-d5b2cde7e162?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGRyZXNzfGVufDB8fDB8fHww",
      price: "$10"
    },
    {
      id: 9,
      size: "XL",
      type: "T-Shirt",
      color: "LightBlue",
      image:
        "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGRyZXNzfGVufDB8fDB8fHww",
      price: "$5"
    },
    {
      id: 10,
      size: "M",
      type: "Skirt",
      color: "White",
      image:
        "https://images.unsplash.com/photo-1600096194430-6abeb891abab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxkcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
      price: "$10"
    },
    {
      id: 11,
      size: "XXL",
      type: "Long Gown with Opening",
      color: "Pink",
      image:
        "https://images.unsplash.com/photo-1559629008-529e95644695?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxkcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
      price: "$12"
    },
    {
      id: 12,
      size: "XXL",
      type: "Jumpsuit",
      color: "Peach",
      image:
        "https://images.unsplash.com/flagged/photo-1571130923385-6f6cbaca2ff1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkyfHxkcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
      price: "$10"
    },
    {
      id: 13,
      size: "XXL",
      type: "Mini Skirt",
      color: "White and Black",
      image:
        "https://images.unsplash.com/photo-1589150339379-edfb6f86b7b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE4fHxkcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
      price: "$12"
    }
  ];
  let [dresses, setdress] = useState(d);

  /* const select = (e) => {
    let a = e.target.value;
    let b = dresses.filter((c) => c.size === a);
    console.log(b);
    dresses = b;
    dresses = d;
  }; */
  function select(e) {
    let a = e.target.value;
    /* let b = [];
    for (let i = 0; i < dresses.length; i++) {
      if (a === dresses[i].size) {
        b.push(dresses[i]);
      }
    } */
    setdress(d.filter((c) => c.size === a));
  }
  let c = 0;
  const [count, setcount] = useState(c);
  function counts() {
    setcount(count + 1);
  }
  return (
    <div className="App">
      <Head count={count} />
      <div id="app">
        <Sizes select={select} />
        <Displaydress dresses={dresses} counts={counts} />
      </div>
    </div>
  );
}

export default App;
