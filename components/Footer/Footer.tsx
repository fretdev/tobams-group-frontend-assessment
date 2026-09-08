"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#11040E] text-white px-6 py-8 md:px-12 md:py-10 lg:px-16 lg:pt-10 lg:pb-6">
      <div className="mx-auto max-w-[1312px] flex flex-col gap-10 lg:gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4 flex flex-col max-w-[356px] gap-6">
            <div className="flex items-center">
              <Image
                src="/images/Navbar images/logo.svg"
                alt="Tobams Group Logo"
                width={188}
                height={73}
                className="w-[188px] h-[72.61px] object-contain"
              />
            </div>
            <p className="text-[14px] leading-[160%] text-white/80">
              Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-colors hover:bg-white/90"
                aria-label="LinkedIn"
              >
                <Image
                  src="/icon/footer icons/Linkdin.png"
                  alt="LinkedIn"
                  width={18}
                  height={18}
                  className="brightness-0"
                />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-colors hover:bg-white/90"
                aria-label="Instagram"
              >
                <Image
                  src="/icon/footer icons/Instagram.png"
                  alt="Instagram"
                  width={18}
                  height={18}
                  className="brightness-0"
                />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-colors hover:bg-white/90"
                aria-label="X (formerly Twitter)"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-black shrink-0"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-[16px] font-bold text-white">What We Do</h3>
              <ul className="flex flex-col gap-3 text-[14px] text-white/70">
                <li><Link href="#" className="hover:text-white transition-colors">Sustainability Services</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Strategy Planning and Implementation</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Tech Talent Solutions</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Training and Development</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">IT Consulting Services</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Social Impact</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-[16px] font-bold text-white">Company</h3>
              <ul className="flex flex-col gap-3 text-[14px] text-white/70">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Jobs</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Projects</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Our Founder</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Business Model</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">The Team</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">FAQs</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Testimonials</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-[16px] font-bold text-white">Solution</h3>
              <ul className="flex flex-col gap-3 text-[14px] text-white/70">
                <li><Link href="#" className="hover:text-white transition-colors">Tobams Group Academy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Help a Tech Talent</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Campus Ambassadors Program</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Join Our Platform</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Book a Consultation</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Join Our Slack Community</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-[16px] bg-[#1F131C] p-6 md:p-8 flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start border border-white/5">
          <div className="order-2 lg:order-1 lg:col-span-8 w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2 sm:border-r sm:border-white/10 sm:pr-8">
              <h3 className="text-[16px] md:text-[18px] font-bold text-white mb-1">Registered Offices</h3>
              <h4 className="text-[14px] font-semibold text-[#EF4353]">United Kingdom</h4>
              <p className="text-[13px] text-white/80 leading-[150%]">
                07451196 (Registered by Company House)<br />
                Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:pt-[33px] lg:border-r lg:border-white/10 lg:pr-8">
              <h4 className="text-[14px] font-semibold text-[#EF4353]">Nigeria</h4>
              <p className="text-[13px] text-white/80 leading-[150%]">
                RC 1048722 (Registered by the Corporate Affairs Commission)<br />
                4, Muaz Close, Angwar-Rimi
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-4 w-full flex flex-col gap-3 lg:pl-4">
            <h3 className="text-[16px] md:text-[18px] font-bold text-white mb-1">Contact Information</h3>
            <div className="flex flex-col gap-3 text-[14px] text-white/80">
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-[#EF4353]">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href="mailto:theteam@tobamsgroup.com" className="hover:text-white transition-colors">
                  theteam@tobamsgroup.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#EF4353" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-[#EF4353]">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+447886600748" className="hover:text-white transition-colors">
                  +447886600748
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-4 pt-6 pb-2 border-t border-white/10 text-[13px] text-white/80 text-center lg:text-left">
          <p>Copyright © Tobams Group, {new Date().getFullYear()}. All rights reserved.</p>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6 lg:gap-8">
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-white transition-colors underline underline-offset-4">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors underline underline-offset-4">Cookies Policy</Link>
            </div>
            <Link href="#" className="hover:text-white transition-colors underline underline-offset-4">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}