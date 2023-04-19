import React from "react";
import VideoPlayer from "../videoPlayer/VideoPlayer";
import LaunchpadValue from "./LaunchpadValue";
import Chart from "../chart/Chart";
import { images } from "../../assets/images/images";
import LaunchpadComment from "./LaunchpadComment";
import { Link } from "react-router-dom";

const LaunchpadDescription = ({ item }) => {
  return (
    <div>
      <p className="font-13 mb-4">{item.description}</p>
      <VideoPlayer />
      <div className="my-4">
        {item.data.map((data, index) => {
          return (
            <LaunchpadValue key={index} name={data.name} value={data.value} />
          );
        })}
        {
          item.affiliate ? 
          <div className="">
            <h4 className="font-22 my-4">Affiliate Program</h4>
            {
              item.affiliateData.map((data,index) => {
                return <LaunchpadValue name={data.name} value={data.value} key={index}/>
              })
            }
          </div> 
          :
          <>

          </>
        }
      </div>

      <div className="token_chart">
        <h4 className="font-22">Token Metrics</h4>
        {/* <Chart/> */}
        <img className="my-4" src={images.chart} alt="" />
      </div>
      {
        item.lockRecords ? 
        <div className="mb-3 content bg-white py-4">
            <div className="d-flex align-items-center justify-content-between">
            <h4 className="font-22">Lock records</h4>
            <Link>View All</Link>
            </div>
            <table className="table text-end">
              <thead style={{borderBottom :'2px solid #D7D5DD'}}>
                <tr>
                <td className="text-start font-11">Amount</td>
                <td className="text-center font-11">Unlock Time (UTC)</td>
                <td></td>
                </tr>
              </thead>
              <tbody>
                  {
                    item.lockRecordsData.map((data) => {
                      return <tr>
                        <td className="text-start font-13">{data.price}</td>
                        <td className="text-center font-13">{data.date}</td>
                        <td className="text-end font-11"><Link  className="text-end d-block ">{'View'}</Link></td>
                      </tr>
                    })
                  }
              </tbody>
            </table>

            <table className="table text-end">
              <thead style={{borderBottom :'2px solid #D7D5DD'}}>
                <tr>
                <td className="text-start font-11">Amount</td>
                <td className="text-start font-11">Cycle</td>
                <td className="text-start font-11">TGE</td>
                <td className="text-start font-11">Unlock Time (UTC)</td>
                <td></td>
                </tr>
              </thead>
              <tbody>
                   <tr>
                        <td className="text-start font-13">32,008,008</td>
                        <td className="text-start font-13">12% each 120 days</td>
                        <td className="text-start font-13">12.5%</td>
                        <td className="text-start font-13">2023.07.05 14:00</td>
                        <td className="text-end font-11"><Link  className="text-end d-block">{'View'}</Link></td>
                    </tr>
            
              </tbody>
            </table>

        </div> 
        : 
        <>

        </>
      }
        <LaunchpadComment/>
    </div>
  );
};

export default LaunchpadDescription;
