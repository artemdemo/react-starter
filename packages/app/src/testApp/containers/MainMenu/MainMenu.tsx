import React, { useContext } from 'react';
import classnames from 'classnames';
import { useTranslation } from '../../../hooks/useTranslation';
import { AppContext } from '../../../contexts/app/AppContext';
import { Navbar } from 'base-ui';
import { NavbarLink } from 'base-ui';

type TProps = {
  className?: string;
};

export const MainMenu: React.FC<TProps> = (props) => {
  const appContext = useContext(AppContext);
  const { t } = useTranslation();

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
