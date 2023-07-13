import Navbar from "../../components/general-components/navbar";
import Footer from "../../components/general-components/footer/footer";
import ComingSoon from "../../components/general-components/comingSoon";
import { useEffect, useState } from "react";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <ComingSoon text="Under development... Coming Soon." />
      <Footer />
    </>
  );
};

export default Blogs;
