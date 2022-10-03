import React from 'react';
import Logo from 'shared/assets/images/icons/Logo';
import styles from './index.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      Starter pack to coding
    </header>
  );
};

export default Header;