import React from "react";
import FullpageSlider from "./Creativecarousel/FullpageSlider";
import fullpageOptions from "./Creativecarousel/fullpageConfig";

export const Creativecarousel = () => {
  return (
    <FullpageSlider
      // isFooterOpen={this.state.isFooterOpen}
      // hide={this.hide}
      // show={this.show}
      {...fullpageOptions}
    />
  );
};
