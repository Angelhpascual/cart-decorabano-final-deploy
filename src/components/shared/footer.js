import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
    //Shared with the whole app
    return ( 
        <footer className={`${styles.footer}  mt-5 p-3 bg-primary text-white`}>
            2020 &copy; React Cart by angelhpascual for Decorabaño.com 
        </footer>
     );
}
 
export default Footer;