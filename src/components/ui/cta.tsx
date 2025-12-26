import Link from "next/link";
import { cn } from "@/lib/utils";

interface ctaProps {
    link?: boolean;
    href?: string;
    children?: React.ReactNode;
    className?: string;
};

export default function Cta({link = false, href, children = true, className}: ctaProps) {
    if (link) {
        if (!href) {
            return;   
        }
        return (
            <Link 
                href={href}
                className={cn(className, 'inline-flex items-center justify-center')}>
                {children}
            </Link>            
        );
    }
}