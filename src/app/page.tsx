"use client"
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import BackgroundLoader from "../components/BackgroundLoader";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ProductList from "../components/ProductList";
import TestimonialList from "../components/TestimonialList";
import ServiceList from "../components/ServiceList";
import About from "../components/About";
import Hero from "../components/Hero";
import ResumeList from "../components/ResumeList";
import Contact from "../components/Contact";
import Header from "../components/Header";
// import ResumeList from "../components/template_2/ResumeList";



const Page: NextPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule le chargement ou attends que le composant soit monté
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5s

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <BackgroundLoader />

  return (
    <>
    <Header />
    <Hero />
    <About />
    <ResumeList />
    <ServiceList />
    <TestimonialList />
    <ProductList />
    <Contact />
    <ContactForm />

    <Footer />
    
    </>
  )
}

export default Page