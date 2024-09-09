const OtherWays = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className="bg-orange p-5 text-center">
          <div className="p-5">
            <i className="fa-regular fa-envelope text-7xl text-black"></i>
            <p className="font-semibold mb-3 text-3xl text-uppercase">
              Send Wire
            </p>
            <p className="font-semibold mb-3">
              For details on how to send a donation to Mustafiz Foundation Inc
              via wire transfer, please contact us
            </p>
            <p className="font-semibold mb-3">email: info@mustafiz.org</p>
            <p className="font-semibold mb-3">Tel: +1 800 985 8916</p>
            <p className="font-semibold mb-3">Fax +1 888 557 6068</p>
          </div>
        </div>
        <div className="bg-orange p-5 text-center">
          <div className="p-5">
            <i className="fas fa-money-check-alt text-7xl "></i>
            <p className="font-semibold mb-3 text-3xl text-uppercase">
              Send Check
            </p>
            <p className="font-semibold mb-3">
              Payable to “Mustafiz Foundation Inc “
            </p>
            <p className="font-semibold mb-3">Address: 47-56 45th St #4B</p>
            <p className="font-semibold mb-3">Woodside New York 11377</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherWays;
