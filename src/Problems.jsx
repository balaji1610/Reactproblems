import { useState } from "react";

const Problems = () => {
  const [userFormData, setUserFormData] = useState({
    xvalue: " ",
    yvalue: " ",
    dvalue: " ",
  });
  let [result, setResult] = useState(" ");
  let [result2, setResult2] = useState(" ");
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
      // eslint-disable-next-line eqeqeq
      userFormData.xvalue == 0
    ) {
      alert("Not Validate");
      return false;
    } else if (
      isNaN(userFormData.yvalue) ||
      userFormData.yvalue < 0 ||
      // eslint-disable-next-line eqeqeq
      userFormData.yvalue == 0
    ) {
      alert("Not Validate");
      return false;
    } else if (
      isNaN(userFormData.dvalue) ||
      userFormData.dvalue < 0 ||
      // eslint-disable-next-line eqeqeq
      userFormData.dvalue == 0
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
  const [userFormDataNew, setUserFormDataNew] = useState({
    xvalueDistance: " ",
    yvalueDistance: " ",
  });

  const handleChangeFromDataNew = (event) => {
    setUserFormDataNew((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const submitButtonClick02 = () => {
    if (
      isNaN(userFormDataNew.xvalueDistance) ||
      userFormDataNew.xvalueDistance < 0 ||
      // eslint-disable-next-line eqeqeq
      userFormDataNew.xvalueDistance == 0
    ) {
      alert("Not Validate");
      return false;
    } else if (
      isNaN(userFormDataNew.yvalueDistance) ||
      userFormDataNew.yvalueDistance < 0 ||
      // eslint-disable-next-line eqeqeq
      userFormDataNew.yvalueDistance == 0
    ) {
      alert("Not Validate");
      return false;
    }

    var Jumps =
      (userFormDataNew.yvalueDistance - userFormDataNew.xvalueDistance) / 3;

    let FinalJumpsResult = Math.round(Math.abs(Jumps));

    setResult2(FinalJumpsResult);
    console.log(FinalJumpsResult);
  };
  return (
    <div>
      {" "}
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
      <hr />
      <div>
        <form>
          X:{" "}
          <input
            type="text"
            name="xvalueDistance"
            value={userFormDataNew.xvalueDistance}
            onChange={handleChangeFromDataNew}
          />{" "}
          Y:
          <input
            type="text"
            name="yvalueDistance"
            value={userFormDataNew.yvalueDistance}
            onChange={handleChangeFromDataNew}
          />{" "}
          &nbsp; &nbsp;
          <button type="button" onClick={submitButtonClick02}>
            Submit
          </button>
        </form>
        <p>{result2}</p>
      </div>
    </div>
  );
};
export default Problems;
