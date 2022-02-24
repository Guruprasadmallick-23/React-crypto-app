
import React from 'react'
import icon from '../images/coin.png';
import icon2 from '../images/wallet.png';
import icon3 from '../images/arrow.png';
import button from '../images/button.png'

const RightBar = () => {
  return (
    <>
    <div className='select'>
        <div className="select-left">
          <img src={icon} alt="" />
          <p>Avalanche</p>
        </div>
        <div className="select-right">
          <img src={icon2} alt="" />
          <p>Avalanche</p>
        </div>
    </div>
    <div className="custom-link">
      <img src={icon3} alt="" />
      <h5>Custom Link</h5>
    </div>
    <div className="weblink">
      <h5>https://testnet_xyz_xyx/trade?ref=</h5>
    </div>
    <div className="input">
      <input type="text" placeholder='ENTER' />
    </div>
    <div className="button">
      <button className='btn1'> <img src={button} alt="" /> Custom Link</button>
      <button className='btn2'><img src={button} alt="" /> Cancel</button>
    </div>
    </>
  )
}

export default RightBar;