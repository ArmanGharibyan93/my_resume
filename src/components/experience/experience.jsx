import React from 'react';
import { connect } from 'react-redux';
import styles from './experience.module.scss';
import { Helmet } from 'react-helmet';

const Experience = ({words}) => {
    return(
        <>
            <Helmet>
                <meta 
                    name="keywords" 
                    content="Experience, work"
                />
                <meta
                    name="description"
                    content="Experience of Arman Gharibyan"
                />
                <title>{words.experienceTitle}</title>
            </Helmet>
            <div className={styles.container}>
            <div className={styles.title}>{words.experienceTitle}</div>
            <div className={styles.item}>
                    <div className={styles.time}>{words.from2021}</div>
                    <ul>
                        <li>{words.from2021Info1}</li>
                    </ul>
                </div>
                <div className={styles.item}>
                    <div className={styles.time}>{words.from2019}</div>
                    <ul>
                        <li>{words.from2019Info1}</li>
                        <li>{words.from2019Info2}</li>
                        <li>{words.from2019Info3}</li>
                        <li>{words.from2019Info4}</li>
                    </ul>
                </div>
                <div className={styles.item}>
                    <div className={styles.time}>{words.from2017}</div>
                    <ul>
                        <li>{words.from2017Info1}</li>
                        <li>{words.from2017Info2}</li>
                    </ul>
                </div>
            </div>
        </>
        
    )
}

const mapStateToProps = (state) => {
    return{
        words: state.main.words
    }
}

export default connect(mapStateToProps, {})(Experience)