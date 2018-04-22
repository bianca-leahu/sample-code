import React, { Component } from 'react';
// import Link from 'react-router-dom/Link';
import NavLink from 'react-router-dom/NavLink';
import style from "./../../main.css";

export default class Header extends Component {
	render() {
		return(
			<div className={style.header}>
				<NavLink exact activeClassName={style.activePath} to='/'>HOME</NavLink>
				<NavLink activeClassName={style.activePath} to='/github-repos'>GITHUB</NavLink>
			</div>
		)
	}
}