import { HomeIcon, GlobeAltIcon, WrenchScrewdriverIcon, InformationCircleIcon, BuildingOfficeIcon, LifebuoyIcon } from "@heroicons/react/24/outline";
import { Facebook, Twitter, Instagram, Linkedin, Play } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f7f7fc] text-[#3a3a55] py-10 text-sm">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 border-b pb-6">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-[#2d2d5a] mb-3 flex items-center">
                <section.icon className="w-5 h-5 mr-2 text-teal-500" />
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link} className="hover:text-teal-500 cursor-pointer">{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between py-6 text-center md:text-left">
          <div className="flex items-center space-x-3">
            <span className="font-semibold text-lg">HOSTINGER</span>
            <div className="flex space-x-2">
              <Facebook className="cursor-pointer hover:text-teal-500 w-5 h-5" />
              <Twitter className="cursor-pointer hover:text-teal-500 w-5 h-5" />
              <Instagram className="cursor-pointer hover:text-teal-500 w-5 h-5" />
              <Linkedin className="cursor-pointer hover:text-teal-500 w-5 h-5" />
              <Play className="cursor-pointer hover:text-teal-500 w-5 h-5" />
            </div>
          </div>
          <p className="mt-4 md:mt-0">&copy; 2004-2025 hostinger.com - Premium Web Hosting & Domain Registration Services.</p>
        </div>
      </div>
    </footer>
  );
}

const footerLinks = [
  {
    title: "HOSTING",
    icon: HomeIcon,
    links: ["Web hosting", "Hosting for WordPress", "VPS hosting", "Business email", "Cloud hosting", "WooCommerce hosting", "Hosting for agencies", "Minecraft hosting", "Game server hosting", "Google Workspace"],
  },
  {
    title: "DOMAIN",
    icon: GlobeAltIcon,
    links: ["Domain name search", "Cheap domain names", "Free domain", "WHOIS Lookup", "Free SSL certificate", "Domain transfer", "Domain extensions"],
  },
  {
    title: "TOOLS",
    icon: WrenchScrewdriverIcon,
    links: ["Website Builder", "AI Website Builder", "eCommerce Website Builder", "Business Name Generator", "AI Logo Generator", "Migrate to Hostinger"],
  },
  {
    title: "INFORMATION",
    icon: InformationCircleIcon,
    links: ["Pricing", "Reviews", "Affiliate program", "Referral program", "Roadmap", "Wall of fame", "System status", "Sitemap"],
  },
  {
    title: "COMPANY",
    icon: BuildingOfficeIcon,
    links: ["About Hostinger", "Our technology", "Newsroom", "Career", "Blog", "Student discount", "Sustainability", "Principles"],
  },
  {
    title: "SUPPORT",
    icon: LifebuoyIcon,
    links: ["Tutorials", "Knowledge Base", "Contact us", "Report abuse"],
  },
];
