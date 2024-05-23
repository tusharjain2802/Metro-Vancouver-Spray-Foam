import React from 'react';
import Insulation from '../services/Insulation';
import FireProofing from '../services/FireProofing';
import SprayFoam from '../services/SprayFoam';
import DampRoofing from '../services/DampRoofing';
import DryWall from '../services/DryWall';
import { useParams } from 'react-router-dom';

const Services = () => {
  const { Id } = useParams();

  const CustomService = (index) => {
    const serviceIndex = parseInt(index, 10); // Convert Id to a number

    switch (serviceIndex) {
      case 0:
        return <Insulation />;
      case 1:
        return <FireProofing />;
      case 2:
        return <SprayFoam />;
      case 3:
        return <DampRoofing />;
      case 4:
        return <DryWall />;
      default:
        return <div>404 Service not found</div>;
    }
  };

  return (
    <div className="mt-32">
      <div className='sticky z-40'>
        {CustomService(Id)}
      </div>
    </div>
  );
};

export default Services;
