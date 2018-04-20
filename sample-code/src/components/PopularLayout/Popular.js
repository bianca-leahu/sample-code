import PropTypes from 'prop-types';
import React, { Component } from 'react';
import LoadingCube from './LoadingCube';

const navigationItems = ['All', 'Javascript', 'Python', 'Ruby', 'CSS', 'Java'];

export default class Popular extends Component {
    static propTypes = {
        isSelected: PropTypes.string.isRequired,
        showRepo: PropTypes.func.isRequired,
        repoData: PropTypes.array.isRequired,
    }

    render() {
    	const { isSelected, showRepo, repoData, isLoading } = this.props;

        return (
            <div>
                <ul className='navigation'>
                    {navigationItems.map((item) =>
                        <li
                            key={item}
                            onClick={() => showRepo(item)}
                            className={item === isSelected ? 'navigation-item is-selected' : 'navigation-item'}>
                            {item}
                        </li>)}
                </ul>

                {isLoading ? 
                    <LoadingCube /> : 

                    <div className='repo-container'>
                        {repoData.map((item) =>
                            <div
                                key={item.id}
                                className='repo-item'>

                                <img
                                    src={item.owner.avatar_url}
                                    className='repo-avatar' />

                                <p className='repo-name'>{item.name}</p>
                            </div>)
                        }
                    </div>}
            </div>
        );
    }
}