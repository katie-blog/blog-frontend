import React from 'react'
import styles from './create.scss'

export default function({ match }) {
    console.log(styles)
    return (
        <div className="blog-create">
            <h1>Page create</h1>
        </div>
    );
}
