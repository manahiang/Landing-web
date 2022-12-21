import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { BsFillCameraFill, BsPlayFill, BsTwitter, BsLinkedin, BsFacebook, BsHeadphones, BsMenuButton, BsFillMenuAppFill } from "react-icons/bs";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { TfiHeadphoneAlt, TfiMenu, TfiTime } from "react-icons/tfi";
import { useState } from 'react';
import { useEffect } from 'react';


function Header() {
    const [menu, setMenu] = useState(false)
    const [screen, setScreen] = useState(window.innerWidth)

    const clickMenu = () => {
        setMenu(!menu)
    }
    useEffect(() => {
        const Changewidth = () => {
            setScreen(window.innerWidth)
        }
        window.addEventListener('resize', Changewidth)
    })
    return (
        <div className='container'>
            <div className='header'>
                <div className='menu'>
                    <div className='logo'><img src="https://safe-stadium.eu/wp-content/uploads/logo-makis-250tr.png" />
                        <h3>SportBank</h3>
                    </div>

                    <div className='navbar'>
                        {
                            (menu || screen > 780) && (
                                <ul>
                                    <AiOutlineClose className='icon-close' onClick={clickMenu} />
                                    <li><a href='/' className='active'>Home</a></li>
                                    <li><a href='/'>Why Us</a></li>
                                    <li><a href='/'>Feature</a></li>
                                    <li><a href='/'>Support</a></li>
                                    <li><a href='/'>Contact Us</a></li>
                                    <button className='btn-demo'>Get A demo</button>
                                    <p className='log-in'>Login</p>

                                </ul>
                            )
                        }

                    </div>
                    <span><TfiMenu className='menu-icon' onClick={clickMenu} /></span>
                </div>
            </div>

            {/* body */}
            <div className='body'>
                <div className='control-body'>
                    <div className='service'>
                        <h1 className='title'>
                            Smart financial services for your <span className='dialy'>daily</span> needs
                        </h1>
                        {/* Position Abolute */}
                        <div className="image-tangle">
                            <img src="https://www.transparentpng.com/thumb/happy-person/LAB6N9-happy-person-best-png.png" />
                            <div className='tangle'></div>

                        </div>
                        <p className='text'>
                            connect with and send money to your friends and family at any time, from anywhere
                        </p>
                        <img src='https://static.vecteezy.com/system/resources/previews/009/384/538/non_2x/internet-wifi-icon-clipart-design-illustration-free-png.png' className='internet-logo' />
                        <div className='g-t'>
                            <button className='get-start'>Get Started</button>
                            <button className='transfer Money Now'>Transfer Money Now</button>
                        </div>
                        {/* Amount */}
                        <div className='center-amount'>
                            <div className='amount'>
                                <div className='happpy-cus'>
                                    <div className='k-p'>
                                        <h3 className='k'>15k</h3>
                                        <AiOutlinePlus className="plus-icon" />
                                    </div>
                                    <p className='text1'>Happy Customers</p>
                                </div>
                                <div className='happpy-cus'>
                                    <div className='k-p'>
                                        <h3 className='k'>25</h3>
                                        <AiOutlinePlus className="plus-icon" />
                                    </div>
                                    <p className='text1'>Years Of Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid'>
                        <div className='system'>
                            <p>System</p>
                            <h4>Online Banking<span><AiOutlineArrowRight className='arrow' /></span></h4>
                        </div>

                        <div className='system'>
                            <p>Services</p>
                            <h4>Our Sercices<span><AiOutlineArrowRight className='arrow' /></span></h4>
                        </div>

                        <div className='system'>
                            <p>Security</p>
                            <h4>Loan & Securities<span><AiOutlineArrowRight className='arrow' /></span></h4>
                        </div>
                    </div>

                    {/* Customized Card */}

                    <div className='customized-card'>
                        <img src='https://www.deutsche-bank.de/dam/deutschebank/de/pgk/ub/kreditkarten-1059x755-master-card-standard-w35441.png.transform/db_eccs_common_imageDesktop/image.png' className='card-image' />
                        <div className='cus-text'>
                            <h1 className='subtitle'>Customized Card</h1>
                            <p className='describe'>Well-designed business cards are an absolute necessity to any real-world marketing strategy of any scale. Make them pop with a bit of color, but keep them professional. Keep a stack of business cards in your front pocket and make it a reflex to hand them to new acquaintances or prospected clients— it just may be the only way they remember you!</p>
                            <div className='grid-card'>
                                <div className='card-com1'>
                                    <div className='com'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/3349/3349225.png' className='gift-icon' />
                                        <p className='text-com'>Welcome Benefits</p>
                                    </div>
                                </div>

                                <div className='card-com2'>
                                    <div className='com'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/8833/8833917.png' className='gift-icon' />
                                        <p className='text-com'>Life Insurance</p>
                                    </div>
                                </div>

                                <div className='card-com3'>
                                    <div className='com'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/1257/1257253.png' className='gift-icon' />
                                        <p className='text-com '>Airport Lounge Access</p>
                                    </div>
                                </div>

                                <div className='card-com4'>
                                    <div className='com'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/891/891035.png' className='gift-icon' />
                                        <p className='text-com '>Fuel Surcharge waiver</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Excellent Feature */}

                    <div className='features'>
                        <h1 className='features-sub'>
                            <span className='sub-underline'> Excellent features</span> that you can get with us.
                        </h1>
                        <div className='center'>
                            <div className='grid-features'>
                                <div className='center-expert'>
                                    <div className='expert'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/2016/2016311.png' />
                                        <div className='main-text'>
                                            <h3>Expert Services</h3>
                                            <p>Independent expert analysis, testimony, advice and investigations for complex disputes and projects.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='center-expert'>
                                    <div className='expert'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/2747/2747696.png' />
                                        <div className='main-text'>
                                            <h3>Equity & Debt Market Tips</h3>
                                            <p>Independent expert analysis, testimony, advice and investigations for complex disputes and projects.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='center-expert'>
                                    <div className='expert'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/4945/4945910.png' />
                                        <div className='main-text'>
                                            <h3>Financial Strength</h3>
                                            <p>Independent expert analysis, testimony, advice and investigations for complex disputes and projects.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='center-expert'>
                                    <div className='expert'>
                                        <img src='https://cdn-icons-png.flaticon.com/512/2654/2654462.png' />
                                        <div className='main-text'>
                                            <h3>Investment Planning</h3>
                                            <p>Independent expert analysis, testimony, advice and investigations for complex disputes and projects.</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    {/* Work */}

                    <div className='work'>
                        <div className='work-value'>
                            <h1 className='work-title'>
                                How we <span className='work-title-un'>works</span>
                            </h1>
                            <p className='work-des'>
                                “I have long thought that what the Buddha taught can be seen as a highly developed science of mind which, if made more accessible to a lay audience, could benefit many people.
                            </p>
                            <div className='main-order'>
                                <div className='order'>
                                    <p className='circle-order'>1</p>
                                    <p className='order-text'>work, in physics, measure of energy transfer that occurs </p>
                                </div>
                                <div className='order'>
                                    <p className='circle-order'>2</p>
                                    <p className='order-text'>work, in physics, measure of energy transfer that occurs </p>
                                </div>
                                <div className='order'>
                                    <p className='circle-order'>3</p>
                                    <p className='order-text'>work, in physics, measure of energy transfer that occurs </p>
                                </div>
                                <div className='order'>
                                    <p className='circle-order'>4</p>
                                    <p className='order-text'>work, in physics, measure of energy transfer that occurs </p>
                                </div>
                            </div>
                            <div className='main-open-acc'>
                                <button className='open-acc'>
                                    Open Account Now
                                </button>
                            </div>
                        </div>

                        {/* Image */}
                        <div className='image-work'>
                            <img src='https://www.teachhub.com/wp-content/uploads/2020/09/Sept-9-Benefits-of-Group-Work_web.jpg' className='image1' />
                            <img src='https://3back.com/app/uploads/2017/07/Team-scaled.jpg' className='image2' />
                            <div className='tangle1'>
                            </div>
                            <div className='tangle2'>
                            </div>
                        </div>
                    </div>

                    {/* Bank for tommorrow */}

                    <div className='tomorrow'>
                        <h1 className="tmr-subtitle">
                            Bank for a better <span className='tmr-subtitle-un'>tomorrow</span>
                        </h1>
                        <p className='text-des'>
                            Insights gives you a clear overview of your finances.
                            With Pockets, your practical sub-accounts, you can save money in a targeted way. And you are able to invest money 100% sustainably with our invest product .
                        </p>
                        <div className='box'>
                            <div className='box-overlay'>
                                <div className='box-circle'>
                                    <div className='box-display'>
                                        <BsPlayFill className='play-icon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='customer'>
                        <div className='cus-overlay'>
                            <h1 className='cus-subtitle'>
                                Our customer says
                            </h1>
                            <div className='cus-say'>
                                <div className='box-pro'>
                                    <AiOutlineArrowLeft className='arrow-pro' />
                                </div>

                                <div className='box-pro1'>
                                    <img src='https://www.bylinebank.com/wp-content/uploads/2020/10/pers-checking-freedom-500x500-1-500x500.jpg' className='pro-img' />
                                </div>

                                <div className='box-pro2'>
                                    <img src='https://images.squarespace-cdn.com/content/v1/5b14d6b9e17ba3952cac9f04/1529195603042-9ITIYY4D1VS00NETN01Q/image-asset.jpeg' className='pro-img' />
                                </div>

                                <div className='box-pro3'>
                                    <img src='https://www.frontier-economics.com.au/wp-content/uploads/2018/06/daveappels_revised-500x500.jpg' className='pro-img' />
                                </div>
                                <div className='box-pro4'>
                                    <AiOutlineArrowRight className='arrow-pro' />
                                </div>
                            </div>
                            <div className='rate'>
                                <img src='https://img.icons8.com/color/512/filled-star.png' />
                                <img src='https://img.icons8.com/color/512/filled-star.png' />
                                <img src='https://img.icons8.com/color/512/filled-star.png' />
                                <img src='https://img.icons8.com/color/512/filled-star.png' />
                                <img src='https://img.icons8.com/color/512/star.png' />
                            </div>
                            <p className='customer-text'>
                                Tweet
                                Post
                                Share
                                Save
                                Buy Copies
                                Print
                                The idea that companies must “delight” their customers has become so entrenched that managers rarely examine it. But ask yourself this: How often does someone patronize a company specifically because of its over-the-top service?
                            </p>
                            <p className='cus-name'>
                                Jonh Deniel
                            </p>
                            <p className='ltd'>
                                -CEO at ABC pvt ltd.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div className='control-footer'>
                    <div className='grid-footer'>
                        <div className='center-grid'>
                            <div className='logo-name'>
                                <img src='https://www.pngmart.com/files/5/Bank-PNG-Transparent.png' />
                                <h1 className='footer-logo-name'>SportBank</h1>
                            </div>
                            <p className='footer-text'>Sportbank: Easy Banking Online. Finance. More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800-MY-APPLE.</p>
                            < a href=''>
                                <div className='c-footer'>
                                    <div className='c-camera'>
                                        <BsFillCameraFill className='camera' />
                                    </div>

                                    <div className='c-camera1'>
                                        <BsTwitter className='camera1' />
                                    </div>

                                    <div className='c-camera1'>
                                        <FaLinkedinIn className='camera1' />
                                    </div>

                                    <div className='c-camera1'>
                                        <FaFacebookF className='camera1' />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className='footer-menu'>
                            <a href='' >
                                <div className='center-footer-menu'>
                                    <p>About Us</p>
                                    <p>Why Us</p>
                                    <p>Features</p>
                                    <p>Support</p>
                                    <p>Contact Us</p>
                                </div>
                            </a>

                        </div>
                        <div className='right-footer'>
                            <div className='center-right-footer'>
                                <h1 className='number-cus-care'>445-777-454-67</h1>
                                <TfiHeadphoneAlt className='headphone' /><span className='cus-care'>Customer care</span>
                                <h1 className='number-cus-care1'>Mon-Fri: 11:00 am to 5:00 pm</h1>
                                <TfiTime className='headphone1' /><span className='cus-care1'>Banking Hours</span>
                            </div>
                        </div>

                    </div>
                    <hr />
                    <p className='end-page'>
                        Coppyright © 2022 SportBank. alright reserved.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Header