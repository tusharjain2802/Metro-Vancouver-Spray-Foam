import PropTypes from 'prop-types';
const GradientButton = ({ children }) => {

    return (
        <button className=" h-[60px] w-[150px] button-gradient-wrapper text-white font-[700] text-base font-cabin rounded-lg py-4 px-[1.875rem] ">
            <span className="button-gradient-content p-4">
                {children}
            </span>
        </button>
    );
};

GradientButton.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default GradientButton;