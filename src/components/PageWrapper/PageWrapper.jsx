import React, { PureComponent, PropTypes } from 'react';
import { Link } from 'react-router';
import MarkGithubIcon from 'react-octicons-svg/dist/MarkGithubIcon';

import { ElectronSVG } from '../SVG';
import NavLink from './NavLink';

import styles from './PageWrapper.scss';

export default class PageWrapper extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div>
        <header className={styles.header}>
          <div className={styles.container}>

            <Link className={styles.mainLink} to="/">
              <ElectronSVG width={48} height={48} />
              FORGE
            </Link>

            <nav className={styles.nav}>
              <NavLink href="/" text="Getting Started" />
              <NavLink href="/cli" text="CLI Usage" />
              <NavLink href="https://docs.electronforge.io" text="API Docs" external />
              <NavLink href="/templates" text="Templates" />
              <NavLink href="/team" text="Team" />
              <NavLink
                href="https://github.com/electron-userland/electron-forge"
                text={<MarkGithubIcon />}
                external
              />
            </nav>
          </div>
        </header>
        <div className={styles.pageContainer}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
