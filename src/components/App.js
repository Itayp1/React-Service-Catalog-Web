import React from "react";
import TopNavbar from "./TopNavbar";
import CardList from "./CardList";
import PendingRequestList from './PendingRequestList'
import { BrowserRouter, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";


class App extends React.Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <div>
                        <TopNavbar />
                        <Route path="/" exact component={CardList} />
                        <Route path="/status" exact component={PendingRequestList} />

                    </div>
                </BrowserRouter>

            </>
        );
    }
}
export default App;