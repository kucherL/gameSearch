import React, { Component } from "react";
import { connect } from "react-redux";

import PosterGame from "../components/ui/PosterGame";
import TitleGame from "../components/ui/TitleGame";
import DescriptionGame from "../components/ui/DescriptionGame";
import ToRememberButton from "../components/ui/ToRememberButton";
import AddUsersRating from "../components/ui/AddUsersRating";
import Rating from "../components/ui/Rating";
import Videos from "../components/SingleGamePage/Videos";
import Summary from "../components/SingleGamePage/Summary";
import Alike from "../components/SingleGamePage/Alike";
import * as actionCreators from "../store/actions/main_actions";

class SingleGamePage extends Component {
  componentDidMount = () => {
    this.props.onGetSingleGameInfo(this.props.id);
    console.log(this.props.videos);
  };

  render() {
    return (
      <main className="SingleGamePage">
        <section className="GameInfo">
          <PosterGame coverRandomGame={this.props.cover} />
          <div className="GameInfo__bottom-block">
            <ToRememberButton />
            <AddUsersRating />
            <TitleGame titleRandomGame={this.props.title} />
            <DescriptionGame description={this.props.genre} />
            <Rating>{this.props.rating}</Rating>
          </div>
        </section>
        {this.props.videos !== null ? <Videos videos={this.props.videos} /> : null}
        <Summary summary={this.props.summary} />
        <Alike alikeGames={this.props.alike} sendId={this.props.onGetId} />
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.mRed.choosedId,
    cover: state.mRed.singleCover,
    title: state.mRed.singleName,
    genre: state.mRed.singleGenres,
    rating: state.mRed.singleRating,
    videos: state.mRed.singleVideos,
    summary: state.mRed.singleSummary,
    alike: state.mRed.singleAlike,
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
