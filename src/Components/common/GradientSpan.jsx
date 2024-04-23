import PropTypes from 'prop-types';
const GradientSpan = ({ children }) => {
    return (
        <span className='transition-all duration-500 bg-gradient-to-l hover:from-black  from-customGold hover:via-customGold  via-black hover:to-black  to-customGold text-transparent bg-clip-text'>
            {children}
        </span>
    )
}
GradientSpan.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
export default GradientSpan;

