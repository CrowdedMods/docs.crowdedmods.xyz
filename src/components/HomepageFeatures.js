import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use & Modular',
    img: "../../static/img/easy-to-use.png",
    description: (
      <>
        All of our mods are designed to be both easy to install and use. <br />
        We build our mods to be modular, so you can pick which ones you want with minimal bloat!
      </>
    ),
  },
  {
    title: (
      <>
        Powered by <Link to="https://github.com/NuclearPowered">Reactor</Link> and <Link to="https://github.com/BepInEx/BepInEx">BepInEx</Link>
      </>
    ),
    img: "../../static/img/bepinex.png",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img src={img} alt={title} width={150} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
