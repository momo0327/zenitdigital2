import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - Zenit Digital',
  description: 'Read our privacy policy to understand how Zenit Digital collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  const lastUpdated = 'January 2025';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-antonio font-bold text-black mb-6">
            Privacy Policy
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
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At Zenit Digital, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-3xl font-antonio font-bold text-black mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect information about you in a variety of ways. The information we may collect includes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Personal Data: Name, email address, phone number, and other contact information you provide.</li>
                <li>Business Information: Company name, project details, and service requirements.</li>
                <li>Technical Data: IP address, browser type, device information, and usage data.</li>
                <li>Communication Data: Messages and correspondence when you contact us.</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-3xl font-antonio font-bold text-black mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide, operate, and maintain our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Analyze usage trends and optimize user experience</li>
                <li>Protect against fraudulent or illegal activity</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-3xl font-antonio font-bold text-black mb-4">
                Information Sharing
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted third-party service providers who assist us in operating our website and providing our services, under strict confidentiality agreements.
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-3xl font-antonio font-bold text-black mb-4">
                Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-3xl font-antonio font-bold text-black mb-4">
                Your Rights
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-3xl font-antonio font-bold text-black mb-4">
                Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </div>

            {/* Updates */}
            <div>
              <h2 className="text-3xl font-antonio font-bold text-black mb-4">
                Policy Updates
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-3xl font-antonio font-bold text-black mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
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
