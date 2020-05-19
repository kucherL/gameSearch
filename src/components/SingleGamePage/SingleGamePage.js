import React, { Component } from "react";
import { connect } from "react-redux";

import Poster from "../ui/Poster/Poster";
import Title from "../ui/Title/Title";
import Description from "../ui/Description/Description";
import ToRememberButton from "../ui/ToRememberButton/ToRememberButton";
import AddUserRating from "../ui/AddUserRating/AddUserRating";
import Rating from "../ui/Rating/Rating";
import Trailers from "./Trailers/Trailers";
import Summary from "./Summary/Summary";
import SimilarGames from "./SimilarGames/SimilarGames";
import Loader from "../ui/Loader/Loader";
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
            <figure className="GameInfo">
              <Poster cover={this.props.cover} />
              <figcaption>
                <div className="GameInfo__interactive-el">
                  <ToRememberButton
                    idGame={this.props.id}
                    cover={this.props.cover}
                    title={this.props.title}
                    summary={this.props.summary}
                    folders={this.props.folders}
                    addGameToFolder={this.props.onAddGameToFolder}
                    uid={this.props.user.uid}
                  />
                  <AddUserRating
                    idGame={this.props.id}
                    uid={this.props.user.uid}
                    addUserRating={this.props.onAddUserRating}
                  />
                </div>
                <Title title={this.props.title} />
                <Description
                  genres={this.props.singleGenres}
                  platforms={this.props.singlePlatforms}
                />
                <Rating>{this.props.rating}</Rating>
              </figcaption>
            </figure>
            {this.props.videos !== null ? (
              <Trailers videos={this.props.videos} />
            ) : null}
            <Summary summary={this.props.summary} />
            <SimilarGames
              alikeGames={this.props.alike}
              sendId={this.props.onGetId}
              folders={this.props.folders}
              addGameToFolder={this.props.onAddGameToFolder}
              uid={this.props.user.uid}
              addUserRating={this.props.onAddUserRating}
            />
          </>
        )}
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    folders: state.userFolders,
    id: state.choosedId,
    cover: state.singleCover,
    title: state.singleName,
    singleGenres: state.singleGenres,
    singlePlatforms: state.singlePlatforms,
    rating: state.singleRating,
    videos: state.singleVideos,
    summary: state.singleSummary,
    alike: state.singleAlike,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddUserRating: (user, starValue, idGame) =>
      dispatch(actionCreators.addUserRating(user, starValue, idGame)),
    onGetUserFolders: (user) => dispatch(actionCreators.getUserFolders(user)),
    onAddGameToFolder: (gameData, user, idFolder) =>
      dispatch(actionCreators.addGameToFolder(gameData, user, idFolder)),
    onGetSingleGameInfo: (val) =>
      dispatch(actionCreators.getSingleGameInfo(val)),
    onGetId: (value) => dispatch(actionCreators.getId(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleGamePage);
