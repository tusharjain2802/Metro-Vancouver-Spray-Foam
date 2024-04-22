import PropTypes from 'prop-types';
const GradientSpan = ({ children }) => {
    return (
        <span className='hover:bg-gradient-to-r transition-all duration-500 bg-gradient-to-l from-customGold to-black text-transparent bg-clip-text'>
            {children}
        </span>
    )
}
GradientSpan.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
export default GradientSpan;

