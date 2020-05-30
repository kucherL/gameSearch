import React from "react";

const PlatformSearch = (props) => {
  const platformsList = Object.values(props.platforms)
    .sort((a, b) => a.popularity - b.popularity)
    .map((platform) => {
      return (
        <option key={platform.id} value={platform.id}>
          {platform.name}
        </option>
      );
    });

  return (
    <div className="FilterPanel__item">
      <label htmlFor="selectedPlatforms">Platform</label>
      <select
        name="selectedPlatforms"
        id="platform-select"
        onClick={props.clicked}
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT" disabled hidden>
          --Choose a platform--
        </option>
        {platformsList}
      </select>
    </div>
  );
};

export default PlatformSearch;
