import HeroSection from './HeroSection';
import OtherWays from './OtherWays';
import WeFollow from './WeFollow';
import WhereWeWork from './WhereWeWork';
import WhoWeAre from './WhoWeAre';
import YourDonationMatter from './YourDonationMatter';

const Home = () => {
  return (
    <div className="my-10">
      <HeroSection />
      <WhoWeAre />
      <WeFollow />
      <WhereWeWork />
      <YourDonationMatter />
      <OtherWays />
    </div>
  );
};

export default Home;
