import { isEqual } from "lodash";
import * as React from "react";
import { ChangeEvent } from "react";
import { ButtonToolbar, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { selectFlights } from "../selectors/index";
import { Airport, FlightSearchRequest, FlightSortColumnEnum, FlightSortOrderEnum } from "../types";
import "./flightSearch.css";

interface Props {
  airports: Airport[];
  updateFlights: (request: FlightSearchRequest) => void;
}

interface State {
  from: string;
  to: string;
  sortColumn: FlightSortColumnEnum;
  sortOrder: FlightSortOrderEnum;
}

export default class FlightSearch extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      from: "",
      sortColumn: FlightSortColumnEnum.Departure,
      sortOrder: FlightSortOrderEnum.Ascending,
      to: "",
    };
    this.updateFlights(this.state);
  }

  public shouldComponentUpdate(nextProps: any, nextState: any): boolean {
    if (!isEqual(this.state, nextState)) {
      this.updateFlights(nextState);
      return true;
    }

    if (!isEqual(this.props, nextProps)) {
      return true;
    }

    return false;
  }

  public render() {
    const { from, to } = this.state;

    return <div>
      <section className="airport-search">
        <Typeahead
          onChange={(airports: Airport[]) => this.setState({ from: this.getCodeFromAirports(airports) })}
          labelKey="Name"
          options={this.props.airports}
          placeholder="From Airport"
        />
        <Typeahead
          onChange={(airports: Airport[]) => this.setState({ to: this.getCodeFromAirports(airports) })}
          labelKey="Name"
          options={this.props.airports}
          placeholder="To Airport"
        />
      </section>
      <ButtonToolbar className="airport-sort">
        <ToggleButtonGroup
          type="radio"
          name="sortColumn"
          defaultValue={FlightSortColumnEnum.Departure}
          onChange={(sortColumn: any) => this.setState({ sortColumn })}>
          <ToggleButton value={FlightSortColumnEnum.Departure}>
            {FlightSortColumnEnum.Departure}
          </ToggleButton>
          <ToggleButton value={FlightSortColumnEnum.MainCabinPrice}>
            {FlightSortColumnEnum.MainCabinPrice}
          </ToggleButton>
          <ToggleButton value={FlightSortColumnEnum.FirstClassPrice}>
            {FlightSortColumnEnum.FirstClassPrice}
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          type="radio"
          name="sortOrder"
          defaultValue={FlightSortOrderEnum.Ascending}
          onChange={(sortOrder: any) => this.setState({ sortOrder })}>
          <ToggleButton value={FlightSortOrderEnum.Ascending}>
            {FlightSortOrderEnum.Ascending}
          </ToggleButton>
          <ToggleButton value={FlightSortOrderEnum.Descending}>
            {FlightSortOrderEnum.Descending}
          </ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
    </div>;
  }

  private updateFlights = (state: State) => {
    this.props.updateFlights(state);
  }

  private getCodeFromAirports = (airports: Airport[]) => {
    return airports.length > 0 ? airports[0].Code : "";
  }
}
