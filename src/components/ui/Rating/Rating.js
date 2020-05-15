import React from "react";

import "./Rating.scss";

const rating = (props) => (
  <div class="Rating">
    <svg viewBox="0 0 36 36" class="Rating__circular-chart">
      <path
        class="Rating__circle-bg"
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        class="Rating__circle"
        stroke-dasharray={`${props.children}, 100`}
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" class="Rating__percentage">
        {`${props.children}%`}
      </text>
    </svg>
  </div>
);

export default rating;
