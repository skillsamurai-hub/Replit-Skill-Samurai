import type { Metadata } from "next";
import StudentProjectsSection from "@/components/sections/student-projects";
import FinalCta from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Student Projects | Skill Samurai Winnipeg",
  description:
    "See the real games, apps, and websites built by Skill Samurai Winnipeg students aged 6–18. Roblox games, Python apps, Scratch projects, websites, and more.",
};

export default function StudentProjectsPage() {
  return (
    <>
      <StudentProjectsSection />
      <FinalCta />
    </>
  );
}
