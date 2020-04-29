import React, { Component } from 'react'

export default class pagination extends Component {

    createPagination = () => {
        //_.range(1 . 10)  create array with 10 elemetns
        const numOfPages = Array.from({ length: this.props.numOfPages }, (v, k) => k + 1);


        const paginatonPages = numOfPages.map((x, i) => {
            return <li key={i} className={this.props.pageNum === i + 1 ? 'page-item active' : "page-item"}>
                <button className="page-link" onClick={() => this.props.onChange(i + 1)} href="/">{i + 1}</button>
            </li>
        })
        return paginatonPages
    }

    intpagenumber = () => {
        if (this.props.pageNum < this.props.numOfPages) {
            this.props.onChange(this.props.pageNum + 1)
        }

    }

    decpagenumber = () => {
        if (this.props.pageNum >= this.props.numOfPages) {
            this.props.onChange(this.props.pageNum - 1)
        }
    }
    render() {
        if (this.props.numOfPages === 1) {
            return null;
        }
        return (
            <nav>
                <ul className="pagination">

                    <li className="page-item"><button className="page-link" onClick={this.decpagenumber} href="/">Previous</button></li>
                    {this.createPagination()}
                    <li className="page-item"><button className="page-link" onClick={this.intpagenumber} href="/">Next</button></li>
                </ul>
            </nav>
        )
    }
}
