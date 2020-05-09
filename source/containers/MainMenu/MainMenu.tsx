import React from 'react';
import classnames from 'classnames';
import Navbar from '../../components/Navbar/Navbar';
import NavbarLink from '../../components/Navbar/NavbarLink';
import { t } from '../../services/i18n';

type TProps = {
    className: string;
};

type TState = {};

class MainMenu extends React.PureComponent<TProps, TState> {
    static defaultProps = {
        className: undefined,
    };

    handleVersionClick = () => {
        console.log(ENV);
    };

    render(): React.ReactNode {
        return (
            <Navbar className={classnames(this.props.className, 'mb-3')}>
                {/* I need here `div` in order to support flex styling from the `Navbar` */}
                <div>
                    <NavbarLink to='/'>{t('main')}</NavbarLink>
                    <NavbarLink to='/campaigns'>{t('campaigns')}</NavbarLink>
                    <NavbarLink to='/components'>{t('components')}</NavbarLink>
                </div>
                <div>
                    <NavbarLink onClick={this.handleVersionClick}>{ENV.version}</NavbarLink>
                </div>
            </Navbar>
        );
    }
}

export default MainMenu;
