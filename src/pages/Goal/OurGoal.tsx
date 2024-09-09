import { useLocation } from 'react-router-dom';
import Education from './Education';
import Health from './Health';
import WomenRight from './WomenRight';
import Empowerment from './Empowerment';
import FinancialFreedom from './FinancialFreedom';

const OurGoal = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const segments = pathname.split('/').filter(Boolean);
  const goal = segments[segments.length - 1];

  switch (goal) {
    case 'education':
      return <Education />;
    case 'health':
      return <Health />;
    case 'women-and-girls':
      return <WomenRight />;
    case 'empowerment':
      return <Empowerment />;
    case 'financial-freedom':
      return <FinancialFreedom />;
    default:
      return <div>No content available</div>;
  }
};

export default OurGoal;
