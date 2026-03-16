import Navbar from "@/components/Navbar";

export default function CaseStudyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
