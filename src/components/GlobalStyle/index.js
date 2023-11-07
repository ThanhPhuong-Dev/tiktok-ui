import ProTypes from 'prop-types';
import './GlobalStyle.scss';

function GlobalStyle({ children }) {
    return children;
}

GlobalStyle.proTypes = {
    children: ProTypes.string.isRequired,
};
export default GlobalStyle;
