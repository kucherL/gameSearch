import React from "react";

const platformSearch = (props) => {
  const platformsList = props.platforms.map((platform, index) => {
    return (
      <option key={index} value={platform.id}>
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

export default platformSearch;
