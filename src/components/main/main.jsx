import React from 'react';
import { connect } from 'react-redux';
import styles from './main.module.scss';
import mainImg from '../../assets/main.jpg'
import profile from '../../assets/profile.jpg'

const Main = ({words, link}) => {
    return(
        <div className={styles.container}>
            <img className={styles.mainImg} src={mainImg} alt="" />
            <div className={styles.profileContiner}>
                <div className={styles.profileContiner2}>
                    <img className={styles.profileimg} src={profile} alt="" />
                    <div className={styles.info}>
                        <div className={styles.name}>{words.name}</div>
                        <div className={styles.profession}>{words.profession}</div>
                    </div>
                    <a target='_blank' href={link} rel="noreferrer"><input className={styles.cvButton} type="button" value={words.downloadCV} /></a>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        words: state.main.words,
        link: state.main.link
    }
}

export default connect(mapStateToProps, {})(Main)