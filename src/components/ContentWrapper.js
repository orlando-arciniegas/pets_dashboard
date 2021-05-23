/*---------------------------------\
      Components to wear         
\----------------------------------*/
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import TopBar from './TopBar';
import Users from './Users';
import Products from './Products';

/*---- Declared component ----------*/
function ContentWrapper(){

    return(
        <React.Fragment>

			{/* Main Content */}
			<div id="content-wrapper" className="d-flex flex-column">
                
                <div id="content">
                    <TopBar />
                    <h1 className="h3 text-gray-800 text-center">Consulta los datos existentes en la base de datos.</h1>
					<Switch>
                        <Route path="/users" component={Users} />
                        <Route path="/products" component={Products} />
                    </Switch>
                </div>

            </div>    
            {/* End Main Content */}
            
        </React.Fragment>
    )

}
export default ContentWrapper;