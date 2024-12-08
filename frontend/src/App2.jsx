/**
 * App for website contents
 */

import TopNavbar from "@/components/Nav/TopNavbar";
import Header from "@/components/Sections/Header";
import Services from "@/components/Sections/Services";
import Ai from "@/components/Sections/Ai";

function App2() {

  return (
    <div aria-label="Website contents">
      <TopNavbar />
      <Header />
      <Services />
      <Ai />
    </div>
  );
}

export default App2;