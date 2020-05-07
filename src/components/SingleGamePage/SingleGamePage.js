import React, { Component } from "react";
import { connect } from "react-redux";

import PosterGame from "../ui/PosterGame";
import TitleGame from "../ui/TitleGame";
import DescriptionGame from "../ui/DescriptionGame";
import ToRememberButton from "../ui/ToRememberButton";
import AddUsersRating from "../ui/AddUsersRating";
import Rating from "../ui/Rating";
import Videos from "./Videos";
import Summary from "./Summary";
import Alike from "./Alike";
import Loader from "../ui/Loader";
import * as actionCreators from "../../store/actions/actions";
import "./SingleGamePage.scss";

class SingleGamePage extends Component {
  componentDidMount = () => {
    this.props.onGetSingleGameInfo(this.props.id);
  };

  render() {
    return (
      <main className="SingleGamePage">
        {!this.props.cover ? (
          <Loader />
        ) : (
          <>
            <section className="GameInfo">
              <PosterGame cover={this.props.cover} />
              <div className="GameInfo__bottom-block">
                <ToRememberButton />
                <AddUsersRating />
                <TitleGame title={this.props.title} />
                <DescriptionGame description={this.props.genre} />
                <Rating>{this.props.rating}</Rating>
              </div>
            </section>
            {this.props.videos !== null ? (
              <Videos videos={this.props.videos} />
            ) : null}
            <Summary summary={this.props.summary} />
            <Alike alikeGames={this.props.alike} sendId={this.props.onGetId} />
          </>
        )}
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.choosedId,
    cover: state.singleCover,
    title: state.singleName,
    genre: state.singleGenres,
    rating: state.singleRating,
    videos: state.singleVideos,
    summary: state.singleSummary,
    alike: state.singleAlike,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetSingleGameInfo: (val) =>
      dispatch(actionCreators.getSingleGameInfo(val)),
    onGetId: (value) => dispatch(actionCreators.getId(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleGamePage);
