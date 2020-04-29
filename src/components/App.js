import React from "react";
import TopNavbar from "./navbar/TopNavbar";
import CardList from "./Pages/ServicesListPage/ServicesListPage";
import PendingRequestList from './Pages/PendingRequestListPage/PendingRequestListPage'
import CreateRestService from './forms/CreateRestService'
import CreateSoapService from './forms/CreateSoapService'
import ProcessSteps from './Commons/processSteps/ProcessSteps'
import Main from './Main'

import { BrowserRouter, Route, Redirect } from 'react-router-dom'


class App extends React.Component {
    render() {
        return (
            <>
                <BrowserRouter>

                    <TopNavbar />




                    {/* <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-filter" /> Filter
  </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href=".">Action</a>
                                <a class="dropdown-item" href=".">Another action</a>
                                <a class="dropdown-item" href=".">Something else here</a>
                            </div>
                        </div> */}
                    <main className="container-fluid">

                        <Redirect from="/" exact to="/ProcessSteps" />
                        <Route path="/services" exact component={CardList} />
                        <Route path="/Main" exact component={Main} />
                        <Route path="/ProcessSteps" exact component={ProcessSteps} />


                        <Route path="/status" exact component={PendingRequestList} />
                        <Route path="/services/restservice/new" exact component={CreateRestService} />
                        <Route path="/services/soapservice/new" exact component={CreateSoapService} />

                    </main>

                </BrowserRouter>

            </>
        );
    }
}
export default App;