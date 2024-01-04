import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import LogoSvg from '../../static/img/logo.svg';

import styles from './index.module.css';

function ReleaseHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero', styles.releaseBanner)}>
            <div className={clsx('container', styles.releaseContainer)}>
                <Link
                    className={styles.releaseTitle}
                    href="https://github.com/codnect/procyon">
                    {siteConfig.title} {siteConfig.customFields.releaseAnnouncement}
                </Link>
                &nbsp;🥳
            </div>
        </header>
    );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.tagLine}>
              <span>
                  Build
                  <b> high performance</b> and
                  <b> extensible</b> web applications
                  <b> quickly</b>, focus on your
                  <b> business logic</b>
              </span>

              <LogoSvg width={350}/>
        </h1>
        <div className={styles.buttons}>
           <Link
                className={clsx('button button--secondary button--lg', styles.whyProcyon)}
                to="/docs/why-procyon">
                Why Procyon
          </Link>
          <Link
            className={clsx('button button--secondary button--lg', styles.quickStart)}
            to="/docs/quick-start">
            Quick Start
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title=""
      description="Procyon is a HTTP web framework written in Go">
      <ReleaseHeader />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
