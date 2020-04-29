import React from "react";
import TopNavbar from "./navbar/TopNavbar";
import CardList from "./Pages/ServicesListPage/ServicesListPage";
import PendingRequestList from './Pages/PendingRequestListPage/PendingRequestListPage'
import CreateRestService from './Pages/forms/CreateRestService/CreateRestServicePage'
import CreateSoapService from './Pages/forms/CreateSoapService/CreateSoapServicePage'
import UpdateSoapServicePage from './Pages/forms/updateSoapService/UpdateSoapServicePage'
import UpdateRestServicePage from './Pages/forms/updateRestService/UpdateRestServicePage'
import ConfirmationRestServicePage from './Pages/forms/confirmationRestService/ConfirmationRestServicePage'
import ConfirmationSoapServicePage from './Pages/forms/confirmationSoapService/ConfirmationSoapServicePage'

import ProcessSteps from './Commons/processSteps/ProcessSteps'
import Main from './Pages/MainPage/Main'

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

                        <Redirect from="/" exact to="/services/restservice/confirm" />
                        <Route path="/services" exact component={CardList} />
                        <Route path="/Main" exact component={Main} />
                        <Route path="/ProcessSteps" exact component={ProcessSteps} />


                        <Route path="/status" exact component={PendingRequestList} />
                        <Route path="/services/restservice/new" exact component={CreateRestService} />
                        <Route path="/services/soapservice/new" exact component={CreateSoapService} />
                        <Route path="/services/restservice/update" exact component={UpdateRestServicePage} />
                        <Route path="/services/soapservice/update" exact component={UpdateSoapServicePage} />
                        <Route path="/services/restservice/confirm" exact component={ConfirmationRestServicePage} />
                        <Route path="/services/soapservice/confirm" exact component={ConfirmationSoapServicePage} />
                    </main>

                </BrowserRouter>

            </>
        );
    }
}
export default App;