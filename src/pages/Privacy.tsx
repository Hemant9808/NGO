import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 sm:mt-[4rem]">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold font-Mont mb-6 text-center text-green">
            Privacy Policy
          </h1>

          {/* Introduction Section */}
            <section className="mb-8 font-Mont">
            <h2 className="text-2xl font-semibold font-Mont mb-4 text-gray-700">Introduction</h2>
            <p className="text-gray-600 mb-4">
              Rabindranath HM Foundation ("the Foundation," "we," "us," or "our") is committed to protecting the privacy of our donors, beneficiaries, website users, and other stakeholders. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information. By accessing our website (
              <a href="https://www.rnhmfoundation.com" className="text-blue-500 underline">
                https://www.rnhmfoundation.com
              </a>
              ) or engaging with our services, you agree to this Privacy Policy.
            </p>
            <p className="text-gray-600">
              This policy is in compliance with the Information Technology Act, 2000, and the rules and regulations applicable in India, including the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8 font-Mont">
            <h2 className="text-2xl  font-semibold mb-4 text-gray-700 font-Mont">1. Information We Collect</h2>
            <h3 className="text-xl font-medium mb-2 text-gray-700 font-Mont">1.1 Personal Information</h3>
            <p className="text-gray-600 mb-2 font-Mont">We may collect personal information such as:</p>
            <ul className="list-disc list-inside font-Mont text-gray-600 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Postal address</li>
              <li>Date of birth</li>
              <li>PAN card or Aadhar number (for donation purposes)</li>
              <li>Bank details (for donations or refunds)</li>
            </ul>
            <p className="text-gray-600 mb-2 font-Mont">This information is collected when you:</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Register on our website</li>
              <li>Make a donation</li>
              <li>Sign up for our newsletters or updates</li>
              <li>Contact us for support or inquiries</li>
              <li>Apply for a scholarship, grant, or participate in any Foundation program</li>
            </ul>
            <h3 className="text-xl font-Mont font-medium mt-6 mb-2 text-gray-700">1.2 Non-Personal Information</h3>
            <p className="text-gray-600 font-Mont mb-2">We may also collect non-personal information that does not identify you directly. This includes:</p>
            <ul className="list-disc font-Mont list-inside text-gray-600">
              <li>IP addresses</li>
              <li>Browser type and version</li>
              <li>Website navigation patterns</li>
              <li>Time spent on the website</li>
              <li>Cookies and web beacons for site analytics</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-8 font-Mont">
            <h2 className="text-2xl font-Mont font-semibold mb-4 text-gray-700">2. How We Use Your Information</h2>
            <h3 className="text-xl font-Mont font-medium mb-2 text-gray-700">2.1 Charitable and Operational Purposes</h3>
            <p className="text-gray-600 font-Mont mb-4">
              The Foundation uses your personal information to:
            </p>
            <ul className="list-disc font-Mont list-inside text-gray-600 mb-4">
              <li>Process donations and provide receipts</li>
              <li>Deliver programs and services</li>
              <li>Communicate with donors, beneficiaries, and stakeholders</li>
              <li>Facilitate tax exemption benefits under Section 80G of the Income Tax Act</li>
              <li>Respond to inquiries or support requests</li>
              <li>Notify you about updates, news, or events related to our work</li>
            </ul>
            <h3 className="text-xl font-medium mb-2 text-gray-700">2.2 Analytics and Website Improvement</h3>
            <p className="text-gray-600 font-Mont">
              We use non-personal information and cookies to improve the website's functionality, monitor user trends, and enhance your overall user experience.
            </p>
          </section>

          {/* Sharing of Information */}
          <section className="mb-8 font-Mont">
            <h2 className="text-2xl font-semibold font-Mont mb-4 text-gray-700">3. Sharing of Information</h2>
            <h3 className="text-xl font-medium mb-2 font-Mont text-gray-700">3.1 Third-Party Service Providers</h3>
            <p className="text-gray-600 mb-4 font-Mont">
              We may share your personal information with trusted third-party service providers, such as:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Payment processors for handling donations</li>
              <li>Mailing services for newsletters or physical correspondence</li>
              <li>IT and web security companies</li>
            </ul>
            <p className="text-gray-600">
              These service providers are bound by confidentiality agreements and are prohibited from using your personal information for any purpose other than providing services on our behalf.
            </p>
            <h3 className="text-xl font-medium mt-6 mb-2 text-gray-700">3.2 Legal Compliance</h3>
            <p className="text-gray-600 mb-4">
              We may disclose your information if required by law, court orders, or government regulations, or in response to legal requests to comply with legal processes or protect the Foundation’s rights and property.
            </p>
            <h3 className="text-xl font-medium mb-2 text-gray-700">3.3 With Your Consent</h3>
            <p className="text-gray-600">
              In cases where we seek to share your information for purposes not described in this policy, we will obtain your prior consent.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-8 font-Mont">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">4. Data Security</h2>
            <h3 className="text-xl font-medium mb-2 text-gray-700">4.1 Protection of Personal Information</h3>
            <p className="text-gray-600 mb-4">
              We take reasonable steps to safeguard the personal information we collect, including physical, electronic, and administrative security measures. These measures include:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Data encryption</li>
              <li>Secure server environments</li>
              <li>Access control protocols</li>
            </ul>
            <h3 className="text-xl font-medium mb-2 text-gray-700">4.2 No Guarantee</h3>
            <p className="text-gray-600">
              While we strive to protect your information, no data transmission over the internet can be guaranteed to be completely secure. Therefore, we cannot guarantee the absolute security of your personal information.
            </p>
          </section>

          {/* Cookies and Tracking Technologies */}
          <section className="mb-8 font-Mont">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">5. Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 mb-4">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small files that are stored on your device and help us understand your preferences and optimize the website’s functionality. You can manage cookie settings in your browser and choose to block or delete cookies. However, this may affect your access to certain features of the website.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-8 font-Mont">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">6. Your Rights</h2>
            <h3 className="text-xl font-medium mb-2 text-gray-700">6.1 Access and Correction</h3>
            <p className="text-gray-600 mb-4">
              You have the right to access, update, or correct the personal information you have provided to us. You can do this by contacting us directly at:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Email: <a href="mailto:anurag@rnhmfoundation.com" className="text-blue-500 underline">anurag@rnhmfoundation.com</a></li>
              <li>Phone: <a href="tel:+919525500039" className="text-blue-500 underline">9525500039</a></li>
            </ul>
            <h3 className="text-xl font-medium mt-6 mb-2 text-gray-700">6.2 Withdrawal of Consent</h3>
            <p className="text-gray-600 mb-4">
              You may withdraw your consent to the collection and processing of your personal information at any time. However, withdrawing consent may affect our ability to provide certain services or process donations.
            </p>
            <h3 className="text-xl font-medium mb-2 text-gray-700">6.3 Opt-Out</h3>
            <p className="text-gray-600">
              If you no longer wish to receive updates, newsletters, or other communications from us, you may opt out by following the instructions in the communication or by contacting us at <a href="mailto:anurag@rnhmfoundation.com" className="text-blue-500 underline">anurag@rnhmfoundation.com</a>.
            </p>
          </section>

          {/* Retention of Data */}
          <section className="mb-8 font-Mont">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">7. Retention of Data</h2>
            <p className="text-gray-600">
              We retain personal information only as long as necessary for the purposes outlined in this Privacy Policy or as required by applicable law. Once the information is no longer required, we take steps to anonymize or securely delete it.
            </p>
          </section>

          {/* Third-Party Links */}
            <section className="mb-8 font-Mont">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">8. Third-Party Links</h2>
            <p className="text-gray-600 mb-4">
              Our website may contain links to third-party websites, services, or resources. This Privacy Policy applies solely to the Rabindranath HM Foundation’s website. We are not responsible for the privacy practices or content of any third-party websites. We encourage you to review the privacy policies of any external sites you visit.
            </p>
          </section>

          {/* Children's Privacy */}
            <section className="mb-8 font-Mont">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">9. Children's Privacy</h2>
            <p className="text-gray-600">
              The Foundation does not knowingly collect personal information from children under the age of 18 without parental consent. If you believe that we have collected personal information from a child without the required consent, please contact us immediately, and we will take steps to delete the information.
            </p>
          </section>

          {/* Changes to the Privacy Policy */}
            <section className="mb-8 font-Mont">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">10. Changes to the Privacy Policy</h2>
            <p className="text-gray-600 mb-4">
              The Foundation reserves the right to modify this Privacy Policy at any time. Any changes will be reflected on this page with the updated date at the bottom. We encourage users to review this policy periodically. Your continued use of the website after any changes to the policy signifies your acceptance of the revised terms.
            </p>
          </section>

          {/* Contact Us */}
          <section className='font-Mont'>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">11. Contact Us</h2>
            <p className="text-gray-600 mb-2">
              If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, you may contact us at:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                <strong>Rabindranath HM Foundation</strong>
              </li>
              <li>
                <strong>Address:</strong> Shankosai Road no. 2, Dimna Road, Mango, Jamshedpur, Jharkhand, India
              </li>
              <li>
                <strong>Email:</strong> <a href="mailto:anurag@rnhmfoundation.com" className="text-blue-500 underline">anurag@rnhmfoundation.com</a>
              </li>
              <li>
                <strong>Phone:</strong> <a href="tel:+919525500039" className="text-blue-500 underline">9525500039</a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
