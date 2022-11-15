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

  const sortPopularity = () => {
    const copy = [...list];
    const sorted = copy.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      } else {
        return -1;
      }
    });
    setList(sorted);
  };

  const sortName = () => {
    const copy = [...list];
    const sorted = copy.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });
    setList(sorted);
  };

  const removeContact = (contactId) => {
    const filteredContacts = list.filter((contact) => {
      return contact.id !== contactId;
    });
    setList(filteredContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandom} className="Btn">
        Add a random contact
      </button>
      <button onClick={sortPopularity} className="Btn">
        Sort contacts by popularity
      </button>
      <button onClick={sortName} className="Btn">
        Sort contacts alphabetically
      </button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        {list.map((contact) => {
          return (
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
                <td>
                  <button
                    onClick={() => removeContact(contact.id)}
                    className="removeBtn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
