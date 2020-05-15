import React from "react";

const platformSearch = (props) => {
  const platformsList = props.platforms.map((platform, index) => {
    return (
      <option key={index} onClick={props.clicked} value={platform[1]}>
        {platform[0]}
      </option>
    );
  });

  return (
    <div className="FilterPanel__item">
      <label htmlFor="platform-select">Платформа</label>
      <select name="platforms" id="platform-select">
        {platformsList}
      </select>
    </div>
  );
};

export default platformSearch;
