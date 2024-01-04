import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Rapid Development',
        Svg: require('@site/static/img/rocket.svg').default,
        description: (
            <>
                Speed up your development process and build robust applications
            </>
        ),
    },
    {
        title: 'Production Ready',
        Svg: require('@site/static/img/ready.svg').default,
        description: (
            <>
                Develop production-ready applications ensuring stability and reliability
            </>
        ),
    },
    {
        title: 'Externalized Configuration',
        Svg: require('@site/static/img/configuration.svg').default,
        description: (
            <>
                Configure your application's behavior easily using externalized configuration
            </>
        ),
    },
    {
        title: 'Dependency Injection',
        Svg: require('@site/static/img/ioc.svg').default,
        description: (
            <>
                 Manage your application components with built-in dependency injection support
            </>
        ),
    },
    {
        title: 'Focus on What Matters',
        Svg: require('@site/static/img/business.svg').default,
        description: (
            <>
                Save time and concentrate on your business rather than the technical details
            </>
        ),
    },
    {
        title: 'Extensibility',
        Svg: require('@site/static/img/extensible.svg').default,
        description: (
            <>
                Expand your application's capabilities and adapt it to your needs
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
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
