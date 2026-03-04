import { LinkButton } from "@/components/LinkButton";
import { motion } from "framer-motion";
import logo from "@assets/OKC_full_color_logo_sooner_PNG-yellowtxt_(2)_1770994602931.png";

// Hardcoded links for static deployment (Netlify)
const LINKS = [
  { id: 1, title: "Purchase Tickets & Tables", url: "https://soonerstateqc.muradbid.com", icon: "Ticket", order: 1 },
  { id: 2, title: "2026 Event Flyer", url: "/documents/flyer.pdf", icon: "FileText", order: 2 },
  { id: 3, title: "Sponsorship Form", url: "/documents/sponsorship_form.pdf", icon: "FileText", order: 3 },
  { id: 4, title: "Visit Quail Coalition", url: "https://www.quailcoalition.org/", icon: "Globe", order: 4 },
];

export default function Landing() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-12 px-4 sm:px-6 relative overflow-hidden bg-[#FDFBF7]">
      {/* Background Texture Element */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A3728' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
           }} 
      />

      <div className="w-full max-w-2xl mx-auto z-10 flex flex-col items-center">
        {/* Logo Section */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center relative"
        >
          <div className="w-64 h-64 sm:w-72 sm:h-72 mx-auto rounded-full bg-white shadow-xl flex items-center justify-center p-0 overflow-hidden border-4 border-white ring-1 ring-border/20 mb-6">
            <img 
              src={logo} 
              alt="Sooner State Quail Coalition Logo" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#4A3728] tracking-tight">
            Sooner State
          </h1>
          <h2 className="text-xl sm:text-2xl text-[#4A3728]/80 font-medium mt-1 font-display">
            Quail Coalition
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          
          <div className="mt-8 space-y-2 text-[#4A3728]">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">2026 Event Details</p>
            <h3 className="text-2xl font-display font-bold">Dinner and Auction</h3>
            <div className="space-y-1 opacity-90">
              <p className="text-lg font-medium">April 23, 2026 at The Bower</p>
              <p className="text-sm italic">4600 W Covell Rd, Edmond, OK 73012</p>
            </div>
          </div>
        </motion.div>

        {/* Links Section */}
        <div className="w-full max-w-md space-y-4">
          {LINKS.map((link, idx) => (
            <LinkButton
              key={link.id}
              index={idx}
              title={link.title}
              url={link.url}
              icon={link.icon}
            />
          ))}
        </div>

        {/* Social / Contact Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center space-y-4"
        >
          <p className="text-muted-foreground font-medium">Connect with us</p>
          <div className="flex gap-4 justify-center">
             <a 
               href="https://www.facebook.com/profile.php?id=61587905703395" 
               target="_blank"
               rel="noopener noreferrer"
               className="p-3 bg-white rounded-full text-[#4A3728] shadow-sm hover:shadow-md hover:text-primary transition-all border border-[#E5DACE]"
             >
               <span className="sr-only">Facebook</span>
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
             </a>
             <a 
               href="https://www.instagram.com/soonerstatequail/" 
               target="_blank"
               rel="noopener noreferrer"
               className="p-3 bg-white rounded-full text-[#4A3728] shadow-sm hover:shadow-md hover:text-primary transition-all border border-[#E5DACE]"
             >
               <span className="sr-only">Instagram</span>
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06h.08zM12.001 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.01 1.44.636 1.44 1.439z" clipRule="evenodd" />
                </svg>
             </a>
             <a 
               href="https://www.linkedin.com/company/sooner-state-quail-coalition/about/" 
               target="_blank"
               rel="noopener noreferrer"
               className="p-3 bg-white rounded-full text-[#4A3728] shadow-sm hover:shadow-md hover:text-primary transition-all border border-[#E5DACE]"
             >
               <span className="sr-only">LinkedIn</span>
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
             </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mt-12 text-center text-xs text-muted-foreground pb-8"
        >
          <p>© 2026 Sooner State Quail Coalition.</p>
          <p className="mt-1">All rights reserved.</p>
        </motion.footer>
      </div>
    </div>
  );
}
