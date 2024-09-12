import React, { useState, useEffect } from "react";

const FetchAndMap = ({ films, vehicles, species }) => {
  const [filmTitles, setFilmTitles] = useState([]); // State to store film titles
  const [vehicleNames, setVehicleNames] = useState([]); // State to store vehicle names
  const [spicesName, setSpicesName] = useState([]);
  console.log("vehicles", vehicles);
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch film titles
        const fetchedFilmTitles = await Promise.all(
          films.map(async (url) => {
            const response = await fetch(url);
            const data = await response.json();
            return data.title; // Extract the title from the film response
          })
        );

        // Fetch vehicle names
        const fetchedVehicleNames = await Promise.all(
          vehicles.map(async (url) => {
            const response = await fetch(url);
            const data = await response.json();
            console.log("data.name", data.name);
            return data.name; // Extract the name from the vehicle response
          })
        );

        const fetchedSpeciesNames = await Promise.all(
          species.map(async (url) => {
            const response = await fetch(url);
            const data = await response.json();
            console.log("data.name", data.name);
            return data.name; // Extract the name from the vehicle response
          })
        );
        setFilmTitles(fetchedFilmTitles);
        console.log("fetchedVehicleNames", fetchedVehicleNames);
        setVehicleNames(fetchedVehicleNames);
        setSpicesName(fetchedSpeciesNames);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData(); // Call the function when the component mounts
  }, [films, vehicles]); // Dependency array ensures this effect runs when 'films' or 'vehicles' changes
  console.log("vehicleNames", vehicleNames);
  return (
    <>
      <td style={{ border: "1px solid black", padding: "8px" }}>
        {filmTitles.join(", ")}
      </td>
      <td style={{ border: "1px solid black", padding: "8px" }}>
        {vehicleNames.join(", ")}
      </td>
      <td style={{ border: "1px solid black", padding: "8px" }}>
        {spicesName.join(", ")}
      </td>
    </>
  );
};

export default FetchAndMap;
