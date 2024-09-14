import { Link } from 'react-router-dom';

const YourDonationMatter = () => {
  return (
    <div className="container mx-auto my-32">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <img
            className="w-full"
            src={
              'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            alt=""
          />
        </div>

        <div>
          <div className="ms-5">
            <h1 className="font-bold text-5xl text-blue-950 mb-7 ">
              Your donation matter
            </h1>

            <p className="my-7">
              Your gift has significant impact on other lives.
            </p>
            <p className="my-7">
              Children, Women and families in crisis and conflict are fighting
              everyday to survive, recover, and rebuild their lives. Your kind
              contribution will help us to provide food, health care,
              educational expenses and emergency supplies they need. Vulnerable
              children and women faces human trafficking for their weakness of
              economic hard ship and your contribution can help them to save and
              rebuild their lives. Your gift allows the MFI to deliver year
              round comprehensive support to people affected by devastating
              humanitarian crisis.
            </p>

            <p className="text-orange my-5 text-2xl font-semibold">
              “There is one thing we do know: that man is here for the sake of
              other men.”
            </p>
            <Link
              to="/donate"
              className="text-xl border bg-orange p-2 px-5 rounded-sm text-white hover:bg-black"
            >
              {' '}
              <i className="fa-solid fa-circle-dollar-to-slot me-2"></i> Donate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourDonationMatter;
