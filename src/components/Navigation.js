import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<div>
			<ul className='nav'>
				<li>
					<NavLink exact activeClassName='active' to='/'>
						Home
				</NavLink>
				</li>
				<li>
					<NavLink exact activeClassName='active' to='/hashing'>
						Hashing
				</NavLink>
				</li>
				<li>
					<NavLink activeClassName='active' to='/blocks'>
						Blocks
				</NavLink>
				</li>
				<li>
					<NavLink activeClassName='active' to='/blockchain'>
					Blockchains
				</NavLink>
				</li>
			</ul>
		</div>
	)
}

export default Navigation;