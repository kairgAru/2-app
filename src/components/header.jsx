import React from "react";




function Header() {
 return (
   <header style={{ display:"flex",  backgroundColor: '#f9faf9', padding: '10px', color: 'white', justifyContent: "center", alignItems:'center', textAlign: 'center' }}>
    <img style={{margin: '19px 36px' }}src="/whilr.svg" alt="Whirl logo" />
     
    
     <nav style={{marginRight:'400px'}}>
       <a href="#Features" style={{ margin: '0 10px', color: '#33383F' }}>Features</a>
       <a href="#Pricing" style={{ margin: '0 10px', color: '#33383F' }}>Pricing</a>
       <a href="#Integrations" style={{ margin: '0 10px', color: '#33383F' }}>Integrations</a>
       <a href="#Learn" style={{  margin: '0 10px', color: '#33383F' }}>Learn</a>
     </nav>
     <button style={{ margin: '15px', padding: '5px 15px', backgroundColor: '#f9faf9', color: '#0070A0', border: 'none', borderRadius: '5px'  }}>
       Sign in
     </button>
     <button style={{ margin: '15px', padding: '5px 15px', backgroundColor: '#0070A0', color: 'white', border: 'none', borderRadius: '0px' }}>
       Book a demo
     </button>
   </header>
 );
}

export default Header;
