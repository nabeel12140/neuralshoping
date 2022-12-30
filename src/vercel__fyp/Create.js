import React from 'react'
import '../vercel__fyp/Create.css'
import {BsFillTriangleFill} from "react-icons/bs"
import {AiOutlineArrowRight} from "react-icons/ai"
import {GoLinkExternal} from "react-icons/go"
import { Link } from 'react-router-dom'
const Create = () => {
  return (
    <div className='Main__Create'>
    <div className='content__text'>
        <div className='content__text-container'>
            <div className='content__tag'>
                <BsFillTriangleFill/>IDE
            </div>
            <div className='content__text-text'>
                <div className='content__text-icon'>
                    <h4 className='fa fa-check login-icons'>  Instant edge deploys</h4>
                    <div className="content__para">
                    <small>Push to git and your website is live.Zero configuration required.</small>
                    </div>
                </div>
                <div className='content__text-icon'>
                    
                    <h4 className='fa fa-check login-icons'> Collaborate with previews</h4>
                    <div className="content__para">
                    <small>Every pull request gets its own preview URL. Share them to gather feedback or run tests.</small>
                    </div>
                </div>
                <div className='content__text-icon'>
                    <h4 className='fa fa-check login-icons'> Turn static to dynamic</h4>
                    <div className="content__para">
                    <small>Generate blazing fast pages and augment them with rich JavaScript that brings your apps alive.</small>
                    </div>
                </div>
                <div className='content__text-icon'>
                    <h4 className='fa fa-check login-icons'> Ship directly to the edge</h4>
                    <div className="content__para">
                    <small>Always fast. Always online. Always a hit.</small>
                    </div>
                </div>
                
            </div>
            <div className='content__img-text'>
                <a>PROUDLY SERVING AMAZING COMPANIES</a>
                <div className='col-md-9 content__img'>
                    <i class="fa-brands fa-square-facebook content__img"></i>
                    <i class="fa-brands fa-square-twitter content__img "></i>
                    <i class="fa-solid fa-user content__img"></i>
                    <i class="fa-brands fa-linkedin content__img"></i>
                    <i class="fa-solid fa-globe content__img"></i>
                    <i class="fa-solid fa-cloud-arrow-up content__img"></i>
                </div>
            </div>
            
            
        </div>
    </div>
    <div className='login1'>
    <div className='login__option'>
        <div className='login__text'>
            <h1>Sign to<br></br> IDE for Features</h1>
            <div className='login__input'>
                <label>First Name</label>
                 <input type="text" placeholder='First Name' class="form-control"></input>
                 <label>Last Name</label>
                 <input type="text" placeholder='Last Name' class="form-control"></input>
                 <label>Email</label>
                 <input type="text" placeholder='@email.com' class="form-control"></input>
                 <label>Password</label>
                 <input type="password" class="form-control"></input>
                 <label>Confirm Password</label>
                 <input type="password" class="form-control"></input>
                 <button type='submit'  className='btn btn-dark sign__up'>Sign Up</button>
            </div>
            
        <a href='#' className='login__a'> Continue with Email <AiOutlineArrowRight/></a>
        <div className='login__text-link'>
            <a>By clicking continue, you agree to our <br></br>
                <a href='#' className='login__a-line'>Term of Services  <GoLinkExternal/></a>and<a href='#' className='login__a-line'> Privacy <GoLinkExternal/></a>
            </a>
           
        </div>
        <div className='login__text-link'>
            <a>Have a complex company use case? <br></br>
                <a href='#' className='login__a-line'>Get enterprise-grade assistance</a>
            </a>
            <hr></hr>
        <a>Already have an account?<a href='#' className='login__a-line'>Log In</a></a>
        </div>
        
        </div>
        
        </div>
    </div>
    
    
    </div>
  )
}

export default Create