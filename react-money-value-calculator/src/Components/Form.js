import React, { useState } from "react";

function Form(props) {
  const [state, setState] = useState({
    principal: "",
    interest: "",
    time: "",
    inflation: "",
    compoundPeriod: "",
  });

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }
  let rate;
  const computeEffectiveRate = () => {
    let effectiveRate =
      parseFloat(1 + state.interest / 100) / (1 + state.inflation / 100) - 1;
    rate = effectiveRate;
    // console.log(rate);
    return rate;
  };

  const computeTrueMoneyValue = () => {
    computeEffectiveRate();
    let amount =
      state.principal *
      Math.pow(
        1 + parseFloat(rate * 100) / (state.compoundPeriod * 100),
        state.compoundPeriod * state.time
      ).toFixed(2);
    // console.log(parseFloat(amount));
    props.computedValue(amount);
    return amount;
  };

  return (
    <div className='input-wrapper'>
      <form>
        <div className='input'>
          <h4>fill in the parameters</h4>
          <label>
            principal
            <input
              type='number'
              name='principal'
              value={state.principal}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='input'>
          <label>
            interest
            <input
              type='number'
              name='interest'
              value={state.interest}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='input'>
          <label>
            time
            <input
              type='number'
              name='time'
              value={state.time}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='input'>
          <label>
            inflation
            <input
              type='number'
              name='inflation'
              value={state.inflation}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='input'>
          <label>
            compound period
            <input
              type='number'
              name='compoundPeriod'
              value={state.compoundPeriod}
              onChange={handleChange}
            />
          </label>
        </div>
      </form>
      <div>
        <div>
          <p className='display-result-title'>True future balance</p>
          <h2 className='display-result'># {computeTrueMoneyValue()}</h2>
        </div>
      </div>
    </div>
  );
}

export default Form;
