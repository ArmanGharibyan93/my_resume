import React from 'react';
import { connect } from 'react-redux';
import styles from './about.module.scss';
import { Helmet } from 'react-helmet';

const About = ({words}) => {
    return(
        <>
            <Helmet>
                <meta 
                    name="keywords" 
                    content="programer, web, development"
                />
                <meta
                    name="description"
                    content="About Arman Gharibyan"
                />
                <title>{words.aboutMe}</title>
            </Helmet>
            <div className={styles.container}>
                <div className={styles.title}>{words.aboutMe}</div>
                <pre className={styles.text}>{words.aboutMeText}</pre>
                <div className={styles.title}>{words.education}</div>
                <pre className={styles.text}>{words.educationText1}</pre>
                <pre className={styles.text}>{words.educationText2}</pre>
                <div className={styles.title}>{words.languages}</div>
                <div className={styles.text}>{`${words.armenian}: ${words.native}`}</div>
                <div className={styles.text}>{`${words.english}: ${words.basic}`}</div>
                <div className={styles.text}>{`${words.russian}: ${words.native}`}</div>
                <div className={styles.text}>{`${words.spanish}: ${words.veryGood}`}</div>
            </div>
        </>
        
    )
}

const mapStateToProps = (state) => {
    return{
        words: state.main.words
    }
}

export default connect(mapStateToProps, {})(About)