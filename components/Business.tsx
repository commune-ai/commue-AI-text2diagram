import styles, { layout } from "@/styles/style";
import Button from "./Button";
import Image from "next/image";
import { FeatredCardProps } from "@types";

const Business: React.FC = () => (
  <section id="features">
    <div >
      <h2 className="text-white text-3xl">
      TextGraph Pro transforms written paragraphs into visually appealing graph structures, enabling users to explore   ideas presented in the text more intuitively. By leveraging advanced natural language processing techniques, this web application delivers interactive diagrams generated from user inputs, enhancing comprehension while adding an engaging visual element to traditional linear reading experiences.
      </h2>
      <h2 className="text-white text-3xl mt-10">
      Whether studying complex topics, brainstorming creative ideas, organizing research findings, or simply seeking a fresh approach towards understanding lengthier texts, TextGraph Pro offers an innovative solution tailored to modern learning styles. Explore the power of connecting words and ideas effortlessly with this dynamic tool designed to elevate the reader experience beyond conventional boundaries.
      </h2>

    </div>
  </section>
);

export default Business;
