import React, { Component } from "react";
import ServiceCard from "./Components/ServiceCard";
import Pagination from '../../../utils/pagination'
import { connect } from 'react-redux';
import { fetchServices } from '../../../actions';

class ServicesListPage extends Component {

  state = { pageNumber: 1, }
  async  componentDidMount() {
    this.props.fetchServices();



  }

  servicesList = () => {
    const listOfServices = this.props.rest.map((properties, i) => {
      return <ServiceCard key={i} {...properties} />
    })
    const listOfServicesFilterd = listOfServices.filter((x, i) => {

      if (i + 1 <= (this.state.pageNumber * 10) && i + 1 >= (this.state.pageNumber * 10 - 10 + 1)) {
        return true
      }
      return false
    })
    return <>{listOfServicesFilterd}</>
  }


  render() {
    return (
      <>
        <div className="row" >
          {this.servicesList()}
        </div>
        < Pagination pageNum={this.state.pageNumber} numOfPages={this.props.numOfPages} onChange={(pageNum) => { this.setState({ pageNumber: pageNum }) }} />
      </>

    );
  }
}

const mapStateToProps = (props, ownProps) => {
  const { services } = props

  const numOfPages = Math.ceil(services.length / 12)
  const rest = services


  return { numOfPages, rest }
};

export default connect(mapStateToProps, { fetchServices })(ServicesListPage)



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