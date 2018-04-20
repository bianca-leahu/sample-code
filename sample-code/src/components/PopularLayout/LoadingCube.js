import React, { Component } from 'react';
import style from "./../../main.css";

export default class LoadingCube extends Component {
    render() {
        return (
            <div className={style.skCubeGrid}>
                <div className={style.skCube1}></div>
                <div className={style.skCube2}></div>
                <div className={style.skCube3}></div>
                <div className={style.skCube4}></div>
                <div className={style.skCube5}></div>
                <div className={style.skCube6}></div>
                <div className={style.skCube7}></div>
                <div className={style.skCube8}></div>
                <div className={style.skCube9}></div>
            </div>
        );
    }
}