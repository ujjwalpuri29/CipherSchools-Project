import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./cipherMap.css";

const today = new Date();
const lastYear = new Date(today.valueOf());
lastYear.setDate(lastYear.getDate() - 362);

const CipherMap = () => {
  return (
    <div className="flex-container">
      <div className="top-row">
        <div className="left-header">CIPHER MAP</div>
      </div>
      <div className="heatmap-container">
        <CalendarHeatmap
          viewBox="0 0 612 100"
          startDate={lastYear}
          endDate={today}
          values={[
            { date: "2023-01-01", count: 12 },
            { date: "2023-01-22", count: 122 },
            { date: "2023-01-30", count: 38 },
          ]}
          showWeekdayLabels
        />
        <div className="heatmap-label">
          <span>Less</span>
          <svg width="12" height="12">
            <rect width="12" height="12" fill="#fff"></rect>
          </svg>
          <svg width="12" height="12">
            <rect width="12" height="12" fill="#f3dcc4"></rect>
          </svg>
          <svg width="12" height="12">
            <rect width="12" height="12" fill="#e5b583"></rect>
          </svg>
          <svg width="12" height="12">
            <rect width="12" height="12" fill="#d48432"></rect>
          </svg>
          <svg width="12" height="12">
            <rect width="12" height="12" fill="#c87a2a"></rect>
          </svg>
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

export default CipherMap;
