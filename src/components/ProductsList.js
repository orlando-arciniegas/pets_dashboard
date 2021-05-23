/*---------------------------------\
      Components to wear         
\----------------------------------*/
import React from 'react';

/*---- Declared component ----------*/
function ProductsList(props){
    return(
        <React.Fragment>
            <tbody>
                <tr>
	                <td>{props.name}</td>
	                <td>{props.description}</td>
	                <td>{props.price}</td>
	                <td>{props.stock}</td>
	                <td>{props.createdAt}</td>
                </tr>
            </tbody>
        </React.Fragment>
    )
}
export default ProductsList;