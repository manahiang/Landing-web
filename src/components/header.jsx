import React from 'react'
import { AiFillAppstore, AiOutlineArrowRight, AiOutlinePlus } from "react-icons/ai";
import { BsGiftFill } from "react-icons/bs";

function Header() {
    return (
        <div className='container'>
            <div className='header'>
                <div className='menu'>
                    <div className='logo'><img src="https://w7.pngwing.com/pngs/303/549/png-transparent-sport-logo-football-sports-logos-text-sport-logo.png" />
                        <h3>SportBank</h3>
                    </div>

                    <div className='navbar'>
                        <ul>
                            <li><a href='/' className='active'>Home</a></li>
                            <li><a href='/'>Why Us</a></li>
                            <li><a href='/'>Feature</a></li>
                            <li><a href='/'>Support</a></li>
                            <li><a href='/'>Contact Us</a></li>

                        </ul>
                    </div>
                    <div className='login'>
                        <p className='get-demo'>Get the A Demo</p>
                        <p>Login</p>
                    </div>
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
                        <img src='https://cdn.presscentric.com/products/product_images/Business%20Card.png' className='card' />
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
                            <button className='open-acc'>
                                Open Account Now
                            </button>
                        </div>

                        {/* Image */}

                        <img src='https://www.teachhub.com/wp-content/uploads/2020/09/Sept-9-Benefits-of-Group-Work_web.jpg' className='image1' />
                        <img src='https://3back.com/app/uploads/2017/07/Team-scaled.jpg' className='image2' />
                        <div className='tangle1'>
                        </div>
                        <div className='tangle2'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header