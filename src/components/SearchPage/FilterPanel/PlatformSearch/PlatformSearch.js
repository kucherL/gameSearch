import React from "react";

const PlatformSearch = (props) => {
  const platformsList = Object.values(props.platforms).map((platform) => {
    return (
      <option key={platform.id} value={platform.id}>
        {platform.name}
      </option>
    );
  });

  return (
    <div className="FilterPanel__item">
      <label htmlFor="selectedPlatforms">Платформа</label>
      <select
        name="selectedPlatforms"
        id="platform-select"
        onClick={props.clicked}
      >
        {platformsList}
      </select>
    </div>
  );
};

export default PlatformSearch;
