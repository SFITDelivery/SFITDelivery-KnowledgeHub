import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Roles',
    Svg: require('@site/static/img/Roles_1.svg').default,
    to: '/docs/Roles/',
    description: (
      <>
        Description of the roles of DevOps / Delivery Manager. The tasks they solve. 
        How to become and be successful in these roles.
      </>
    ),
  },
  {
    title: 'Scripts',
    Svg: require('@site/static/img/scripts.svg').default,
    to: '/docs/intro',
    description: (
      <>
        Assistance in solving tasks that can be addressed with scripts. Automation of delivery processes.
      </>
    ),
  },
  {
    title: 'Best Practices',
    Svg: require('@site/static/img/bestpractices.svg').default,
    to: '/docs/category/practices-and-processes',
    description: (
      <>
        Application of various strategies, metrics, and tools depending on the needs of the project. 
        Enhancing delivery efficiency through the proper selection of solutions.
      </>
    ),
  },
];

function Feature({Svg, title, description, to}) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={to} className={styles.featureCard}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
