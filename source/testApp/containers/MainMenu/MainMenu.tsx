import React from 'react';
import classnames from 'classnames';
import {Navbar} from '../../../components/Navbar/Navbar';
import {NavbarLink} from '../../../components/Navbar/NavbarLink';
import {t} from '../../../services/i18n';

type TProps = {
  className?: string;
};

export const MainMenu: React.FC<TProps> = (props) => {
  const handleVersionClick = () => {
    console.log(ENV);
  };

  return (
    <Navbar
      className={classnames(props.className, 'mb-3')}
      sideContent={(
        <NavbarLink onClick={handleVersionClick}>{ENV.appVersion}</NavbarLink>
      )}
    >
      {/* I need here `div` in order to support flex styling from the `Navbar` */}
      <NavbarLink to='/' exact>{t('main')}</NavbarLink>
      <NavbarLink to='/campaigns'>{t('campaigns')}</NavbarLink>
      <NavbarLink to='/components'>{t('components')}</NavbarLink>
    </Navbar>
  );
}
