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
      userFormData.signal == 0
    ) {
      alert("Not Validate");
      return false;
    } else if (
      isNaN(userFormData.destination) ||
      userFormData.destination < 0 ||
      // eslint-disable-next-line eqeqeq
      userFormData.destination == 0
    ) {
      alert("Not Validate");
      return false;
    }

    var Reach = userFormData.signal * userFormData.destination;
    // console.log(Reach, "Reach");
    var waitingTime = (userFormData.signal - 1) * 3;
    // console.log(waitingTime, "Wait");
    var OverallJourney = Reach + waitingTime;

    if (OverallJourney <= 59) {
      var dd = OverallJourney + " Sec";
      setResult(dd);
      console.log(dd);
    } else if (OverallJourney >= 60) {
      var minute = Math.floor(OverallJourney / 60);
      var seconds = OverallJourney % 60;

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
          Number Of Signal{" "}
          <input
            type="text"
            name="signal"
            value={userFormData.signal}
            onChange={handleChangeFromData}
          />{" "}
          Each Signal Time
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
