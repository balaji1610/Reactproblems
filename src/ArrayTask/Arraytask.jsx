import React from "react";

import { useState } from "react";

const ArrayList = () => {
  const [userdata, setUserData] = useState({
    list: " ",
  });

  const handleChange = (event) => {
    setUserData((prevState) => ({
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

  return (
    <div>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <form>
        <input
          type="text"
          name="list"
          value={userdata.list}
          onChange={handleChange}
        />
        &nbsp; &nbsp; &nbsp; &nbsp;
        <input type="reset" value="Reset"></input>
      </form>{" "}
      <button onClick={Addbuttonclick}>Add</button>
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
                  <button>Edit</button>
                </td>

                <td>
                  <button>Delete</button>
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
