import React from "react";
import TitleLine from "../components/TitleLine";
import VcnStatsBox from "../components/vcnStatsBox";
import { vcnPrimaryStats } from "../utils/data";
import NepalMapVCNImpactSVG from "../components/svgComponents/NepalMapVCNImpactSVG";

export default function OurImpactSection() {
  return (
    <section className="our-impact-container">
      <div className="title-container">
        <h1 className="h1 swed-blue">Our Impact</h1>
        <TitleLine color="swed-yellow" />
      </div>
      <div className="stats-and-map-container">
        <div className="stats-and-button">
          <div className="stats-container">
            {vcnPrimaryStats &&
              vcnPrimaryStats.map((stat) => (
                <VcnStatsBox
                  key={stat.descriptor}
                  icon={stat.icon}
                  number={stat.number}
                  descriptor={stat.descriptor}
                />
              ))}
          </div>
          <button className="primary-button black-text-100">
            View All Stats
          </button>
        </div>
        <div className="impact-map-container">
          <NepalMapVCNImpactSVG className="impact-map" />
          <div className="map-stats-legend-container">
            <table className="map-stats">
              <tbody>
                <tr>
                  <th scope="row">Countries:</th>
                  <td>1</td>
                </tr>
                <tr>
                  <th scope="row">Provinces:</th>
                  <td>7</td>
                </tr>
                <tr>
                  <th scope="row">Districts:</th>
                  <td>35</td>
                </tr>
                <tr>
                  <th scope="row">Metropolitan:</th>
                  <td>4</td>
                </tr>
                <tr>
                  <th scope="row">Sub-Metropolitan:</th>
                  <td>3</td>
                </tr>
                <tr>
                  <th scope="row">Municipalities:</th>
                  <td>27</td>
                </tr>
                <tr>
                  <th scope="row">Rural Municipalities:</th>
                  <td>22</td>
                </tr>
                <tr>
                  <th scope="row">Total Projects:</th>
                  <td>76</td>
                </tr>
              </tbody>
            </table>
            <div className="map-legend">
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#2FDAD0" }}
                ></span>
                <span className="small name">Darchula</span>
              </div>

              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#C830E1" }}
                ></span>
                <span className="small name">Sindhupalchowk</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#DC143C" }}
                ></span>
                <span className="small name">Kathmandu</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#FCF8A9" }}
                ></span>
                <span className="small name">Bajhang</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#1A7A47" }}
                ></span>
                <span className="small name">Parsa</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#003893" }}
                ></span>
                <span className="small name">Bhaktapur</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#D7397B" }}
                ></span>
                <span className="small name">Bajura</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#D3EEF4" }}
                ></span>
                <span className="small name">Bara</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#FECC02" }}
                ></span>
                <span className="small name">Lalitpur</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#75EC96" }}
                ></span>
                <span className="small name">Mugu</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#7F4489" }}
                ></span>
                <span className="small name">Sarlahi</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#10AD15" }}
                ></span>
                <span className="small name">Kavrepalanchowk</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#30D7B9" }}
                ></span>
                <span className="small name">Achham</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#653333" }}
                ></span>
                <span className="small name">Dhanusha</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#E47C1C" }}
                ></span>
                <span className="small name">Jajarkot</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#101F46" }}
                ></span>
                <span className="small name">Doti</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#444F89" }}
                ></span>
                <span className="small name">Siraha</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#CAB8E0" }}
                ></span>
                <span className="small name">Rukum West</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#5F5555" }}
                ></span>
                <span className="small name">Kailali</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#EDE530" }}
                ></span>
                <span className="small name">Saptari</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#EED19A" }}
                ></span>
                <span className="small name">Mustang</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#3176DC" }}
                ></span>
                <span className="small name">Surkhet</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#A78E5F" }}
                ></span>
                <span className="small name">Solukhumbu</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#A5D442" }}
                ></span>
                <span className="small name">Syangja</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#C6A398" }}
                ></span>
                <span className="small name">Bardiya</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#358199" }}
                ></span>
                <span className="small name">Khotang</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#782DF2" }}
                ></span>
                <span className="small name">Rupandehi</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#69B7FF" }}
                ></span>
                <span className="small name">Banke</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#51EDED" }}
                ></span>
                <span className="small name">Dhankuta</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#F3879D" }}
                ></span>
                <span className="small name">Chitwan</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#A83636" }}
                ></span>
                <span className="small name">Dailekh</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#FC3F3F" }}
                ></span>
                <span className="small name">Taplejung</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#C1D9E4" }}
                ></span>
                <span className="small name">Udayapur</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#F3CCDA" }}
                ></span>
                <span className="small name">Rautahat</span>
              </div>
              <div className="legend-elements">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#EDB186" }}
                ></span>
                <span className="small name">Mahottari</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
