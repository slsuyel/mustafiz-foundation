const Board = () => {
  const directors = [
    { name: 'Mustafizur R Moosa', role: 'Board Chair and Founder' },
    { name: 'Md. Sihab', role: 'Board Vice-Chair' },
    { name: 'ABM Halim Mollah', role: 'Director Human Resources' },
    { name: 'Mohammed Sahidul Islam', role: 'Director Finance' },
    { name: 'Nur A Alam Shamim', role: 'Director Public Relation' },
    { name: 'Ferdousy Khanom Popy', role: 'Director Women’s Affairs' },
    { name: 'Md. Akther Hossain', role: 'Director Accounts' },
    { name: 'Md. Aminullah Prince', role: 'Director Project & Planning' },
  ];

  const advisors = [
    'Prof. Dr. Celarano',
    'Dr. Dismond Flynn',
    'Moulana Mustafizur Rahman',
    'Moulana Osama Harun',
    'Abu Taleb',
    'Biddut Das',
    'Benjamin Schwed',
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Board of Directors
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="text-lg mb-4">
          Mustafiz Foundation is governed by a Volunteer and Board of Directors.
        </p>
        <p className="text-lg mb-4">
          MFI Board of Advisors provides advice on policy, advocacy, fund
          raising, and public relations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Board of Directors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {directors.map((member, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Board of Advisors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{advisor}</h3>
              <p className="text-gray-600">Advisor</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Board;
