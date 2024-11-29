import Welcome from "../pages/Welcome";

import { useEffect, useState } from "react";

function MainLayout() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

    useEffect(() => {
      const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div>
        {isDesktop ? (
            <div className="p-8 grid grid-cols-1 gap-6 max-w-screen-2xl mx-auto">
                <div className="">
                    <Welcome/>
                </div>

            </div>
        ) : (
            <div className="">
                
            </div>
        )}
    </div>
  );
}

export default MainLayout