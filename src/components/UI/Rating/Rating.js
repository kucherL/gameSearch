import React from "react";

import "./Rating.scss";

const Rating = (props) => (
  <div className="Rating" hint="Средний рейтинг игры">
    <svg viewBox="0 0 36 36" className="Rating__circular-chart">
      <path
        className="Rating__circle-bg"
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        className="Rating__circle"
        strokeDasharray={`${props.children}, 100`}
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="Rating__percentage">
        {`${props.children}%`}
      </text>
    </svg>
  </div>
);

export default Rating;
