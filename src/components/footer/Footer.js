import React from 'react';
import {
  ImFacebook2, ImInstagram, ImTwitter, ImYoutube,
} from 'react-icons/im';
import styles from './styles/footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles['flex-container']}>
        <div className={styles.title}>
          <ImFacebook2 className={styles.icons}/>
          <ImInstagram className={styles.icons} />
          <ImTwitter className={styles.icons2} />
          <ImYoutube className={styles.icons2} />
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.link} href=""><a href='https://github.com/patekprakhar'>Github</a></div>
            <div className={styles.link} href=""><a href='https://www.linkedin.com/in/prakhar-shukla-963123112'>Linkedin</a></div>
          </div>

          <div className={styles.column}>
            <div className={styles.link} href="#">Privacy Rules</div>
            <div className={styles.link} href="#">Copyright Law</div>
            <div className={styles.link} href="#">Legal Notices</div>
          </div>

          <div className={styles.column}>
            <div className={styles.link} href="#">Help Center</div>
            <div className={styles.link} href="#">Wanna work at WeSurf?</div>
            <div className={styles.link} href="#">Cookie Preferences</div>
          </div>

          <div className={styles.column}>
            <div className={styles.link} href="#">Corporate Information</div>
            <div className={styles.link} href="#">Gift Cards</div>
            <div className={styles.link} href="#">Terms of Use</div>
          </div>

        </div>
        <div className={styles.link} mailto="prakharshukla@gmail.com">Email</div>
      </div>
      <div className={styles['service-button-container']}>
        <div className={styles['service-button']}>@2022 Developed by Prakhar Shukla</div>
      </div>
    </div>
  );
}

export default Footer;
