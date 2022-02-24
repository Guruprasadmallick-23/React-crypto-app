import React from 'react'
import icon from '../images/save.png';
import icon2 from '../images/bag.png';
import icon3 from '../images/copy.png';
import HomeApi from './homeApi';




const Home = () => {

 
  return (
 <div className='home'>
  {/* ...........................Nav Section............................... */}

    <div className="home-nav">
        <h1>Section</h1>
        <div className="price">
             <div className="price-dtl">
               <img src={icon} alt="" />
               <h3>O.2$XYZ</h3>
             </div>
             <h2>Tier 1</h2>
        </div>
    </div>

      {/* ...........................Google Add Section............................... */}

    <div className="googleadd">
      <h1>Lorem ipsum is simply dummy text of the printing and type setting industry</h1>
      <button className='btn'>Tutorial</button>
    </div>

      {/* ...........................Reward  Section............................... */}

      <div className="Reward-section">
        <div className="R-left">
          <h5>Your Rewards</h5>
          <h1>$0.26231428</h1>
          <div className="R">
            <p>$40 AVAX</p>
            <p>$10 BNB</p>
            <p>$210 BTC</p>
          </div>
        </div>
        <div className="R-right">
          <button >Custom Link</button>
        </div>
      </div>

     {/* ...........................Fee Section............................... */} 
      <div className="fee">
          <div className="fee-left">
              <div className="img">
                <img src={icon2} alt="" />
                <h3>12.5% 0f fee</h3>
              </div>
              <h5>Your Referral link for XYZ</h5>
              <div className="copy-link">
                <p>https://unityExchange.design</p>
                <img src={icon3} alt="" />
              </div>
          </div>
          <div className="fee-left">
              <div className="img">
                <img src={icon2} alt="" />
                <h3>12.5% 0f fee</h3>
              </div>
              <h5>Your Referral link for XYZ</h5>
              <div className="copy-link">
                <p>https://unityExchange.design</p>
                <img src={icon3} alt="" />
              </div>
          </div>
     </div> 

 {/* ...........................Tab Section............................... */} 

 <div className="tab">
   <h1>First Tab</h1>
   <h1>Secont Tab</h1>
 </div>

  {/* ...........................Get Api Section............................... */} 

{/* <h1>https://raw.githubusercontent.com/akshita151199/APIs/main/data</h1> */}

{/* <table class="table-element">
      <thead>
        <tr>
          <th>ASSET</th>
          <th>AMOUNT</th>
          <th>USER ACOUNT</th>
          <th>REFERRAL EARNING</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table> */}
   <div>
 <HomeApi/>
   </div>
   


 </div>
  );
};

export default Home;