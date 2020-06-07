import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Poster from "../UI/Poster/Poster";
import Title from "../UI/Title/Title";
import Description from "../UI/Description/Description";
import ToRememberButton from "../UI/ToRememberButton/ToRememberButton";
import AddUserRating from "../UI/AddUserRating/AddUserRating";
import Rating from "../UI/Rating/Rating";
import Trailers from "./Trailers/Trailers";
import Summary from "./Summary/Summary";
import SimilarGames from "./SimilarGames/SimilarGames";
import Loader from "../UI/Loader/Loader";
import Modal from "../UI/Modal/Modal";
import * as actionCreators from "../../store/actions/actions";
import "./SingleGamePage.scss";

class SingleGamePage extends Component {
  componentDidMount = () => {
    this.props.onGetSingleGameInfo(this.props.id);
  };

  componentDidUpdate = async (prevProps) => {
    if (this.props.id !== prevProps.id) {
      await this.props.onGetSingleGameInfo(this.props.id);
    }
  };

  componentWillUnmount = () => {
    this.props.onCleanSingleGameData();
  };

  render() {
    return (
      <>
        {!this.props.id ? (
          <Redirect to="/" />
        ) : (
          <>
            {this.props.error ? (
              <Modal cleanError={this.props.onCleanError}>
                {this.props.error.message}
              </Modal>
            ) : null}
            {!this.props.title ? (
              <Loader />
            ) : (
              <main className="SingleGamePage">
                <figure className="GameInfo">
                  <Poster cover={this.props.cover} />
                  <figcaption>
                    <div className="GameInfo__interactive-el">
                      <ToRememberButton
                        idGame={this.props.id}
                        cover={this.props.cover}
                        title={this.props.title}
                        genres={this.props.singleGenres}
                        platforms={this.props.singlePlatforms}
                        folders={this.props.folders}
                        addGameToFolder={this.props.onAddGameToFolder}
                        uid={this.props.user.uid}
                      />
                      <AddUserRating
                        idGame={this.props.id}
                        uid={this.props.user.uid}
                        addUserRating={this.props.onAddUserRating}
                        ratedGames={this.props.ratedGames}
                        fetchUserRating={this.props.onFetchUserRating}
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
                <Summary summary={this.props.summary} />
                {this.props.videos !== null ? (
                  <Trailers videos={this.props.videos} />
                ) : null}
                <SimilarGames
                  alikeGames={this.props.alike}
                  sendId={this.props.onGetId}
                  folders={this.props.folders}
                  addGameToFolder={this.props.onAddGameToFolder}
                  uid={this.props.user.uid}
                  addUserRating={this.props.onAddUserRating}
                  ratedGames={this.props.ratedGames}
                />
              </main>
            )}
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    folders: state.userFolders,
    id: state.choosedId,
    cover: state.singlePageGame.singleCover,
    title: state.singlePageGame.singleName,
    singleGenres: state.singlePageGame.singleGenres,
    singlePlatforms: state.singlePageGame.singlePlatforms,
    rating: state.singlePageGame.singleRating,
    videos: state.singlePageGame.singleVideos,
    summary: state.singlePageGame.singleSummary,
    alike: state.singlePageGame.singleAlike,
    ratedGames: state.ratedGames,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCleanSingleGameData: () => dispatch(actionCreators.cleanSingleGameData()),
    onAddUserRating: (user, starValue, idGame) =>
      dispatch(actionCreators.addUserRating(user, starValue, idGame)),
    onGetUserFolders: (user) => dispatch(actionCreators.getUserFolders(user)),
    onAddGameToFolder: (gameData, user, idFolder) =>
      dispatch(actionCreators.addGameToFolder(gameData, user, idFolder)),
    onGetSingleGameInfo: (val) =>
      dispatch(actionCreators.getSingleGameInfo(val)),
    onGetId: (value) => dispatch(actionCreators.getId(value)),
    onFetchUserRating: (user) => dispatch(actionCreators.fetchUserRating(user)),
    onCleanError: () => dispatch(actionCreators.cleanError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleGamePage);
