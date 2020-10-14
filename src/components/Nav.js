import React, { useEffect, useState } from "react";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) handleShow(true);
      else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="logo"
        src="https://wra360netflix.weebly.com/uploads/5/1/7/2/51728063/3641071.png?490"
        alt="netflix logo"
      />
      <img
        className="avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="netflix logo"
      />
    </div>
  );
}

export default Nav;
