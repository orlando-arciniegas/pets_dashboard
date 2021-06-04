/*---------------------------------\
      Components to wear         
\----------------------------------*/
import React, {Component} from 'react';
import UsersList from './UsersList';

let url = "http://grupo-pets.herokuapp.com/api/users";
let bearer = `Bearer + eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJub21icmUiOiJPcmxhbmRvIiwiZW1haWwiOiJvcmxhbmRvQGVtYWlsLmNvbSJ9LCJpYXQiOjE2MjE3ODMxMzJ9.BIyq2r9jL3Lh2O_WUrThyBW3ncnz564HxRHfK0Richs`;
let objectUrl = {
    method: 'GET',
    mode: 'no-cors',
    withCredentials: true,
    credentials: 'include',
    headers: {
        "Access-Control-Allow-Origin": "*",
        'Authorization': bearer,
        'X-FP-API-KEY': 'secretkey',
        'Content-Type': 'application/json'
    }
}

/*---- Declared component ----------*/
class Users extends Component{
    
    constructor(){
        super()
        this.state ={
       	usersList : []
        }
    }

    /*---- To Receive data from the Api  & mount on the component ----------*/
    componentDidMount() {
    fetch(url, objectUrl)
    .then(res => res.json())
    .then(result => {
        console.log(result)
        this.setState({
            isLoaded: true,
            usersList: result.data
        });
        },
        (error) => {
        this.setState({
            isLoaded: true,
            error
        });
        }
      )
    }

    /*---- Render component ----------*/
    render(){
    return(
        <React.Fragment>
				   
					{/*<!-- Table -->*/}
					<div className="card shadow mb-4 ml-4 mr-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" cellSpacing="0">
									<thead>
										<tr>
                                            <th>ID</th>
                                            <th>Nombre</th>
                                            <th>Apellido</th>
                                            <th>Email</th>
                                            <th>Fecha creación</th>
										</tr>
									</thead>
                                    {/*---- .Map() to iterates over items in state ----------*/}
									{this.state.usersList.map((users,index)=>{
                               		return <UsersList {...users} key={index} />
                            		})} 	
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
        )
	}
}
export default Users;