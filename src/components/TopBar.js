/*---------------------------------\
      Components to wear         
\----------------------------------*/
import React from 'react';

/*---- Declared component ----------*/
function TopBar(){
    return(
        <React.Fragment>
				{/* Topbar */}
				<nav className="navbar navbar-expand navbar-light bg-dark topbar mb-4 static-top shadow">
					<h3 className="h3 text-white">Grupo Pets</h3>
					{/* Topbar Navbar */}
					<ul className="navbar-nav ml-auto">

						{/* Nav Item - User Icon*/}
						<li className="nav-item">
							<span className="nav-link">
								<i className="fas fa-user"></i>
							</span>
						</li>

						<div className="topbar-divider d-none d-sm-block"></div>

						{/* Nav Item - User Name */}
						<li className="nav-item no-arrow">
							<span className="nav-link">
								<span className="mr-2 d-lg-inline text-white small">John Doe</span>
							</span>
						</li>

					</ul>

				</nav>
				{/* End of Topbar */}

        </React.Fragment>
    )
}
export default TopBar;