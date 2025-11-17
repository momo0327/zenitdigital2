import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service - Zenit Digital',
  description: 'Read our terms of service to understand the agreement between you and Zenit Digital when using our services.',
};

export default function TermsPage() {
  const lastUpdated = 'January 2025';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-antonio font-bold text-black mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 md:px-12 lg:px-16 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-12">
            {/* Introduction */}
            <div>
              <h2 className="text-3xl font-antonio font-bold text-black mb-4">
                Agreement to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using Zenit Digital&apos;s services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-3xl font-antonio font-bold text-black mb-4">
                Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Zenit Digital provides web development, mobile development, and fullstack development services. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Custom website and web application development</li>
                <li>Mobile application development for iOS and Android</li>
                <li>Fullstack development solutions</li>
                <li>Design and branding services</li>
                <li>Consultation and strategic planning</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-3xl font-antonio font-bold text-black mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Unless otherwise stated, Zenit Digital and/or its licensors own the intellectual property rights for all material on this website and in our services. Upon full payment for services rendered, clients receive the agreed-upon rights to the deliverables as specified in the project agreement.
              </p>
            </div>

            {/* User Responsibilities */}
            <div>
              <h2 className="text-3xl font-antonio font-bold text-black mb-4">
                User Responsibilities
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Use our services in compliance with all applicable laws</li>
                <li>Not misuse or abuse our services</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div>
              <h2 className="text-3xl font-antonio font-bold text-black mb-4">
                Payment Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Payment terms are established on a project-by-project basis and outlined in individual service agreements. Unless otherwise specified, an initial deposit may be required before work commences, with remaining payments due upon project milestones or completion.
              </p>
            </div>

            {/* Warranty Disclaimer */}
            <div>
              <h2 className="text-3xl font-antonio font-bold text-black mb-4">
                Warranty Disclaimer
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are provided &quot;as is&quot; without any warranties, express or implied. While we strive for excellence, we do not guarantee that our services will be uninterrupted, error-free, or meet all your requirements.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-3xl font-antonio font-bold text-black mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Zenit Digital shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
              </p>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-3xl font-antonio font-bold text-black mb-4">
                Termination
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may terminate or suspend access to our services immediately, without prior notice, for any reason, including without limitation if you breach these Terms of Service.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-3xl font-antonio font-bold text-black mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by updating the &quot;Last updated&quot; date. Your continued use of our services after such modifications constitutes acceptance of the updated terms.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-3xl font-antonio font-bold text-black mb-4">
                Governing Law
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of Sweden, without regard to its conflict of law provisions.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-3xl font-antonio font-bold text-black mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <Link
                href="/ContactPage"
                className="inline-flex items-center text-[#0558F9] hover:text-[#0558F9]/80 transition-colors font-semibold"
              >
                <span className="mr-2">Contact Page</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
