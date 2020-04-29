import React, { Component } from "react";
import RestCard from "../../RestCard";
import axios from 'axios'
import Pagination from '../../../utils/pagination'
export class CardLsit extends Component {

  state = { rest: [], pageNumber: 1, numOfPages: 1 }
  async  componentDidMount() {
    const response = await axios.get("http://localhost:3000/api/services/")

    const numOfPages = Math.ceil(response.data.Rest.length / 12)
    this.setState({ rest: response.data.Rest, numOfPages })

  }

  servicesList = () => {
    const listOfServices = this.state.rest.map(({ serviceNameHeb, serviceNameEng, serviceUrl, details }, i) => {
      return <RestCard key={i} serviceNameHeb={serviceNameHeb} serviceNameEng={serviceNameEng} serviceUrl={serviceUrl} details={details} />
    })
    const listOfServicesFilterd = listOfServices.filter((x, i) => {

      if (i + 1 <= (this.state.pageNumber * 12) && i + 1 >= (this.state.pageNumber * 12 - 12 + 1)) {
        return true
      }
      return false
    })
    return <>{listOfServicesFilterd}</>
  }
  render() {
    return (
      // <div className="container-fluid" style={{ margin: "px 0px" }}>
      <>
        <div className="row" >
          {this.servicesList()}
        </div>
        < Pagination pageNum={this.state.pageNumber} numOfPages={this.state.numOfPages} onChange={(pageNum) => {
          console.log("ssssss")
          this.setState({ pageNumber: pageNum })
        }} />
      </>
      // </div>
    );
  }
}

export default CardLsit;

/*
import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}


*/