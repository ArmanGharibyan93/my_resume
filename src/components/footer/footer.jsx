import React from 'react';
import { connect } from 'react-redux';
import styles from './footer.module.scss';
import instImg from '../../assets/instagram.png';
import LIImg from '../../assets/LI.png';
import gitImg from '../../assets/github.png';

const Footer = () => {
    return(
        <div className={styles.container}>
            <a title="LinkedIn" href="https://es.linkedin.com/in/armangharibyan" rel="noreferrer" target="_blank" >
                <img className={styles.img} src={LIImg} alt="" />
            </a>
            <a title="Github" href="https://github.com/ArmanGharibyan93" rel="noreferrer" target="_blank" >
                <img className={styles.img} src={gitImg} alt="" />
            </a>
            <a title="Instagram" href="https://www.instagram.com/_armangharibyan_/" rel="noreferrer" target="_blank" >
                <img className={styles.img} src={instImg} alt="" />
            </a>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        words: state.main.words
    }
}

export default connect(mapStateToProps, {})(Footer)