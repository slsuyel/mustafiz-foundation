import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import Home from '../pages/Home/Home';
import Errorpage from '@/components/global/Errorpage';
import Board from '@/pages/Boards/Board';
import OurGoal from '@/pages/Goal/OurGoal';
import WeFollow from '@/pages/Home/WeFollow';
import WhereWeWork from '@/pages/Home/WhereWeWork';
import JoinUs from '@/pages/Contact/JoinUs';
import Contact from '@/pages/Contact/Contact';
import Gallery from '@/pages/Gallery/Gallery';
import Donate from '@/pages/Donate/Donate';
import Privacy from '@/pages/Privacy/Privacy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/board-of-directors',
        element: <Board />,
      },
      {
        path: '/goal/:page',
        element: <OurGoal />,
      },
      {
        path: 'we-follow',
        element: <WeFollow />,
      },
      {
        path: 'we-follow',
        element: <WeFollow />,
      },
      {
        path: 'where-we-work',
        element: <WhereWeWork />,
      },
      {
        path: 'join-us',
        element: <JoinUs />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
      {
        path: '/donate',
        element: <Donate />,
      },
      {
        path: '/privacy',
        element: <Privacy />,
      },
    ],
  },
]);

export default router;
