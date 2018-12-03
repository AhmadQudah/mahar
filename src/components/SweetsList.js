import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSweets } from "../actions";

class SweetsList extends Component {
  renderList() {
    return this.props.sweets.map(sweet => {
      return (
        <div className="item" key={sweet.name}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSweets(sweet)}
            >
              select
            </button>
          </div>
          <div className="content">{sweet.name}</div>
        </div>
      );
    });
  }

  render() {
    //this.props === {sweets: state.props}
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { sweet: state.sweet };
};

export default connect(
  mapStateToProps,
  { selectSweets }
)(SweetsList);
