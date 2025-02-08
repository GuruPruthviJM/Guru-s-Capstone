import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "../../CSS/Footer/Footer.css"
const Footer = () => {
  const sections = [
    {
      title: "Services",
      links: [
        "Customer Experience Transformation",
        "Data and AI",
        "Product and Platform Engineering",
        "Global Design Studio",
        "Digital Transformation Consulting",
        "Infrastructure, Cloud, and Security",
      ],
    },
    {
      title: "Industries",
      links: [
        "Banking, Financial, and Insurance",
        "Life Sciences",
        "Telecom and Media",
        "Healthcare",
        "Hi-Tech",
        "Retail, Consumer Goods & Distribution",
      ],
    },
    {
      title: "Insights",
      links: [
        "Our Approach",
        "About Us",
        "Partnership",
        "Contact Us",
        "Careers",
        "Our Location",
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          <div>
            <div className="flex justify-center md:justify-start mb-4">
              <img
                src="/brillioLogo.png"
                alt="Logo"
                className="w-32 h-20px"
              />
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, index) => (
                <a key={index} href="#" className="text-white text-xl hover:text-gray-400">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {sections.map((section, index) => (
            <div key={index}>
              <h5 className="text-lg font-semibold mb-3">{section.title}</h5>
              <ul className="space-y-2 list-unstyled">
                {section.links.map((link, idx) => (
                  <li key={idx} className="list-none pl-0">
                    <a href="#" className="hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
