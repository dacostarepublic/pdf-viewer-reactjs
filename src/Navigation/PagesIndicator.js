import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';

const PagesIndicator = ({ css, page, pages }) => {
    const pagesClass = css ? css : 'small pt-2';

    return (
        <div className={pagesClass} style={pagesClass ? {} : styles.pages}>
            {`Page ${page} / ${pages}`}
        </div>
    );
};

PagesIndicator.propTypes = {
    css: PropTypes.string,
    page: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired
};

export default PagesIndicator;
