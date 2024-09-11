import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10 font-Mont">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 sm:mt-[4rem]">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-center text-green">
            Terms and Conditions
          </h1>

          {/* Introduction Section */}
          <section className="mb-8 ">
            <h2 className="text-[1.4rem] font-semibold mb-4 text-gray-700">
              1. Introduction
            </h2>
            <p className="text-gray-600 ">
              Welcome to the official website of the Rabindranath HM Foundation
              ("the Foundation"). By accessing, browsing, or using our website (
              <a
                href="https://www.rnhmfoundation.com"
                className="text-blue-500 underline"
              >
                https://www.rnhmfoundation.com
              </a>
              ) or engaging with any of the Foundation's services, you agree to
              comply with and be bound by the following terms and conditions.
            </p>
          </section>

          {/* Eligibility Section */}
          <section className="mb-8">
            <h2 className="text-[1.4rem] font-semibold mb-4 text-gray-700">
              2. Eligibility
            </h2>
            <p className="text-gray-600">
              <strong className="font-bold">2.1 Legal Capacity:</strong> By
              using this website, you confirm that you are of legal age and have
              the necessary legal capacity to enter into a binding agreement in
              accordance with Indian laws.
            </p>
            <p className="text-gray-600">
              <strong>2.2 Compliance:</strong> Users must comply with the laws
              and regulations of India, including but not limited to the
              Information Technology Act, 2000, and any amendments thereof.
            </p>
          </section>

          {/* Services Section */}
          <section className="mb-8">
            <h2 className="text-[1.4rem] font-semibold mb-4 text-gray-700">
              3. Services
            </h2>
            <p className="text-gray-600">
              <strong>3.1 Charitable and Educational Services:</strong> The
              Foundation provides charitable and educational services, including
              scholarships, funding, and community initiatives.
            </p>
            <p className="text-gray-600">
              <strong>3.2 Non-Profit Nature:</strong> The Foundation operates as
              a non-profit, and all donations are used solely for the purposes
              mentioned on the website.
            </p>
          </section>

          {/* Donations Section */}
          <section className="mb-8">
            <h2 className="text-[1.4rem] font-semibold mb-4 text-gray-700">
              4. Donations
            </h2>
            <p className="text-gray-600">
              <strong>4.1 Voluntary Contributions:</strong> Donations are
              voluntary and used for specified charitable purposes.
            </p>
            <p className="text-gray-600">
              <strong>4.2 Tax Benefits:</strong> Donations may be eligible for
              tax deductions under Section 80G of the Income Tax Act.
            </p>
          </section>

          {/* More Sections */}
          <section className="mb-8">
            <h2 className="text-[1.4rem] font-semibold mb-4 text-gray-700">
              5. User Conduct
            </h2>
            <p className="text-gray-600">
              Users shall not misuse the Foundation’s website or services.
              Activities such as hacking, data theft, and fraudulent donations
              are prohibited.
            </p>
          </section>

          {/* Privacy and Data Protection */}
          <section className="mb-8">
            <h2 className="text-[1.4rem] font-semibold mb-4 text-gray-700">
              6. Privacy and Data Protection
            </h2>
            <p className="text-gray-600">
              The Foundation collects personal information in accordance with
              the Privacy Policy available on the website.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-[1.4rem] font-semibold mb-4 text-gray-700">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-600">
              The Foundation makes no warranties or representations regarding
              the accuracy or reliability of its services.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-8">
            <h2 className="text-[1.4rem] font-semibold mb-4 text-gray-700">
              11. Governing Law and Jurisdiction
            </h2>
            <p className="text-gray-600">
              These Terms and Conditions are governed by the laws of India.
              Disputes shall be subject to the courts of Jamshedpur, Jharkhand.
            </p>
          </section>

          {/* Grievance Redressal */}
          <section>
            <h2 className="text-[1.4rem] font-semibold mb-4 text-gray-700">
              12. Grievance Redressal
            </h2>
            <p className="text-gray-600">
              Name: Anurag Pathak <br />
              Email:{" "}
              <a
                href="mailto:anurag@rnhmfoundation.com"
                className="text-blue-500 underline"
              >
                anurag@rnhmfoundation.com
              </a>
              <br />
              Phone: 9525500039 <br />
              Address: Rabindranath HM Foundation, Shankosai Road no. 2, Dimna
              Road, Mango, Jamshedpur, Jharkhand.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
