import React from "react";

import { useState } from "react";

const ArrayList = () => {
  const [userdata, setUserData] = useState({
    list: " ",
  });

  const [editdata, setEditdata] = useState();
  // console.log(editdata, "Editdata");
  const [inputfield, setInputfield] = useState(true);

  const [currentIndex, setCurrentIndex] = useState();

  const [disableButton, setDisableButton] = useState(false);

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
    if (userdata.list == " ") {
      return alert("NOT Validate");
    } else if (userdata.list.length >= 25) {
      return alert("Maxima 25 Characters Only ");
    } else {
      setUserData(() => " ");

      myArray.push(userdata.list);

      console.log(userdata.list);

      console.log([myArray], "myarray");
    }
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const handleEdit = async (key) => {
    console.log("before");

    console.log(key, "KEY");
    await delay(1000);

    console.log("after");

    const currenteditvalue = key;
    setCurrentIndex(key);
    // console.log(currentIndex, "currentIndex");

    const Editindex = myArray[currenteditvalue];
    setEditdata(Editindex);
    console.log(Editindex, "Editindex");
    setInputfield((e) => !e);
    setDisableButton((e) => !e);
  };

  const saveButtonClick = () => {
    console.log(currentIndex, "currentIndex saveButtonClick");
    // let dataCurrent = myArray[currentIndex];

    // console.log(dataCurrent, "dataCurrent");
    myArray[currentIndex] = editdata.editvalue;
    console.log(editdata.editvalue, "save");
    // myArray.push(editdata.editvalue);
    setInputfield((e) => !e);
    setDisableButton((e) => !e);
  };

  const cancelButtonClick = () => {
    setInputfield((e) => !e);
    setDisableButton((e) => !e);
  };

  const handleDelete = (element) => {
    console.log(element, "element");
    const getData = myArray[element];
    console.log(getData, "getData");

    // var dataRetrive = myArray.splice(getData, 1);
    // updateMyArray(dataRetrive);
    // console.log(dataRetrive, "dataRetrive");
    const dataResult = myArray.filter((a, i) => i !== element);

    console.log(dataResult, "dataResult");
    updateMyArray(dataResult);
  };

  const lastRemove = () => {
    const lastIndex = [myArray.length - 1];

    const ConverstString = lastIndex.toString();

    const StringtoNumber = parseInt(ConverstString);
    console.log(StringtoNumber, "lastIndex");

    const deleteLastArray = myArray.filter((a, i) => i != StringtoNumber);

    console.log(deleteLastArray, "deleteLastArray");
    updateMyArray(deleteLastArray);
  };

  const removeAll = () => {
    const Alldeletearray = myArray.splice();

    console.log(Alldeletearray, "Alldeletearray");
    updateMyArray(Alldeletearray);
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
                defaultValue={editdata}
                onChange={saveChange}
                required
              />
              &nbsp; &nbsp; &nbsp; &nbsp;
              <input type="reset" value="Reset"></input>
            </form>{" "}
            <button onClick={saveButtonClick}>Save</button> &nbsp; &nbsp; &nbsp;
            &nbsp;
            <button onClick={cancelButtonClick}>Cancel</button>
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
                  <button
                    disabled={disableButton ? true : false}
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  {/* <button onClick={() => handleEdit(index)}>Edit</button> */}
                </td>

                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => lastRemove()}>Last Remove</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={() => removeAll()}>Remove All</button>
      </div>
    </div>
  );
};

export default ArrayList;
