const Array = () => {
  const products = [
    { name: "Apple ", type: "Fruits" },
    { name: "arlic", type: "Vegetables" },
    { name: "Beef", type: "Meat" },

    { name: "Watermelon ", type: "Fruits" },
    { name: "Carrot", type: "Vegetables" },
    { name: "Mutton", type: "Meat" },

    { name: "Orange ", type: "Fruits" },
    { name: "Cauliflower", type: "Vegetables" },
    { name: "Chicken", type: "Meat" },

    { name: "Grape ", type: "Fruits" },
    { name: "Onions", type: "Vegetables" },
    { name: "Seafood", type: "Meat" },

    { name: "Mango", type: "Fruits" },
    { name: "Potato", type: "Vegetables" },
    { name: "egg", type: "Meat" },
  ];

  const Object = {
    Fruits: products.filter((obj) => obj.type === "Fruits"),
    Vegetables: products.filter((obj) => obj.type === "Vegetables"),
    Meat: products.filter((obj) => obj.type === "Meat"),
  };

  console.log(Object);

  return (
    <div>
      <p>Fruits : &nbsp; &nbsp;{JSON.stringify(Object.Fruits)}</p>
      <br />
      <p>Vegetables:&nbsp; &nbsp;{JSON.stringify(Object.Vegetables)}</p>
      <br />

      <p>Meat :&nbsp; &nbsp;{JSON.stringify(Object.Meat)} </p>
    </div>
  );
};

export default Array;
