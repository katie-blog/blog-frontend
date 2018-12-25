import React from 'react'

import styles from './detail.scss';

export default function({ match }) {
  console.log(styles)
  return (
    <div className={styles.normal}>
      <h1>Page detail {match.params.blogId}</h1>
    </div>
  );
}
