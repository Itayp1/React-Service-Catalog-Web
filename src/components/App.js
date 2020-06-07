import React from "react";
import TopNavbar from "./navbar/TopNavbar";
import CardList from "./Pages/ServicesListPage/ServicesListPage";
import PendingApprovalListPage from './Pages/PendingApprovalListPage/PendingApprovalListPage'
import CreateRestService from './Pages/forms/CreateRestService/CreateRestServicePage'
import CreateSoapService from './Pages/forms/CreateSoapService/CreateSoapServicePage'
import UpdateSoapServicePage from './Pages/forms/updateSoapService/UpdateSoapServicePage'
import UpdateRestServicePage from './Pages/forms/updateRestService/UpdateRestServicePage'
import ConfirmationRestServicePage from './Pages/forms/confirmationRestService/ConfirmationRestServicePage'
import ConfirmationSoapServicePage from './Pages/forms/confirmationSoapService/ConfirmationSoapServicePage'
import ServiceStatusPage from './Pages/ServiceStatusPage/ServiceStatusPage'
import RestServicePage from "./Pages/RestServicePage/RestServicePage";
import SoapServicePage from "./Pages/SoapServicePage/SoapServicePage";

import MultiPart from "./Commons/forms/Multipart";
import NotFound from "./Pages/NotFound/NotFound"
import StepProcess from './Commons/processSteps/StepProcess'

import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'

const TopNavbarWithRouter = withRouter(TopNavbar);

class App extends React.Component {
    render() {
        return (
            <>
                <BrowserRouter>

                    <TopNavbarWithRouter />



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
                        {/* <Redirect from="/" exact to="/services/pendingapproval" /> */}
                        <Switch>
                            <Route path="/services/getstatus/:status/:type/:serviceNameEng" exact component={ServiceStatusPage} />

                            <Route path="/multi" exact component={MultiPart} />
                            <Route path="/services/rest/:serviceNameEng" exact component={RestServicePage} />
                            <Route path="/services/soap/:serviceNameEng" exact component={SoapServicePage} />
                            <Route path="/services/pendingapproval" exact component={PendingApprovalListPage} />
                            <Route path="/services/restservice/new" exact component={CreateRestService} />
                            <Route path="/services/soapservice/new" exact component={CreateSoapService} />
                            <Route path="/services/restservice/update" exact component={UpdateRestServicePage} />
                            <Route path="/services/soapservice/update" exact component={UpdateSoapServicePage} />
                            <Route path="/services/restservice/confirm/:id" exact component={ConfirmationRestServicePage} />
                            <Route path="/services/soapservice/confirm/:id" exact component={ConfirmationSoapServicePage} />
                            <Route path="/services" exact component={CardList} />
                            <Route path="/" exact component={CardList} />

                            <Route path="/" component={NotFound} />
                            <Route path="/404" component={NotFound} />

                        </Switch>


                    </main>

                </BrowserRouter>

            </>
        );
    }
}
export default App;