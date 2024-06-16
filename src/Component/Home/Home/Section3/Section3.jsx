import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import './Section3.css';

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const sections = gsap.utils.toArray("section");
    const totalScroll = window.innerWidth * (sections.length - 1);

    const animateSections = () => {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".container",
          pin: true,
          start: "top top",
         
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => totalScroll,
        },
      });
    };

    let ctx = gsap.context(animateSections, comp);

    return () => ctx.revert();
  }, []);

  const sectionData = [
    {
      id: "image-sailboat",
      imgSrc: "https://i.ibb.co/HPdZzqF/Gemini-Generated-Image-yxdwwnyxdwwnyxdw.jpg",
      imgAlt: "sailboat",
      title: "Beautiful Yacht Journey",
      description: "A Journey with us promises an enchanting voyage aboard a luxurious yacht, offering breathtaking views, serene waters, and unparalleled comfort. As a premium hotel owner, we extend our signature luxury experience to the open sea, ensuring our guests enjoy the highest level of hospitality and service. These journeys include stops at picturesque coastal towns, secluded islands, and vibrant marine life. Passengers can indulge in high-end amenities, gourmet dining, and personalized service, all while experiencing the tranquility and beauty of the open sea. Whether it's a romantic getaway, a family vacation, or an adventurous exploration, a beautiful yacht journey with us promises an unforgettable and rejuvenating escape, reflecting the opulence and excellence of our esteemed hotel."
    },
    {
      id: "image-mountain",
      imgSrc: "https://i.ibb.co/9T965dm/Gemini-Generated-Image-eakpc1eakpc1eakp.jpg",
      imgAlt: "mountain",
      title: "Adventure of the Mountain",
      description: "A Mountain is an exhilarating journey that promises breathtaking views, challenging terrains, and a deep connection with nature. Whether you are scaling rugged peaks, trekking through lush forests, or exploring hidden trails, the mountain adventure offers a thrilling escape from the everyday hustle. As a premium hotel owner, we extend our luxury experience to the wilderness, ensuring our guests enjoy top-notch hospitality even in the great outdoors. Our mountain adventures include guided hikes with experienced professionals, gourmet picnics with panoramic vistas, and cozy accommodations in charming mountain lodges. Guests can immerse themselves in the tranquility of nature, enjoy diverse wildlife, and partake in activities like rock climbing, mountain biking, and stargazing. Whether you are seeking a solo expedition, a family adventure, or a romantic retreat, our mountain adventure promises an unforgettable experience that combines the thrill of the wild with the comfort and luxury you expect from our esteemed hotel."
    },
    {
      id: "image-beach",
      imgSrc: "https://i.ibb.co/6R8j6jC/Gemini-Generated-Image-tqebrztqebrztqeb.jpg",
      imgAlt: "beach",
      title: "Enrich Your Journey with Beach",
      description: "Your journey with our captivating beach experience, offering sun-soaked days, crystal-clear waters, and endless relaxation. As a premier hotel owner, we bring luxury and comfort to pristine shores. Enjoy private cabanas, gourmet beachside dining, and rejuvenating spa treatments by the ocean. For adventure seekers, indulge in snorkeling, paddleboarding, and guided diving excursions. Families can enjoy kid-friendly activities, while couples can savor romantic dinners by the shore. Explore local marine life with our expert-led tours, or simply unwind with a cocktail as you watch the sunset. Whether you desire a tranquil retreat or an adventurous seaside escapade, our beach experience promises unforgettable moments with the impeccable service and elegance that define our esteemed hotel."
    },
    {
      id: "image-skyDiving",
      imgSrc: "https://i.ibb.co/wYVVVYB/70e02518-baf5-4899-9df6-107bf4af0fdb.jpg",
      imgAlt: "skyDiving",
      title: "Explore More With A Jump",
      description: "Experience the ultimate thrill with our skydiving adventure, offering an adrenaline rush like no other. As a premier hotel owner, we extend our luxury and top-notch service to the skies, ensuring your skydiving experience is both exhilarating and safe. Leap from breathtaking heights and freefall amidst stunning aerial views, all under the guidance of our expert instructors. Feel the wind rush past as you soar through the sky, then glide gracefully to the ground, landing near our exclusive drop zone. After your jump, unwind with a celebratory drink and share your adventure with fellow thrill-seekers in a luxurious setting. Whether you are a seasoned jumper or a first-time adventurer, our skydiving experience promises unforgettable moments, combining the excitement of flight with the exceptional service and comfort that define our esteemed hotel."
    },
    {
      id: "image-Surfing",
      imgSrc: "https://i.ibb.co/mbs9XzR/44dd32c2-d52c-484f-a329-ebb8afc5caf6.jpg",
      imgAlt: "surfing",
      title: "Enter Into The Sea To Grasp The Beauty",
      description: "Dive into the exhilarating world of surfing with our premier beach experience. As a distinguished hotel owner, we blend the thrill of riding the waves with unparalleled luxury. Enjoy personalized lessons from expert instructors, ideal conditions with stunning coastal views, and luxurious amenities like private cabanas and beachside spa treatments. After an invigorating session on the water, unwind with a refreshing drink and gourmet snacks in our beachside lounge. Whether you are a beginner or a seasoned surfer, our surfing experience promises unforgettable moments on the waves, combined with the impeccable service and comfort that define our esteemed hotel."
    }
  ];

  return (
    <div>
      <div ref={comp} className="mt-11 overflow-hidden">
        <div className="container">
          <div className="h-screen font-Lato">
            <div className="flex flex-grow bg-white p-3">
              {sectionData.map(({ id, imgSrc, imgAlt, title, description }) => (
                <section key={id}>
                  <div id={id} className="flex justify-center items-center gap-12">
                    <img src={imgSrc} alt={imgAlt} className="w-[500px] h-[450px] rounded-lg" />
                    <div className="w-1/3">
                      <h1 className="text-5xl font-bold time">{title}</h1>
                      <p className="mt-6 font-roboto text-sm">{description}</p>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
        <div className="last"></div>
      </div>
    </div>
  );
};

export default Section3;
