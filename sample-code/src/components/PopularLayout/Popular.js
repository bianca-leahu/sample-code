import PropTypes from 'prop-types';
import React, { Component } from 'react';

const navigationItems = ['All', 'Javascript', 'Python', 'Ruby', 'CSS', 'Java'];

Navigation.propTypes = {
    selectNavigationItem: PropTypes.func.isRequired,
    selectedItems: PropTypes.string.isRequired,
};

function Navigation(props) {
	const { selectNavigationItem, selectedItems } = props;
	
	return (
		<ul className='navigation'>
            {navigationItems.map((item) =>
                <li
                	key={item}
                	onClick={() => selectNavigationItem(item)}
                	className={item === selectedItems ? 'navigation-item is-selected' : 'navigation-item'}>
                    {item}
                </li>)}
        </ul>
    )
}

class Popular extends Component {
	constructor (props) {
		super(props);

		this.state = {
			isSelected: 'All'
		}
	}

	selectNavigationItem = (item) => {
		this.setState({
			isSelected: item
		});
	}

    render() {
    	const { isSelected } = this.state;

        return (
            <Navigation
            	selectedItems={isSelected}
            	selectNavigationItem={this.selectNavigationItem}/>
        );
    }
}

export default Popular;