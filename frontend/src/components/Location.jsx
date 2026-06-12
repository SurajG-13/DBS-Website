import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import redMarker from "../assets/map-marker-svgrepo-com.svg";

/* =====================================================
   CUSTOM MARKER
===================================================== */
const redIcon = L.icon({
  iconUrl: redMarker,
  iconSize: [36, 52],
  iconAnchor: [18, 52],
  popupAnchor: [0, -50],
  shadowUrl: null,
});

/* =====================================================
   LOCATION COMPONENT
===================================================== */
export default function Location() {
  const position = [
    22.937343698365193,
    88.7834326113937,
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto px-6 lg:px-12">

        {/* ==========================================
            SECTION HEADER
        ========================================== */}
        <div className="text-center mb-14">
          <span
            className="
              inline-block
              px-4
              py-2
              rounded-full
              bg-blue-100
              text-blue-700
              text-sm
              font-medium
            "
          >
            Visit Us
          </span>

          <h2
            className="
              mt-5
              text-4xl
              md:text-5xl
              font-bold
              text-slate-800
              font-playfairDisplay
            "
          >
            Find Our Campus
          </h2>

          <p
            className="
              mt-4
              max-w-5xl
              mx-auto
              text-slate-500
              text-base
              md:text-lg
            "
          >
            Conveniently located in Thakurnagar,
            providing a safe and inspiring environment
            for learning and growth.
          </p>
        </div>

        {/* ==========================================
            CONTENT GRID
        ========================================== */}
        <div className="grid lg:grid-cols-1 gap-8">

          {/* ======================================
              MAP
          ====================================== */}
          <div className="lg:col-span-8">
            <div
              className="
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                shadow-lg
                bg-white
              "
            >
              <div className="h-[500px]">
                <MapContainer
                  center={position}
                  zoom={13}
                  scrollWheelZoom={false}
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                  />

                  <Marker
                    position={position}
                    icon={redIcon}
                  >
                    <Popup>
                      <strong>
                        Don Bosco School
                      </strong>
                      <br />
                      Thakurnagar
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>

         
        </div>

     

      </div>
    </section>
  );
}