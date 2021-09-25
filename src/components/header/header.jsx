import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setCvLink, setNewLanguage } from '../../redux/actions';
import styles from './header.module.scss';
import Hamburger from 'hamburger-react';
import { useRef } from 'react';
import aboutImg from '../../assets/about.png';
import skillsImg from '../../assets/skills.png';
import portfolioImg from '../../assets/portfolio.png';
import experienceImg from '../../assets/experience.png';
import contactsImg from '../../assets/contacts.png';

const Header = (props) => {
    const { words, setNewLanguage, refSeparator, setCvLink } = props;
    const [language, setLanguage] = useState('eng')

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef('');

    const cvLinkGenerator = (lang) => {
        return `https://pyunik-main-api.herokuapp.com/api/${lang}`;
    }

    useEffect(() => {
        const language = localStorage.getItem('language');
        const cvLink = cvLinkGenerator(language || 'eng');
        setCvLink(cvLink);
        setLanguage(language || 'eng');
    }, [])

    const changeLanguageHandler = (lang) => {
        setLanguage(lang);
        const cvLink = cvLinkGenerator(lang);
        setCvLink(cvLink);
        localStorage.setItem('language', lang);
        setNewLanguage(lang);
    }

    const menuClickHandler = (value) => {
        setIsOpen(value);
        const menu = menuRef.current;
        if(value){
            document.body.style.overflow = 'hidden';
            menu.style.left = "0";
            menu.style.transition= "left 0.5s";
        }else{
            document.body.style.overflow = 'scroll';    
            menu.style.left = "100vw";
            menu.style.transition= "left 0.5s";
        }
    }

    const linkClickhendler = () => {
        menuClickHandler(false);
        refSeparator.current.scrollIntoView({block: "start",behavior: "smooth" })
    }

    return(
        <div className={styles.container}>
            <div className={styles.langContainer}>
                <select value={language} defaultValue="eng" onChange={(e) => changeLanguageHandler(e.target.value)}>
                    <option key="arm" value="arm">{words.arm}</option>
                    <option key="cat" value="cat">{words.cat}</option>
                    <option key="eng" value="eng">{words.eng}</option>
                    <option key="rus" value="rus">{words.rus}</option>
                    <option key="sp" value="sp">{words.sp}</option>
                </select>
            </div>
            <div className={styles.rightPart}>
                <div className={styles.itemsContainer}>
                    <NavLink activeClassName={styles.activeLink} className={styles.item} to='/about' onClick={linkClickhendler}>
                        <div>{words.about}</div>
                    </NavLink>
                    <NavLink activeClassName={styles.activeLink} className={styles.item} to='/skills' onClick={linkClickhendler}>
                        <div>{words.skills}</div>
                    </NavLink>
                    <NavLink activeClassName={styles.activeLink} className={styles.item} to='/portfolio' onClick={linkClickhendler}>
                        <div>{words.portfolio}</div>
                    </NavLink>
                    <NavLink activeClassName={styles.activeLink} className={styles.item} to='/experience' onClick={linkClickhendler}>
                        <div>{words.experience}</div>
                    </NavLink>
                    <NavLink activeClassName={styles.activeLink} className={styles.item} to='contacts' >
                        <div>{words.contacts}</div>
                    </NavLink> 
                </div>
                <div className={styles.burgerMenu}>
                    <Hamburger size={20} toggled={isOpen} toggle={menuClickHandler} />
                </div>
            </div>
            <div ref={menuRef} className={styles.menuContainer}>
                <div onClick={() => menuClickHandler(false)} className={styles.sideBar}></div>
                <div className={styles.menu}>
                    <NavLink activeClassName={styles.activeLink} className={styles.menuItem} to='/about' onClick={linkClickhendler}>
                        <img className={styles.icon} src={aboutImg} alt="" />
                        <div>{words.about}</div>
                    </NavLink>
                    <NavLink activeClassName={styles.activeLink} className={styles.menuItem} to='/skills' onClick={linkClickhendler}>
                        <img className={styles.icon} src={skillsImg} alt="" />
                        <div>{words.skills}</div>
                    </NavLink>
                    <NavLink activeClassName={styles.activeLink} className={styles.menuItem} to='/portfolio' onClick={linkClickhendler}>
                        <img className={styles.icon} src={portfolioImg} alt="" />
                        <div>{words.portfolio}</div>
                    </NavLink>
                    <NavLink activeClassName={styles.activeLink} className={styles.menuItem} to='/experience' onClick={linkClickhendler}>
                        <img className={styles.icon} src={experienceImg} alt="" />
                        <div>{words.experience}</div>
                    </NavLink>
                    <NavLink activeClassName={styles.activeLink} className={styles.menuItem} to='contacts' onClick={linkClickhendler}>
                        <img className={styles.icon} src={contactsImg} alt="" />
                        <div>{words.contacts}</div>
                    </NavLink> 
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        words: state.main.words
    }
}



export default connect(mapStateToProps, {setNewLanguage, setCvLink})(Header)