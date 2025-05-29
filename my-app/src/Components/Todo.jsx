import { useState,useContext } from "react";
import "./Todo.css";
import { con } from "./Usecontex";

function App() {
  const [allNames, setAllNames] = useState(["uni"]);
  let [inputValue, setInputValue] = useState("");
  


const {user}=useContext((con))

  const add = () => {
    setAllNames([...allNames, inputValue]);
    setInputValue("");
  };

  const remove = (index) => {
    setAllNames(allNames.filter((val, ind) => ind !== index));
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  

    return (
      <div>
        <div className="main">
          <table className="names-table">
            <tbody>
              <tr>
                <th align="center">Addtask</th>
                <th align="center">Removetask</th>
                <th align="center">Edit</th>

               <h1> hello{user.name}</h1>

              </tr>
              {allNames.map((val, index) => {
                return (
                  <tr>
                    {/* // <tr key={index}> */}
                    {/* <td align="center">{index}</td> */}
                    <td align="center">{val}</td>
                    <td align="center">
                      <button onClick={() => remove(index)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <br />
          <br />
          <label htmlFor="">Todolist</label>
          <br />
          <input type="text" value={inputValue} onChange={handleChange} />
          <br />
          <button onClick={add}>Add</button>
          <div></div>
        </div>
      </div>
    );
  }

  export default App;