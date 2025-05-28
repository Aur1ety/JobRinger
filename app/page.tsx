"use client";

import { useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Button } from "@/components/ui/button";
import { User, Mail, Linkedin, Twitter } from "lucide-react";

// Example employer logos and testimonials
const employerLogos = [
  "/logos/ardour.png",
  "/logos/binance.png",
  "/logos/shadow.png",
  "/logos/sunrise.png",
];
const employers = [
  { name: "Ardour" },
  { name: "Binance" },
  { name: "Shadow" },
  { name: "Sunrise" },
  { name: "RD1" },
  { name: "Sunlife" },
  { name: "JetWork" },
  { name: "Hynance" },
  { name: "Shadow CO" },
];
const jobs = [
  "Engineer - Service #Auto (In Office)",
  "Medical Coding for Freshers (In Office)",
  "Kannada News Reporter",
];
const tagsList = [
  "#Fresher", "#Work From Home", "#WFH", "#IT", "#HR", "#Back Office", "#BPO Jobs",
  "#ITES", "#Finance", "#Accounts", "#Medical", "#Pharma", "#Manager", "#Developer",
  "#Marketing", "#Engineering", "#Non Government Jobs",
];
const cities = [
  "Delhi", "Ajmer", "Pune", "Hyderabad", "Agra", "Chennai", "Kolkata", "Indore", "Gurugram", "Jaipur",
];

export default function HomePage() {
  const [tagSearch, setTagSearch] = useState("");
  const filteredTags = tagsList.filter((tag) =>
    tag.toLowerCase().includes(tagSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#e8eafc] via-[#f7f8fc] to-[#fdf6e3] font-sans">
      {/* Nav */}
      <nav className="flex justify-between items-center px-8 py-6 text-base font-light text-gray-700">
        <div className="font-extrabold text-blue-700 text-2xl tracking-tight">jobRinger</div>
        <div className="flex gap-8 items-center">
          <a href="#" className="hover:text-blue-600 transition">Work</a>
          <a href="#" className="hover:text-blue-600 transition">Our Story</a>
          <a href="#" className="hover:text-blue-600 transition">Labs</a>
          <a href="#" className="hover:text-blue-600 transition">Insights</a>
          <a href="#" className="hover:text-blue-600 transition">Connect</a>
          <a href="#" className="ml-4 px-6 py-2 bg-blue-700 text-white rounded-full font-semibold shadow hover:bg-blue-800 transition">Sign Up</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-[60vh] px-6 py-20">
        <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-extrabold leading-[0.95] text-gray-900 max-w-4xl text-center mb-4">
          Find Your Dream Job<br />
          <span className="text-blue-700">With jobRinger</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-700 max-w-2xl text-center">
          India’s most modern job portal. Fast, easy, and beautiful.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="px-8 py-4 text-lg font-bold rounded-full bg-yellow-400 text-blue-900 shadow-xl hover:bg-yellow-300 transition-all">🚀 Get Started</a>
          <a href="#" className="px-8 py-4 text-lg font-bold rounded-full bg-white/80 text-blue-700 shadow hover:bg-blue-50 border border-blue-100 transition-all">Post a Job</a>
        </div>
      </section>

      {/* Featured Employers with Marquee */}
      <section className="container mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">FEATURED EMPLOYERS</h2>
        <Marquee pauseOnHover gradient={false} speed={40} className="gap-4">
          {employers.slice(0, 8).map((employer, idx) => (
            <div
              key={employer.name + idx}
              className="flex items-center gap-2 bg-yellow-100 rounded-2xl px-6 py-3 shadow m-2 font-semibold text-blue-800 hover:scale-105 hover:shadow-xl transition-all"
              style={{ minWidth: 170, marginRight: 24 }}
            >
              <Image
                src={employerLogos[idx % employerLogos.length]}
                alt={employer.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span>
                <a href="#" className="hover:underline text-blue-700">{employer.name}</a>
              </span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Featured Jobs */}
      <section className="container mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">Featured Jobs</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {jobs.map((job) => (
            <span
              key={job}
              className="bg-blue-50 border border-blue-200 text-blue-800 rounded-xl px-6 py-2 m-1 shadow hover:bg-yellow-100 hover:text-yellow-700 transition-all"
            >
              {job}
            </span>
          ))}
        </div>
      </section>

      {/* Quick Job Search & Tags */}
      <section className="container mx-auto px-6 py-8 grid md:grid-cols-2 gap-8">
        <div className="bg-white/90 border-2 border-yellow-200 rounded-2xl shadow-xl p-8 flex flex-col items-center">
          <span className="mb-2 text-blue-700 font-bold text-xl">Quick Job Search</span>
          <input
            type="text"
            placeholder="Search jobs now"
            className="mb-2 max-w-md rounded-lg border border-gray-200 px-4 py-2"
          />
          <Button className="bg-blue-600 hover:bg-yellow-400 hover:text-blue-900 font-bold shadow-lg py-4 px-8 text-lg w-full max-w-md transition-all duration-200 hover:shadow-yellow-300/60 rounded-full">
            View Jobs
          </Button>
          <p className="mt-4 text-blue-700 font-medium text-center text-sm sm:text-base">
            WELCOME OFFER – FREE JOB Postings and Much More.
          </p>
        </div>
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl shadow-xl p-8">
          <span className="font-bold text-base text-blue-700">Search by Tag</span>
          <input
            type="text"
            value={tagSearch}
            onChange={(e) => setTagSearch(e.target.value)}
            placeholder="Search tags..."
            className="mb-3 mt-2 rounded-lg border border-gray-200 px-4 py-2 w-full"
          />
          <div className="flex flex-wrap gap-2 w-full">
            {filteredTags.map((tag) => (
              <span
                key={tag}
                className="bg-white text-blue-600 border-blue-200 rounded px-3 py-1 text-sm mb-1 cursor-pointer hover:bg-yellow-400 hover:text-blue-900 transition"
              >
                {tag}
              </span>
            ))}
            {filteredTags.length === 0 && (
              <span className="text-slate-400 text-sm">No tags found.</span>
            )}
          </div>
        </div>
      </section>

      {/* Jobs in India */}
      <section className="container mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">JOBS IN INDIA</h2>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {cities.map((city) => (
            <span
              key={city}
              className="bg-white text-blue-600 border-blue-200 rounded-xl px-4 py-2 text-sm m-1 shadow"
            >
              {city}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap justify-around items-center bg-blue-50 rounded-xl py-4 font-semibold text-blue-700 mt-2 gap-4 shadow-inner">
          <div>
            <span className="text-2xl font-bold text-yellow-500">40,000+</span>
            <div className="text-xs font-medium">Jobs Posted</div>
          </div>
          <div>
            <span className="text-2xl font-bold text-yellow-500">35,000+</span>
            <div className="text-xs font-medium">Jobs Filled</div>
          </div>
          <div>
            <span className="text-2xl font-bold text-yellow-500">2,500+</span>
            <div className="text-xs font-medium">Employers</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-12 mt-12">
        <div className="mb-4">© 2025 jobRinger. All rights reserved.</div>
        <div className="flex gap-4 justify-center">
          <a href="mailto:info@jobringer.com" className="hover:text-blue-700 transition"><Mail size={18} /></a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-blue-700 transition"><Linkedin size={18} /></a>
          <a href="https://twitter.com" target="_blank" className="hover:text-blue-700 transition"><Twitter size={18} /></a>
        </div>
      </footer>
    </div>
  );
}
