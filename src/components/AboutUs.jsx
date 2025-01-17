import React from "react";
import Image from "next/image";


const AboutUs = () => {
  return (
    <div className="px-14 py-5 bg-[--whitetext]">
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-4">About Medtrade Systems</h1>
          <p className="text-lg max-w-2xl mx-auto">
            At Medtrade Systems, we aim to bridge the gap between innovation
            and healthcare. Providing top-quality medical equipment to improve
            lives.
          </p>
        </div>
        <div className="absolute inset-0 bg-blue-900 opacity-20">
          <Image
            src="/img/elisabeth-zink-ZA6DgNbXxro-unsplash.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            quality={75}
            className="z-[-1]"
          />
        </div>
      </section>
      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-lg mb-4">
              Medtrade Systems was founded with a vision to provide reliable
              and advanced medical equipment to both businesses and individual
              customers. Over the years, we have partnered with top
              manufacturers and developed a reputation for quality and trust.
            </p>
            <p className="text-lg">
              We believe in empowering healthcare providers with the tools they
              need to deliver exceptional care.
            </p>
          </div>
          <div>
            <Image
              src="/img/Screenshot (295).png"
              alt=""
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
            <Image
              src="/img/about down.jpg"
              alt="About Meditrade Systems"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Vision and Values</h2>
            <p className="text-lg mb-4">
            At Meditrade Systems, we believe in bridging the gap between innovation and accessibility in the medical field. Our commitment lies in delivering exceptional products while upholding trust, transparency, and customer satisfaction. With a focus on quality and care, we aim to make a meaningful impact in healthcare solutions worldwide.At Meditrade Systems, we believe in bridging the gap between innovation and accessibility in the medical field. 
            </p>
            <p className="text-lg">
              We believe in empowering healthcare providers with the tools they
              need to deliver exceptional care.
            </p>
          </div>
        
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg mb-4">
            At Medtrade Systems, we pride ourselves on being more than just a supplier of medical products—we’re your trusted partner in advancing healthcare. With a focus on quality, reliability, and customer satisfaction, we go above and beyond to deliver solutions that cater to the unique needs of every client.
            </p>
            <p className="text-lg">
              We believe in empowering healthcare providers with the tools they
              need to deliver exceptional care.
            </p>
          </div>
          <div>
            <Image
              src="/img/about last.jpg"
              alt="About Meditrade Systems"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>


      {/* Mission Statement */}
      <section className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg max-w-2xl mx-auto">
            To make quality medical products accessible to everyone and
            contribute to a healthier world. With innovation and integrity at
            our core, we strive to be a trusted partner in healthcare.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
