const Donate = () => {
  return (
    <div className="container mx-auto py-10 my-10 min-h-[100vh]">
      <div className="grid md:grid-cols-3 gap-8">
        <div className=" rounded-lg md:col-span-2">
          <h2 className="text-3xl font-bold mb-6 px-3 md:p-0">
            Your gift has a significant impact on others' lives.
          </h2>
          <div className="bg-gray-100 p-5">
            <p className="mb-4">
              Children, women, and families in crisis and conflict are fighting
              every day to survive, recover, and rebuild their lives. Your kind
              contribution will help us provide food, healthcare, educational
              expenses, and emergency supplies they desperately need.
            </p>
            <p className="mb-4">
              Vulnerable children and women face human trafficking due to
              economic hardship, and your contribution can help them to survive
              and rebuild their lives. Your gift allows the MFI to deliver
              year-round comprehensive support to people affected by devastating
              humanitarian crises.
            </p>
            <p className="mb-4">
              Your support today will help the MFI make a lasting impact for
              people in crisis — and at a scale that truly makes a meaningful
              impact. Thank you for your gift.
            </p>
          </div>

          <div className="bg-orange p-8">
            {' '}
            <p className="font-semibold text-white">
              Mustafiz Foundation is a Citizen Development and Social
              Engineering project with the campaign "Better Citizen for a Better
              Nation." We, the People, do the best.
            </p>
          </div>
        </div>

        <form
          acceptCharset="utf-8"
          className="bg-white shadow-lg rounded-lg p-8 w-full"
        >
          <input type="hidden" name="name" value="Donation" />
          <input id="fprice" type="hidden" name="price" value="0" />

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">
              Donation amount*
            </h3>
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="donation-amount flex items-center">
                <input
                  type="radio"
                  name="amount"
                  id="amount20"
                  value="{p+20}"
                  className="mr-2"
                />
                <label htmlFor="amount20" className="cursor-pointer">
                  $20
                </label>
              </div>
              <div className="donation-amount flex items-center">
                <input
                  type="radio"
                  name="amount"
                  id="amount50"
                  value="{p+50}"
                  className="mr-2"
                />
                <label htmlFor="amount50" className="cursor-pointer">
                  $50
                </label>
              </div>
              <div className="donation-amount flex items-center">
                <input
                  type="radio"
                  name="amount"
                  id="amount100"
                  value="{p+100}"
                  className="mr-2"
                />
                <label htmlFor="amount100" className="cursor-pointer">
                  $100
                </label>
              </div>
              <div className="donation-amount flex items-center">
                <input
                  type="radio"
                  name="amount"
                  id="donate_500"
                  value="{p+500}"
                  className="mr-2"
                />
                <label htmlFor="donate_500" className="cursor-pointer">
                  $500
                </label>
              </div>
            </div>

            <div className="mt-4">
              <input
                type="number"
                name="amount"
                placeholder="Enter Other Amount"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              />
            </div>
          </div>

          {/* Donation Type */}
          <div className="bg-gray-900 text-white p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Donation type*</h3>
            <div className="flex space-x-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="sub_frequency"
                  value=""
                  className="mr-2"
                />
                One-Time
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="sub_frequency"
                  value="1m"
                  className="mr-2"
                />
                Monthly
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Donate
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            *Contributions are tax-deductible.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Donate;
