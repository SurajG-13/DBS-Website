import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Assets } from "../constants/ImageDB"

// export default function NoticePopup() {
//   const [show, setShow] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     // Show only on the homepage
//     if (location.pathname !== "/") return;

//     const hasSeen = sessionStorage.getItem("notice_seen");

//     if (!hasSeen) {
//       setShow(true);
//     }
//   }, [location.pathname]);

//   const closePopup = () => {
//     setShow(false);
//     sessionStorage.setItem("notice_seen", "true");
//   };

//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999]">
//       {/* Close Button */}
//       <button
//         onClick={closePopup}
//         className="absolute top-5 right-5 text-white text-3xl font-bold hover:text-red-400"
//       >
//         ✕
//       </button>

//       {/* Notice Image */}
//       <img
//         src={noticeImg}
//         alt="Notice"
//         className="w-[90%] h-[90%] object-contain rounded-lg shadow-xl"
//       />
//     </div>
//   );
// }


export default function NoticePopup() {
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show popup EVERY TIME user enters homepage
    if (location.pathname === "/") {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [location.pathname]);

  const closePopup = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-9999"> 

      <button
        onClick={closePopup}
        className="absolute top-5 right-5 text-white text-3xl font-bold hover:text-red-600"
      >
        ✕
      </button>

      <img
        src={Assets.noticeImage}
        alt="Notice"
        className="w-[90%] h-[90%] object-contain rounded-lg shadow-xl"
      />
    </div>
  );
}
