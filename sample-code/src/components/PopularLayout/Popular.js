import PropTypes from 'prop-types';
import React, { Component } from 'react';
import LoadingCube from './LoadingCube';
import style from "./../../main.css";

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
                <ul className={style.navigation}>
                    {navigationItems.map((item) =>
                        <li
                            key={item}
                            onClick={() => showRepo(item)}
                            className={item === isSelected ? style.selected : style.navigationItem}>
                            {item}
                        </li>)}
                </ul>

                {isLoading ? 
                    <LoadingCube /> : 

                    <div className={style.repoContainer}>
                        {repoData.map((item) =>
                            <div
                                key={item.id}
                                className={style.repoItem}>

                                <img
                                    src={item.owner.avatar_url}
                                    className={style.repoAvatar} />

                                <p className={style.repoName}>{item.name}</p>
                            </div>)
                        }
                    </div>}
            </div>
        );
    }
}