import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.welcomeText}>
          <p>
            This portal is an open knowledge base on DevOps and Delivery for Salesforce.<br />
            Here you'll find practical materials to help you build a reliable delivery process for your project.
          </p>
          <p>
            Explore. Share. Contribute. Write your own articles!<br />
            The project is open to everyone who wants to grow — and help others grow too.
          </p>
          <p style={{ marginTop: '1rem' }}>
            <em>Best regards,</em><br />
            <strong>Stanislav Dudkov</strong>, Project Lead & Knowledge Curator
          </p>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            I want to know!
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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
