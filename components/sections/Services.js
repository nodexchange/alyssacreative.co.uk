import React from 'react'
// import Fade from 'react-reveal';
import { Tile } from '@components';
import TileItem from '../TileItem';
function Services() {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="leading-tight text-black font-bold text-xl md:text-2xl lg:text-4xl">Digital Marketing
and Design Services</h2>
                {/* <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600"></p> */}
            </div>

            <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
                {/* <Fade left> */}
                    <Tile title="Digital Marketing">
                        <TileItem title="Blogging" />
                        <TileItem title="E-newsletters" />
                        <TileItem title="Social Media Management" />
                        <TileItem title="Management" />
                        <TileItem title="Audience Growth" />
                        <TileItem title="Copywriting" />
                        <TileItem title="Marketing Strategy" />
                        <TileItem title="Brand Management" />
                    </Tile>
                    <Tile title="Website Management">
                        <TileItem title="Search Engine Optimisation (SEO)" /> 
                        <TileItem title="Content generation" /> 
                        <TileItem title="Website promotion" /> 
                        <TileItem title="Digital marketing" /> 
                        <TileItem title="Analytics" />
                        <TileItem title="Social Media Integration" />
                        <TileItem title="Content Management System" />
                        <TileItem title="User Experience (UX)" />
                    </Tile>
                    <Tile title="Graphic Design">
                        <TileItem title="Logo Design" />
                        <TileItem title="Branding" />
                        <TileItem title="Web Design" />
                        <TileItem title="Photography" />
                        <TileItem title="Brochure" />
                        <TileItem title="Flyers" />
                        <TileItem title="Business Cards & Print" />
                        <TileItem title="Guide Design" />
                    </Tile>
                {/* </Fade> */}
            </div>
        </div>
    </section>


  )
}

export default Services
