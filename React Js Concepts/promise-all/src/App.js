import { useEffect, useState } from "react";
import FetchAndMap from "./FetchAndMap";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((datas) => {
        setData(datas.results);
        console.log(datas.results);
      })
      .catch((error) => console.error("Error fetching people data:", error));
  }, []);

  return (
    <div className="App">
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                textAlign: "left",
              }}
            >
              Films
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                textAlign: "left",
              }}
            >
              Vehicles
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                textAlign: "left",
              }}
            >
              species
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((val, index) => (
              <tr key={index} style={{ border: "1px solid black" }}>
                <FetchAndMap
                  films={val.films}
                  species={val.species}
                  vehicles={val.vehicles}
                />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
