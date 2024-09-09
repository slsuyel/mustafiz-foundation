const Contact = () => {
  const contactInfo = [
    { type: 'Tel', details: ['(800) 985 8916', '(718) 618 5766'] },
    { type: 'Fax', details: ['(888) 557 6068'] },
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      <iframe
        className="w-full h-[400px] mb-6"
        loading="lazy"
        src="https://maps.google.com/maps?q=74-09%2037th%20Avenue%20Suite%20203B%20Jackson%20Heights%2C%20NY%2011372&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near"
        title="74-09 37th Avenue Suite 203B Jackson Heights, NY 11372"
        aria-label="Map showing 74-09 37th Avenue Suite 203B Jackson Heights, NY 11372"
      ></iframe>

      <div className=" shadow-md bg-yellow-600 text-white">
        {/* Card for the Mustafiz Foundation Address */}
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Mustafiz Foundation Inc.
            </h2>
            <address aria-label="Mustafiz Foundation Address" className=" mb-4">
              74-09 37th Avenue Suite 203B <br />
              Jackson Heights, NY 11372
            </address>
          </article>

          {/* Card for Contact Information */}
          <article className="rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>

            {contactInfo.map(info => (
              <div className="mb-4" key={info.type}>
                <p className="font-medium">{info.type}:</p>
                {info.details.map(detail => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
            ))}

            <div>
              <p className="font-medium">Email:</p>
              <a
                href="mailto:info@mustafiz.org"
                className="text-blue-300 hover:underline"
              >
                info@mustafiz.org
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Contact;
