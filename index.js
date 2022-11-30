const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();
  
app.get("/outfit", (req, res) => {
  const shirts = ["Navy", "Black", "White", "Green"];
  const pants = ["Gray", "Black", "Blue", "Plaid"];
  const shoes = ["Brown", "Black", "Sperrys", "Chucks" ];

  res.json({
    shirts: _.sample(shirts),
    pants: _.sample(pants),
    shoes: _.sample(shoes)
  });
})

app.listen(3000, () => console.log("API Server is running..."));


