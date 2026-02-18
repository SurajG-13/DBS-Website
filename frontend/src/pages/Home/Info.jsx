import React from "react";
import { Assets } from "../../constants/ImageDB";

/**
 * ======================================================
 * INFO SECTION – FROM PRINCIPAL'S DESK
 * ------------------------------------------------------
 * Layout behaviour:
 * - Mobile  : Image on top, text below (1 column)
 * - Tablet+ : Image left, text right (grid layout)
 * ======================================================
 */

export default function Info() {
  const PrincipalImage = Assets.principalImage;

  return (
    <main className="px-4 sm:px-8 md:px-10 py-10">
      
      {/* ==================================================
          GRID CONTAINER
          - 1 column on mobile
          - 4 columns from medium screens onwards
      =================================================== */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">

        {/* ==================================================
            LEFT SECTION – PRINCIPAL IMAGE & NAME
            - Centered on mobile
            - Fixed max width to avoid oversized image
        =================================================== */}
        <div className="md:col-span-1 flex flex-col items-center text-center">
          <img
            src={PrincipalImage}
            alt="Principal"
            className="
              w-48 h-60 sm:w-64 sm:h-90
              object-cover rounded-lg shadow-lg
            "
          />

          <p className="mt-4 text-sm sm:text-base font-medium">
            Sr. Litty Mathhew, Principal
          </p>
        </div>

        {/* ==================================================
            RIGHT SECTION – MESSAGE CONTENT
            - Full width on mobile
            - Text justified for readability
        =================================================== */}
        <div className="md:col-span-3 leading-relaxed text-justify">

          {/* Section heading */}
          <p
            className="
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl
              font-bold text-center mb-6
            "
          >
            From Principal&apos;s Desk
          </p>

          {/* Main content paragraphs */}
          <p className="mb-4">
            “Education is not the filling of a bucket, but the lighting of a fire” – W. B. Yeats.
            For, it is a quote, but it is an engraved conscious response of all the students of
            Don Bosco School, Thakurnagar.
          </p>

          <p className="mb-4">
            The School is a place where children are encouraged to say “I see it, I get it, I can do it.”
            Our philosophy of education has always been meeting the needs of the individual child.
            Children acquire skills and knowledge easily if we can make the surrounding stimulating
            and purposeful.
          </p>

          <p className="mb-4">
            In the 21st century, the Digital Revolution affects us all. Quite simply,
            it is changing everything: a brilliant barrage of information, entertainment,
            companionship and education is speedily available. In such a surrounding when
            work and effort is valued, the child’s self-esteem is heightened, and from this
            results self-motivation.
          </p>

          <p className="mb-4">
            To my mind, an Educational Institute is about building character,
            enriching minds and about enriching experiences that last a lifetime.
          </p>

          <p className="mb-4">
            I wish all my students a bright and prosperous future.
            May God bless you all!!!
          </p>

          {/* Closing quote */}
          <p className="font-semibold mt-6">
            “Be filled with enthusiasm & taste the nectar of success”
          </p>

        </div>
      </section>
    </main>
  );
}
