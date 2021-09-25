import React from 'react';
import { connect } from 'react-redux';
import styles from './contacts.module.scss';
import { Helmet } from 'react-helmet';
import mail from '../../assets/mail.png';
import phone from '../../assets/phone.png'

const Contacts = ({words}) => {
    return(
        <>
              <Helmet>
                <meta 
                    name="keywords" 
                    content="contacts, mobile, mail, email"
                />
                <meta
                    name="description"
                    content="Contacts of Arman Gharibyan"
                />
                <title>{words.contactsTitle}</title>
            </Helmet>
            <div className={styles.container}>
                <div className={styles.title}>{words.contactsTitle}</div>
                <div className={styles.item}>
                    <img className={styles.icon} src={mail} alt="" />
                    <div className={styles.contact}>arman.gharibyan1993@gmail.com</div>
                </div>
                <div className={styles.item}>
                    <img className={styles.icon} src={phone} alt="" />
                    <div className={styles.contact}>(+34)-633-54-12-69</div>
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

export default connect(mapStateToProps, {})(Contacts)