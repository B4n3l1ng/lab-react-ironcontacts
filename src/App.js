import "./App.css";
import contacts from "./contacts.json";
import React, { useState } from "react";

function App() {
  const firstFive = contacts.slice(0, 5);
  const [list, setList] = useState(firstFive);

  const addRandom = () => {
    const random = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts[random];
    let contactsCopy = [...list];
    if (!contactsCopy.includes(randomContact)) {
      contactsCopy.push(randomContact);
    }
    setList(contactsCopy);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandom} className="Btn">
        Add a random contact
      </button>

      {list.map((contact) => {
        return (
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won Oscar</th>
                <th>Won Emmy</th>
              </tr>
            </thead>
            <tbody>
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt="contact portrait"
                    className="profileImage"
                  ></img>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🏆" : ""}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

export default App;
