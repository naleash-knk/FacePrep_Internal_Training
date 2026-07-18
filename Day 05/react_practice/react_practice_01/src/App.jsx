import { Fragment } from 'react';
import './App.css';

function App() {

  const myData = {
    name: "Naleash",
    age: 21,
    year: 2005,
    place: "Karaikal",
    qualification: "BTech",
  }
  return (
    <Fragment>
      <div className="card">
        <h1>ID Card</h1>
        <hr />
        <table>
          <tr>
            <th>Name:</th>
            <td>{myData.name}</td>
          </tr>
          <tr>
            <th>Age:</th>
            <td>{myData.age}</td>
          </tr>
          <tr>
            <th>Year:</th>
            <td>{myData.year}</td>
          </tr>
          <tr>
            <th>Place:</th>
            <td>{myData.place}</td>
          </tr>
          <tr>
            <th>Qualification:</th>
            <td>{myData.qualification}</td>
          </tr>
        </table>
      </div>


    </Fragment>
  );
}

export default App;