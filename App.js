import React from 'react'

import axios from 'axios'

import TableForm from './Table'

class App extends React.Component{
    constructor(props){
        super()
        this.state={
            tickets:[ ]
        }
    }

    componentDidMount(){
        axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=1c8eaa8d0d96d863')
        .then(response=>{
            console.log(response.data)
            this.setState(()=>({
                tickets:response.data
            }))
        })
    }
    render(){
        return(
            <div>
                <h2>Ticket Master</h2>
                <h3>ticket Listing{this.state.tickets.length}</h3>
                <TableForm tickets={this.state.tickets}/>
            </div>
        )
    }
    }

    export default App