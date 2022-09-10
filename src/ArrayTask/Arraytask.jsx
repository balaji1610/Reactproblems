import React from "react";

import { useState } from "react";

const ArrayList = () => {
  const [userdata, setUserData] = useState({
    list: " ",
  });

  const [Editdata, setEditdata] = useState();
  // console.log(Editdata, "Editdata");
  const [inputfield, setInputfield] = useState(true);

  const [CurrentIndex, setCurrentIndex] = useState();

  // const [disableButton, setDisableButton] = useState(false);

  const handleChange = (event) => {
    setUserData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const saveChange = (event) => {
    setEditdata((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const [myArray, updateMyArray] = useState([]);

  const Addbuttonclick = () => {
    setUserData(() => " ");

    myArray.push(userdata.list);

    console.log(userdata.list);

    console.log([myArray], "myarray");
  };

  const handleEdit = (key) => {
    // const CurrentIndex = key;
    setCurrentIndex(key);
    // console.log(CurrentIndex, "Currentindex");

    const Editindex = myArray[CurrentIndex];
    setEditdata(Editindex);
    console.log(Editindex, "Editindex");
    setInputfield((e) => !e);
    // setDisableButton((e) => !e);
  };

  const saveButtonClick = () => {
    console.log(CurrentIndex, "CurrentIndex saveButtonClick");
    // let dataCurrent = myArray[CurrentIndex];

    // console.log(dataCurrent, "dataCurrent");
    myArray[CurrentIndex] = Editdata.editvalue;
    console.log(Editdata.editvalue, "save");
    // myArray.push(Editdata.editvalue);
    setInputfield((e) => !e);
    // setDisableButton((e) => !e);
  };

  const handleDelete = (element) => {
    console.log(element, "element");
    const getData = myArray[element];
    console.log(getData, "getData");

    // var dataRetrive = myArray.splice(getData, 1);
    // updateMyArray(dataRetrive);
    // console.log(dataRetrive, "dataRetrive");
    const dataResult = myArray.filter((a, i) => i !== element);
    updateMyArray(dataResult);
  };

  return (
    <div>
      {inputfield ? (
        <div>
          {" "}
          &nbsp; &nbsp; &nbsp; &nbsp;
          <form>
            <input
              type="text"
              name="list"
              value={userdata.list}
              onChange={handleChange}
              required
            />
            &nbsp; &nbsp; &nbsp; &nbsp;
            <input name="reset" type="reset" value="Reset" />
          </form>{" "}
          <button onClick={Addbuttonclick}>Add</button>{" "}
        </div>
      ) : (
        <div>
          {" "}
          <section className="Edit">
            <form>
              <input
                type="text"
                name="editvalue"
                defaultValue={Editdata}
                onChange={saveChange}
                required
              />
              &nbsp; &nbsp; &nbsp; &nbsp;
              <input type="reset" value="Reset"></input>
            </form>{" "}
            <button onClick={saveButtonClick}>Save</button>
          </section>
        </div>
      )}

      <div>
        <table>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Name</th>
              <th></th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myArray.map((items, index) => (
              <tr>
                <td> {index + 1} </td>
                <td> {items}</td>
                <td>
                  {/* <button
                    disabled={disableButton ? true : false}
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button> */}
                  <button onClick={() => handleEdit(index)}>Edit</button>
                </td>

                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArrayList;
