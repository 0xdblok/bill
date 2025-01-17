import Image from "next/image";
import Footer from "./component/footer";
import Hero from "./component/hero";
import Bill from "./component/bill";

import Tokenomics from "./component/tokenomics";
export default function Home() {
  return (
    <div className="bg-[#008080]">
      <Hero />
      <Tokenomics /> <Bill />
      <Footer />
    </div>
  );
}
