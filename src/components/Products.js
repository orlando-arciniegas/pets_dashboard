/*---------------------------------\
      Components to wear         
\----------------------------------*/
import React, {Component} from 'react';
import ProductsList from './ProductsList';

/*---- Declared component ----------*/
class Products extends Component{

    constructor(){
        super()
        this.state ={
       	countriesList : []
        }
    }
    
    /*---- To Receive data from the Api  & mount on the component ----------*/
    componentDidMount() {
    fetch("api/products")
    .then(res => res.json())
    .then(result => {
        console.log(result)
        this.setState({
            isLoaded: true,
            countriesList: result.data
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
							<div className="table-responsive" style={{width: '100%', margin: '0 auto'}}>
								<table className="table table-bordered" id="dataTable" cellSpacing="0">
									<thead>
										<tr>
                                            <th>Nombre</th>
                                            <th>Descripcion</th>
                                            <th>Precio</th>
                                            <th>Stock</th>
                                            <th>Fecha de ingreso</th>
										</tr>
									</thead>
                                    {/*---- For each to iterates over items in state ----------*/}
									{this.state.countriesList.map((country,index)=>{
                               		return <ProductsList {...country} key={index} />
                            		})} 	
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
        )
	}
}
export default Products;