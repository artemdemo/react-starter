import React, { useContext } from 'react';
import classnames from 'classnames';
import { Navbar } from '../../../components/Navbar/Navbar';
import { NavbarLink } from '../../../components/Navbar/NavbarLink';
import { t } from '../../../services/i18n';
import { AppContext } from '../../contexts/AppContext';

type TProps = {
  className?: string;
};

export const MainMenu: React.FC<TProps> = (props) => {
  const appContext = useContext(AppContext);

  const handleVersionClick = () => {
    console.log(ENV);
  };

  return (
    <Navbar
      className={classnames(props.className, 'mb-3')}
      sideContent={
        <NavbarLink
          className="text-muted"
          onClick={handleVersionClick}
          dataTestid="mainMenu-app-version"
        >
          {appContext.appVersion}
        </NavbarLink>
      }
    >
      {/* I need here `div` in order to support flex styling from the `Navbar` */}
      <NavbarLink to="/" dataTestid="mainMenu-main">
        {t('main')}
      </NavbarLink>
      <NavbarLink to="/campaigns" dataTestid="mainMenu-campaigns">
        {t('campaigns')}
      </NavbarLink>
      <NavbarLink to="/components" dataTestid="mainMenu-components">
        {t('components')}
      </NavbarLink>
    </Navbar>
  );
};
