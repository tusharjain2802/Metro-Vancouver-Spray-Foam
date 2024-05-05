import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import PropTypes from 'prop-types';
const FlipCard = ({ ImagePath, Heading, Description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleMouseEnter() {
    setIsFlipped(true);
  }

  function handleMouseLeave() {
    setIsFlipped(false);
  }

  return (
    <div className='text-white font-anton text-sm sm:text-base  md:text-xl rounded-xl'>
      <ReactCardFlip flipDirection='vertical' isFlipped={isFlipped}>
        {/* front section */}
        <div
          className='h-60 w-60 md:h-96 md:w-96 rounded-2xl flex justify-center items-center'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={ImagePath}
            alt="Hero Background"
            className="absolute z-[-4] top-0 left-0 h-60 w-60 md:h-96 md:w-96 object-cover rounded-xl"
          />
          {/* <div className="absolute top-0 left-0 h-60 w-60 md:h-96 md:w-96 z-[-2] bg-black opacity-65"></div> */}

          <span className='w-5/6 mx-auto flex justify-center items-center bg-gray-500 p-3 rounded-full'>
            {Heading}
          </span>
        </div>

        {/* back section */}
        <div
          className='h-60 w-60 md:h-96 md:w-96 p-4 text-center rounded-xl bg-gray-700'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {Description}
        </div>
      </ReactCardFlip>
    </div>
  );
};

FlipCard.propTypes = {
  Description: PropTypes.node.isRequired,
  ImagePath: PropTypes.node.isRequired,
  Heading: PropTypes.node.isRequired,
};


export default FlipCard;
