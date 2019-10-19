import React from 'react';
import classnames from 'classnames';
import style from './styles/Styles.scss';

const LimitInput = ( { limit, handleInputChange } ) => {
    const inputStyle = classnames(style.input, {[style.error]: limit < 3 || limit > 20})
    return (
        <div class={style.topRow}>
            <label class={style.label}>Limit the results here:</label>
            <input class={inputStyle} onChange={handleInputChange} value={limit} />
            {(limit < 3 || limit > 20) && <span class={style.errorMessage}>Expected input from 3 to 20</span>}
        </div>
    );
}

export default LimitInput;
