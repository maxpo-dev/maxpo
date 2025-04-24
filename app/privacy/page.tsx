"use client";

import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-16 mt-20">
      <div className="max-w-5xl mx-auto">
        <Card className="border border-gray-200 shadow-md rounded-xl">
          <CardContent className="p-8 md:p-10 text-gray-800 space-y-6">
            <h2 className="text-3xl font-bold text-center mb-2">Privacy Policy</h2>
            <p className="text-center text-sm text-gray-500 mb-6">Last updated: April 2025</p>

            <section className="space-y-2">
              <p>
                Welcome to the Maxpo Exhibitions Pvt Ltd. We value your trust and are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or engage with our services.
              </p>
            </section>

            <hr />

            <section>
              <h3 className="text-xl font-semibold mb-2">1. Information We Collect</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Personal Information:</strong> Name, Email, Phone, City of residence, Preferences</li>
                <li><strong>Non-Personal Information:</strong> IP address, Browser type, Pages visited, Time spent</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Facilitate property-related inquiries and services</li>
                <li>Respond to questions and provide support</li>
                <li>Customize your experience on our platform</li>
                <li>Inform you about upcoming property events and offers</li>
                <li>Analyze website traffic and improve services</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mt-6 mb-2">3. Sharing Your Information</h3>
              <p>We do not sell your personal information. However, we may share it with:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Trusted real estate developers or partners</li>
                <li>Service providers assisting in website operations</li>
                <li>Legal authorities if required by law</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mt-6 mb-2">4. Cookies and Tracking Technologies</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Understanding user preferences</li>
                <li>Providing personalized recommendations</li>
                <li>Analyzing website performance</li>
              </ul>
              <p>You can manage or disable cookies in your browser settings.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mt-6 mb-2">5. Data Security</h3>
              <p>We employ security measures to protect your data, but no method is 100% secure.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access your personal data</li>
                <li>Request corrections or updates</li>
                <li>Withdraw consent for data processing</li>
                <li>Request data deletion (subject to legal requirements)</li>
              </ul>
              <p>To exercise these rights, contact us at <a className="text-blue-600 underline" href="mailto:info@maxpo.com">info@maxpo.com</a>.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mt-6 mb-2">7. Third-Party Links</h3>
              <p>We are not responsible for third-party privacy practices. Please review their policies.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mt-6 mb-2">8. Changes to This Policy</h3>
              <p>We may update this policy from time to time. Changes will be posted here.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h3>
              <p>If you have questions, contact us at:</p>
              <p><strong>Email:</strong> <a className="text-blue-600 underline" href="mailto:info@maxpo.com">info@maxpo.com</a></p>
              {/* <p><strong>Phone:</strong> +91 97417 44869</p> */}
              <p><strong>Address:</strong> 50 2nd floor, MM Road, Frazer Town, Bengaluru, Karnataka India 560005</p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
