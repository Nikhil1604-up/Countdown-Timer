import React from "react";

const CountdownTimer = () => {
  return (
    <div className="container">
      <span className="container__title">Countdown Timer</span>
      <div className="container__labels">
        <p className="container__labels--label">Hours</p>
        <p className="container__labels--label">Minutes</p>
        <p className="container__labels--label">Seconds</p>
      </div>
      <div className="container__inputs">
        <input
          type="number"
          maxLength="2"
          onInput={(e) => {
            if (e.target.value.length > 2) {
              e.target.value = e.target.value.slice(0, 2);
            }
          }}
          className="container__inputs--time hour"
          placeholder="00"
        />
        <p className="container__inputs--colon">:</p>
        <input
          type="number"
          maxLength="2"
          onInput={(e) => {
            if (e.target.value.length > 2) {
              e.target.value = e.target.value.slice(0, 2);
            }
          }}
          className="container__inputs--time minute"
          placeholder="00"
        />
        <p className="container__inputs--colon">:</p>
        <input
          type="number"
          maxLength="2"
          onInput={(e) => {
            if (e.target.value.length > 2) {
              e.target.value = e.target.value.slice(0, 2);
            }
          }}
          className="container__inputs--time second"
          placeholder="00"
        />
      </div>
      <div className="container__btns">
        <button className="btn start"}>Start</button>
        <button className="btn stop">Stop</button>
        <button className="btn reset">Reset</button>
      </div>
    </div>
  );
};

export default CountdownTimer;
