import React from 'react';
import { connect } from 'react-redux';
import styles from './portfolio.module.scss';
import { Helmet } from 'react-helmet';

const Portfolio = ({words}) => {
    return(
        <>
            <Helmet>
                <meta 
                    name="keywords" 
                    content="portfolio, works"
                />
                <meta
                    name="description"
                    content="Portfolio of Arman Gharibyan"
                />
                <title>{words.portfolioTitle}</title>
            </Helmet>
            <div className={styles.container}>
                <div className={styles.title}>{words.portfolioTitle}</div>
                <div className={styles.item}>
                    <div className={styles.link}>
                        <a href="https://bookly.gq" rel="noopener noreferrer" target="_blank">Bookly</a>
                    </div>
                    <div className={styles.info}>MERN(Mongo DB + Express + React + Node.js) stack {words.website}</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.link}>
                        <a href="http://rding.es" rel="noopener noreferrer" target="_blank">RDING</a>
                    </div>
                    <div className={styles.info}>Next.js + Nestjs + TypeScript + mysql {words.website}</div>
                </div>
                <div className={styles.item}>
                    <a href="http://murarchitecture.es" target="_blank" rel="noopener noreferrer">Murarchitecture.es</a>
                    <div className={styles.info}>MERN(Mongo DB + Express + React + Node.js) stack {words.website}</div>
                </div>
                <div className={styles.item}>
                    <a href="https://meatshop.am" target="_blank" rel="noopener noreferrer">Meatshop.am</a>
                    <div className={styles.info}>React + Apollo + Graphql {words.website}</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.link}>
                        <a href="http://passivehome.es" rel="noopener noreferrer" target="_blank">Passivehome.es</a>
                        /
                        <a href="http://passivehome.cat" rel="noopener noreferrer" target="_blank">Passivehome.cat</a>
                    </div>
                    <div className={styles.info}>Next.js + Nest.js + Typescript + MongoDB {words.website}</div>
                </div>
                <div className={styles.item}>
                    <a href="https://play.google.com/store/apps/details?id=com.pyunik.Vocabulary" target="_blank" rel="noopener noreferrer">My Vocabulary</a>
                    <div className={styles.info}>{words.myReactNativeApp}</div>
                </div>
                <div className={styles.item}>
                    <a href="https://play.google.com/store/apps/details?id=com.pyunik.MoneyManager" target="_blank" rel="noopener noreferrer">Money Manager</a>
                    <div className={styles.info}>{words.myReactNativeApp}</div>
                </div>
                <div className={styles.item}>
                    <a href="https://play.google.com/store/apps/details?id=com.Pyunik.AirSuperioritiyAllieninvasion" target="_blank" rel="noopener noreferrer">AIR SUPERIORITY</a>
                    <div className={styles.info}>{words.myUnityGame}</div>
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

export default connect(mapStateToProps, {})(Portfolio)