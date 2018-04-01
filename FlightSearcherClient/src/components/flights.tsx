import * as React from "react";
import FlightSearch from "../components/flightSearch";
import { Airport, Flight, FlightSearchRequest, StoreState } from "../types";
import convertDateTimeToString from "../utility/convertDateTimeToString";

interface Props {
  airports: Airport[];
  flights: Flight[];
  updateFlights: (request: FlightSearchRequest) => void;
}

export default ({ airports, flights, updateFlights }: Props) => <div>
  <FlightSearch
    airports={airports}
    updateFlights={updateFlights}
  />
  <table className="table table-striped table-bordered">
    <thead>
      <tr>
        <th>From</th>
        <th>To</th>
        <th>Flight Number</th>
        <th>Departs</th>
        <th>Arrives</th>
        <th>Main Cabin Price</th>
        <th>First Class Price</th>
      </tr>
    </thead>
    <tbody>
      { flights.map((flight) => (
        <tr key={flight.FlightNumber + flight.From + flight.To}>
          <td>{flight.From}</td>
          <td>{flight.To}</td>
          <td>{flight.FlightNumber}</td>
          <td>{convertDateTimeToString(flight.Departs)}</td>
          <td>{convertDateTimeToString(flight.Arrives)}</td>
          <td>${flight.MainCabinPrice}</td>
          <td>${flight.FirstClassPrice}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div > ;
