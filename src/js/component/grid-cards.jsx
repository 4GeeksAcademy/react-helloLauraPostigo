import React from "react";
import Card from "./card";

const GridCards = () => {
    return(
        <div class="container text-center">
  <div class="row">
    <div class="col">
      <Card />
    </div>
    <div class="col">
    <Card />
    </div>
    <div class="col">
    <Card />
    </div>
    <div class="col">
    <Card />
    </div>
  </div>
</div>
    )
}

export default GridCards;