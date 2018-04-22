import React, { Component } from 'react';
import Popular from './../../components/PopularLayout/Popular';
import { getRepos } from './../../api/repoApi';

export default class PopularContainer extends Component {

	constructor (props) {
		super(props);

		this.state = {
            repos: [],
            isSelected: 'All',
            isLoading: true,
		}
	}

	componentDidMount() {
		this.showRepos(this.state.isSelected);
	}

	showRepos = async (item) => {
		this.setState({
    		isLoading: true
    	});

		const repos = await getRepos(item);
		
    	this.setState({
    		repos,
    		isSelected: item,
    		isLoading: false
    	});
	}

    render() {
        return (
            <Popular
            	showRepo={this.showRepos}
            	isSelected={this.state.isSelected}
            	repoData={this.state.repos}
            	isLoading={this.state.isLoading} />
        );
    }
}
