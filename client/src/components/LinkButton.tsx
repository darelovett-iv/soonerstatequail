import { motion } from "framer-motion";
import { ExternalLink, FileText, Globe, Ticket, Download, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface LinkButtonProps {
  title: string;
  url: string;
  icon?: string;
  className?: string;
  index: number;
}

const iconMap: Record<string, LucideIcon> = {
  "Ticket": Ticket,
  "FileText": FileText,
  "Globe": Globe,
  "Download": Download,
};

export function LinkButton({ title, url, icon = "Globe", className, index }: LinkButtonProps) {
  const IconComponent = iconMap[icon] || ExternalLink;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
      className={cn(
        "group relative flex items-center w-full max-w-md mx-auto p-4 mb-4",
        "bg-white border-2 border-[#E5DACE] hover:border-primary/50",
        "rounded-xl shadow-sm hover:shadow-xl hover:shadow-primary/10",
        "transition-all duration-300 ease-out transform hover:-translate-y-1 active:scale-[0.99]",
        "text-left overflow-hidden",
        className
      )}
    >
      {/* Decorative accent bar on left */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary group-hover:bg-primary transition-colors duration-300" />

      {/* Icon Circle */}
      <div className="flex-shrink-0 mr-4 ml-2 w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300">
        <IconComponent className="w-5 h-5 text-primary" />
      </div>

      {/* Content */}
      <div className="flex-grow min-w-0 pr-2">
        <h3 className="font-display font-semibold text-lg text-[#4A3728] group-hover:text-primary transition-colors duration-300 truncate">
          {title}
        </h3>
        <p className="text-sm text-primary/70 truncate flex items-center gap-1">
          <span>
            Open Link
          </span>
          <ExternalLink className="w-3 h-3" />
        </p>
      </div>
      
      {/* Subtle arrow visible by default */}
      <div className="transition-all duration-300 transform group-hover:translate-x-1 text-primary/60">
        →
      </div>
    </motion.a>
  );
}
