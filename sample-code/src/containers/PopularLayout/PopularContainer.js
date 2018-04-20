// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Popular from './../../components/PopularLayout/Popular';
import { getRepos } from './../../api/api';

class PopularContainer extends Component {

	constructor (props) {
		super(props);

		this.state = {
            repos: [],
            isSelected: 'All'
		}
	}

	componentDidMount() {
		this.showRepos(this.state.isSelected);
	}

	showRepos = async (item) => {
		const repos = await getRepos(item);
    	this.setState({
    		repos,
    		isSelected: item
    	});
	}

    render() {
        return (
            <Popular
            	showRepo={this.showRepos}
            	isSelected={this.state.isSelected}
            	repoData={this.state.repos} />
        );
    }
}

export default PopularContainer;