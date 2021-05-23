/*---------------------------------\
      Components to wear         
\----------------------------------*/
import React from 'react';

/*---- Declared component ----------*/
function UsersList(props){
    return(
        <React.Fragment>
            <tbody>
                <tr>
	                <td>{props.id}</td>
	                <td>{props.firstName}</td>
	                <td>{props.lastName}</td>
	                <td>{props.email}</td>
	                <td>{props.createdAt}</td>
                </tr>
            </tbody>
        </React.Fragment>
    )
}
export default UsersList;