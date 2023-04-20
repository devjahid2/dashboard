import React from "react";
import Countdown from "react-countdown";
import "./timer.css";

const CountDownTimer = ({ time }) => {
  const Completionist = () => <span>You are good to go!</span>;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div className="timer d-flex align-items-center gap-2 justify-content-around">
          <span className={`days ${days == 0 ? "end" : ""}`}>
            {days > 0 ? days : "00"} <div className="time_indicate">day</div>
          </span>
          <span className={`hours ${hours == 0 ? "end" : ""}`}>
            {hours} <div className="time_indicate">hour</div>
          </span>
          <span className={`minutes ${minutes == 0 ? "end" : ""}`}>
            {minutes} <div className="time_indicate">min</div>
          </span>
          <span className={`seconds ${seconds == 0 ? "end" : ""}`}>
            {seconds} <div className="time_indicate">sec</div>
          </span>
        </div>
      );
    }
  };

  return (
    <div className="mb-4">
      <Countdown date={time} renderer={renderer} />
    </div>
  );
};

export default CountDownTimer;
