import PropTypes from 'prop-types';

function Menu({ children }) {
    return <nav style={{ width: '100%', marginBottom : '8px' }}>{children}</nav>;
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Menu;
