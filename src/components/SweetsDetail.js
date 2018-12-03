import React from "react";
import { connect } from "react-redux";

const SweetsDetail = ({ sweets }) => {
  if (!sweets) {
    return <div>Select A sweets!</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {sweets.name} <br />
        price: {sweets.price}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { sweets: state.selectedsweets };
};

export default connect(mapStateToProps)(SweetsDetail);
