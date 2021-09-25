import React, { Suspense, useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import Header from '../header/header';
import Main from '../main/main';
import About from '../about/about';
import Footer from '../footer/footer';
import styles from './initial.module.scss';
import { setNewLanguage } from '../../redux/actions';
const Skills = React.lazy(() => import('../skills/skills'));
const Portfolio = React.lazy(() => import('../portfolio/portfolio'));
const Experience = React.lazy(() => import('../experience/experience'));
const Contacts = React.lazy(() => import('../contacts/contacts'));



const Initial = ({words, setNewLanguage}) => {
    const [isLanguage, setIsLanguage] = useState(false)
    const refSeparator = useRef();
    
    useEffect(() => {
        const lang = localStorage.getItem('language');
        if(lang){
            setNewLanguage(lang);
        }
        setIsLanguage(true);
    }, [])

    return(
        <>
            {isLanguage ? 
            <div className={styles.container}>
                <Header refSeparator={refSeparator} />
                <Main />
                <div ref={refSeparator}></div>
                <Switch>
                    <Route exact path='/' render={() => <Redirect to='/about' />} />
                    <Route path='/about' render={() => <About />} />
                    <Route path='/skills' render={() => {
                        return <Suspense fallback={<div>{words.loading}...</div>}>
                            <Skills />
                        </Suspense>
                    }} />
                    <Route path='/portfolio' render={() => {
                        return <Suspense fallback={<div>{words.loading}...</div>}>
                            <Portfolio />
                        </Suspense>
                    }} />
                    <Route path='/experience' render={() => {
                        return <Suspense fallback={<div>{words.loading}...</div>}>
                            <Experience />
                        </Suspense>
                    }} />
                    <Route path='/contacts' render={() => {
                        return <Suspense fallback={<div>{words.loading}...</div>}>
                            <Contacts />
                        </Suspense>
                    }} />
                </Switch>
                <Footer />
            </div>
            :
            <div></div>}
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        words: state.main.words
    }
}

const initialCompose = compose(withRouter, connect(mapStateToProps, {setNewLanguage}))(Initial);

export default initialCompose;
