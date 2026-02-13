import React from "react";

function Footer() {
 return (
   <footer style={{  backgroundColor: 'white', padding: '10px',  color: '#1F1F1F', textAlign: 'center', marginTop: '20px', margin:'10px 80px' }}>
     <div style={{justifyContent:'space-around',display:'flex', marginBottom:'100px'}}>
     <div  style={{marginRight: '280px'}} >
        <img style={{margin: '19px 36px' }}src="/whilr.svg" alt="Whirl logo" /> 
        <p  style={{fontSize:'14px'}} >Built by <span style={{ color:'#0070A0'}}>Nikolai Bain.</span> <br />
        Powered by <span style={{ color:'#0070A0'}}>Webflow</span></p>

     </div>
     
     <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'center'}}>
        <p style={{color:'#1F1F1F'}}>Info</p>
        <nav style={{display:'flex', flexDirection:'column', alignItems:'self-start', justifyContent:'center'}}>
            <a href="#Features" style={{ margin: '0 10px', color: '#626A72' }}>Features</a>
            <a href="#Pricing" style={{ margin: '0 10px', color: '#626A72' }}>Pricing</a>
            <a href="#Blog" style={{ margin: '0 10px', color: '#626A72' }}>Blog</a>
            <a href="#Support" style={{  margin: '0 10px', color: '#626A72' }}>Support</a>
            <a href="#Terms & Conditions" style={{  margin: '0 10px', color: '#626A72' }}>Terms & Conditions</a>
            <a href="#Privacy Policy" style={{  margin: '0 10px', color: '#626A72' }}>Privacy Policy</a>
        </nav>


     </div>


     <div style={{display:'flex', flexDirection:'column', textAlign:'left'}}>
        <p style={{color:'#1F1F1F', textAlign:'left'}}>Admin</p>
        <nav style={{display:'flex', flexDirection:'column', textAlign:'left'}}>
            <a href="#Style Guide" style={{ margin: '0 10px', color: '#626A72' }}>Style Guide</a>
            <a href="#Licenses" style={{ margin: '0 10px', color: '#626A72' }}>Licenses</a>
            <a href="#Instructions" style={{ margin: '0 10px', color: '#626A72' }}>Instructions</a>
            <a href="#Changelog" style={{  margin: '0 10px', color: '#626A72' }}>Changelog</a>
            <a href="#Password" style={{  margin: '0 10px', color: '#626A72' }}>Password</a>
            <a href="#404" style={{  margin: '0 10px', color: '#626A72' }}>404</a>
        </nav>
     </div>


     <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
        <p>Newsletter</p>
        <p style={{textAlign:'left'}}>Sign up for the latest <br />news, company insights, <br /> and Whirl updates.</p>
        <div>
            <input style={{border:'1px solid #cdd2d6', color:'#626A72'}} type="Your email" />
            <button style={{background:'white'}}>\</button>
        </div>
        

     </div>
     </div>
     <p style={{textAlign:'start', marginBottom:'32px'}}>© 2022 Whirl. All Rights Reserved. Illustrations by <span style={{color:'#0070A0'}}>Streamline</span></p>

   </footer>
 );
}
export default Footer;