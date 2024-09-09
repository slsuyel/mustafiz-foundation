const Privacy = () => {
  return (
    <div className="container p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-lg mb-4">We value your privacy.</p>
      <p className="text-base mb-6">
        Your privacy is important to us. This privacy notice explains the
        personal data we process, how we process it, and for what purposes. We,
        Mustafiz Foundation Inc. (MFI), provide this Privacy Policy to inform
        our clients, users, and members of our policies and procedures regarding
        the collection, use, and disclosure of personal information we receive
        via our website (the “site”) from users of our service. Unless otherwise
        defined in this Privacy Policy, capitalized terms used herein have the
        same meanings as in our Terms of Service. Our primary goal in collecting
        information is to provide and improve our services.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
      <p className="text-base mb-6">
        We collect data from you through our interactions with you and through
        our service. The data we collect depends on the context of your
        interactions with us and the choices you make, including your privacy
        settings and the services and features you use. We also obtain data
        about you from third parties. When we ask you to provide personal data,
        you can decline.
      </p>

      <h3 className="text-xl font-semibold mb-4">
        Personal Information for Payment Processing
      </h3>
      <p className="text-base mb-6">
        We directly collect the following types of personal information for
        payment processing through our payment processing partner:
        <ul className="list-disc list-inside mt-4">
          <li>Name</li>
          <li>Billing address</li>
          <li>Email address</li>
          <li>IP address</li>
          <li>Telephone number</li>
          <li>Bank information</li>
          <li>Credit/Debit card information</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Automatically Collected Information
      </h2>
      <p className="text-base mb-6">
        When you visit our Site, some information is automatically collected.
        For example, your computer’s operating system, Internet Protocol (IP)
        address, access times, browser type, language, and the Site you visited
        before ours are logged. We also collect information about your usage and
        activity on our Site.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Social Networking Sites (SNS)
      </h2>
      <p className="text-base mb-6">
        Our Service may include interfaces that allow you to connect with social
        networking sites (SNS). If you connect to an SNS through the Site, you
        authorize us to access, use, and store the information that you agreed
        to share based on your SNS settings. You can revoke our access at any
        time by updating your SNS account settings.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Google Analytics</h2>
      <p className="text-base mb-6">
        We use Google Analytics, a web analytics service provided by Google,
        Inc., to better understand how the Site is used. Google Analytics may
        place cookies on your computer to collect information such as your
        computer’s IP address and your usage of the Site. This information is
        transmitted to and stored by Google.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Sharing of Personal Information
      </h2>
      <p className="text-base mb-6">
        We do not share your personal information with third parties except in
        the following circumstances:
        <ul className="list-disc list-inside mt-4">
          <li>With affiliates and subsidiaries.</li>
          <li>
            With third-party service providers who need access to your
            information.
          </li>
          <li>
            To comply with legal requests, protect rights, or in case of an
            emergency.
          </li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mb-4">Cookies and Web Beacons</h2>
      <p className="text-base mb-6">
        We use cookies and web beacons to collect usage and performance data.
        You can control how cookies are used through your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Third-Party Sites</h2>
      <p className="text-base mb-6">
        Our Services may contain links to third-party sites. This Policy does
        not cover their privacy practices. Please review their privacy policies
        before submitting any data.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Changes to the Privacy Policy
      </h2>
      <p className="text-base mb-6">
        We may update this Privacy Policy from time to time. If we make any
        material changes, we will post a notice on our Site.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
      <p className="text-base mb-6">
        If you have any questions about this Privacy Policy, please contact us
        at:
        <address className="mt-4">
          Mustafiz Foundation Inc.
          <br />
          74-09 37th Avenue Suite 203B
          <br />
          Jackson Heights, NY 11372
          <br />
          Tel: (800) 985 8916
          <br />
          Fax: (888) 557 6068
          <br />
          Email:{' '}
          <a
            href="mailto:info@mustafiz.org"
            className="text-blue-600 underline"
          >
            info@mustafiz.org
          </a>
        </address>
      </p>

      <p className="text-base mb-6">
        By using MFI’s website, you signify your agreement to this Privacy
        Policy. You are not obligated to disclose any personal information, and
        you may opt out of using services or features that require your
        information.
      </p>
    </div>
  );
};

export default Privacy;
