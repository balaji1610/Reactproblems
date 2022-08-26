import { useState } from "react";

const Problems = () => {
  const [userFormData, setUserFormData] = useState({
    xvalue: " ",
    yvalue: " ",
    dvalue: " ",
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
      isNaN(userFormData.xvalue) ||
      userFormData.xvalue < 0 ||
      userFormData.xvalue === 0
    ) {
      alert("Not Validate");
      return false;
    } else if (
      isNaN(userFormData.yvalue) ||
      userFormData.yvalue < 0 ||
      userFormData.yvalue === 0
    ) {
      alert("Not Validate");
      return false;
    } else if (
      isNaN(userFormData.dvalue) ||
      userFormData.dvalue < 0 ||
      userFormData.dvalue === 0
    ) {
      alert("Not Validate");
      return false;
    }

    var Jumps =
      (userFormData.yvalue - userFormData.xvalue) / userFormData.dvalue;

    let FinalJumpsResult = Math.round(Math.abs(Jumps));

    setResult(FinalJumpsResult);
    console.log(FinalJumpsResult);
  };

  return (
    <div>
      <h1>Find Maximum Jumphs</h1>
      <form>
        X:{" "}
        <input
          type="text"
          name="xvalue"
          value={userFormData.xvalue}
          onChange={handleChangeFromData}
        />{" "}
        Y:
        <input
          type="text"
          name="yvalue"
          value={userFormData.yvalue}
          onChange={handleChangeFromData}
        />{" "}
        D:
        <input
          type="text"
          name="dvalue"
          value={userFormData.dvalue}
          onChange={handleChangeFromData}
        />
        &nbsp; &nbsp;
        <button type="button" onClick={submitButtonClick}>
          Submit
        </button>
      </form>
      <p>{result}</p>
    </div>
  );
};
export default Problems;
