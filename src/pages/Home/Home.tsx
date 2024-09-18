import DonateNow from './DonateNow';
import HeroSection from './HeroSection';
import OtherWays from './OtherWays';
import Stories from './Stories';
import WeFollow from './WeFollow';
import WhereWeWork from './WhereWeWork';
import WhoWeAre from './WhoWeAre';
import Why from './Why';
import YourDonationMatter from './YourDonationMatter';

const Home = () => {
  return (
    <div className="my-10">
      <HeroSection />
      <WhoWeAre />
      <DonateNow />
      <WeFollow />
      <WhereWeWork />
      <YourDonationMatter />
      <Why />
      <Stories />
      <OtherWays />
    </div>
  );
};

export default Home;
