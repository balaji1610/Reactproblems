import { useState } from "react";

const Problems = () => {
  const [userFormData, setUserFormData] = useState({
    signal: " ",
    destination: " ",
  });
  let [result, setResult] = useState(" ");

  const handleChangeFromData = (event) => {
    setUserFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const submitButtonClick = () => {
    if (
      isNaN(userFormData.signal) ||
      userFormData.signal < 0 ||
      // eslint-disable-next-line eqeqeq
      userFormData.signal == 0 ||
      userFormData.signal > 10
    ) {
      alert("Validate Enter 1 to 10");
      return false;
    } else if (
      isNaN(userFormData.destination) ||
      userFormData.destination < 0 ||
      // eslint-disable-next-line eqeqeq
      userFormData.destination == 0 ||
      userFormData.destination > 5
    ) {
      alert("Validate Enter 1 to 5");
      return false;
    }

    var ThreeWayRoad = 3 * userFormData.destination;

    var FourWayRoad = 4 * userFormData.destination;

    var TwowayRoady = 2 * userFormData.destination;

    var Result = Math.abs(
      ThreeWayRoad + (FourWayRoad - ThreeWayRoad) + (FourWayRoad - TwowayRoady)
    );
    // console.log(Result);

    var Result2 = userFormData.signal;

    var EndJourney = parseInt(Result) + parseInt(Result2) + 1;

    console.log(EndJourney, "hhh");

    if (EndJourney <= 59) {
      var dd = EndJourney + " Sec";
      setResult(dd);
      console.log(dd);
    } else if (EndJourney >= 60) {
      var minute = Math.floor(EndJourney / 60);
      var seconds = EndJourney % 60;

      var Time = minute + " minutes " + seconds + " seconds.";

      setResult(Time);
    }
  };

  return (
    <div>
      {" "}
      <div>
        &nbsp;&nbsp;
        <form>
          Start Journey{" "}
          <input
            type="text"
            name="signal"
            value={userFormData.signal}
            onChange={handleChangeFromData}
          />{" "}
          Waiting Seconds
          <input
            type="text"
            name="destination"
            value={userFormData.destination}
            onChange={handleChangeFromData}
          />{" "}
          &nbsp; &nbsp;
          <button type="button" onClick={submitButtonClick}>
            Submit
          </button>
        </form>
        <p>{result}</p>
      </div>
      <hr />
    </div>
  );
};
export default Problems;
