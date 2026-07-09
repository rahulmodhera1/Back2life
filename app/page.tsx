import type { Metadata } from "next";
import { SplitLanding } from "@/components/SplitLanding";

export const metadata: Metadata = {
  title: "Back2Life — One Brand. Two Crafts.",
  description:
    "Choose your side: Back2Life Studios barbershop or Back2Life Ink tattoo studio. Grooming that resets you, ink that marks a new chapter.",
};

export default function Home() {
  return <SplitLanding />;
}
