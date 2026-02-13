import React from "react";


function Main() {
 return (
   <main style={{ padding: '20px', textAlign: 'center' }}>
    <div style={{display:'flex',alignItems:'center', justifyContent:'space-between', margin:'80px 100px', gap:'80px'}}>
        <div style={{textAlign:'start'}}>
            <h1 style={{fontSize:'58px'}}>Your everyday <br /> tasks, automated.</h1>
            <p>Whirl lets you design and streamline <br /> your everyday tasks and workflows <br /> in just a few clicks.</p>
            <button style={{background:'#0070A0', marginRight:'24px', color:'white'}}>Book a demo</button>
            <button style={{color:'#0070A0'}}>Learn more</button>
        </div>
        <img style={{ }}src="/desk.png" alt="foto" height={'400px'} width={'400px'} />
    </div>
    <div>
        <p style={{fontSize:'24px', textAlign:'center'}}>Trusted by 50,000+ companies</p>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'60px', marginBottom:'159px'}}>
            <img src="/focus.svg" alt="logo" />
            <img src="/now.svg" alt="logo" />
            <img src="/optimer.svg" alt=" logo" />
            <img src="/carder.svg" alt=" logo" />
        </div>
    </div>

    <div style={{ display:'flex', justifyContent:'space-between'}}>
        <div style={{background:'#FAEA73', textAlign:'start', padding:'32px'}}>
            <img src="/m.svg" alt="logo" />
            <p style={{fontSize:'25px'}}>Fast. Really fast.</p>
            <p>Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco laboris nisi ut <br /> aliquip ex ea commodo consequat.</p>

        </div>
        <div style={{background:'#CCEFF6', textAlign:'start', padding:'32px'}}>
            <img src="/money.svg" alt="logo" />
            <p style={{fontSize:'25px'}}>More bang for buck.</p>
            <p>Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco laboris nisi ut <br />aliquip ex ea commodo consequat.</p>

        </div>

        <div style={{background:'#F7CEDC', textAlign:'start', padding:'32px'}}>
            <img src="/ok.svg" alt="logo" />
            <p style={{fontSize:'25px'}}>Safe and secure.</p>
            <p>Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco laboris nisi ut <br /> aliquip ex ea commodo consequat.</p>

        </div>
    </div>

    <div>
        <h1 style={{textAlign:'start', marginTop:'80px'}}> We will take care of everything, <br />so you can get back to relaxing.</h1>
        <div style={{ display:'flex', flexDirection:'row' , justifyContent:'center', alignItems:'center', gap:'140px'}}>
            <div style={{ }}>
                <div style={{display:'flex', flexDirection:'colum' , alignItems:'center' }}>
                <img src="/1.svg" alt="logo" width={'32px'} height={'32px'} />
                <div>
                    <p>Anti-loss technology</p>
                    <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>

                </div>
            
            </div>
            <div style={{display:'flex', flexDirection:'colum', alignItems:'center' }}>
                <img src="/2.svg" alt="logo"  width={'32px'} height={'32px'}/>
            <p>Exchange easily</p>
            </div>
            <div style={{display:'flex', flexDirection:'colum' , alignItems:'center' }}>
                <img src="/3.svg" alt="logo" width={'32px'} height={'32px'} />
            <p>Fully encrypted</p>
            </div>
            <div style={{display:'flex', flexDirection:'colum', alignItems:'center'  }}>
                <img src="/4.svg" alt="logo" width={'32px'} height={'32px'} />
            <p>Plenty of options</p>
            </div>
            
            </div>
        
        
            <img src="/cS.png" alt="logo" width={'450px'} height={'450px'} />
        </div>
    </div>

    <div style={{ display:'flex', justifyContent:'space-around', padding:'80px 55px'}}>
        <h2 style={{ textAlign:'start'}}>What's Whirl <br />all about?</h2>
        <div style={{ display:'flex', justifyContent:'center', gap:'31px'}}>
            <div style={{ textAlign:'start'}}>
                <h3>All on one place.</h3>
                <p>Ut enim ad minim veniam,<br /> quis nostrud exercitation <br /> ullamco laboris nisi ut aliquip <br /> ex ea commodo consequat.</p>
            </div>

            <div style={{ textAlign:'start'}}>
                <h3>Get daily alerts.</h3>
                <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, <br />sed do eiusmod tempor <br />incididunt ut labore.</p>

                </div>

            <div style={{ textAlign:'start'}}>
                <h3>Safe and secure.</h3>
                <p>Ut enim ad minim veniam,<br /> quis nostrud exercitation <br /> ullamco laboris nisi ut aliquip <br /> ex ea commodo consequat.</p>
            </div>
        </div>
    </div>

    <div style={{background:'#0070A0', display:'flex', flexDirection:'row' , justifyContent:'center', alignItems:'center', padding:'80px 155px', gap:'187px', color:'#FFFFFF'}}>
        <img src="/lamp.png" alt="logo" width={'382px'} height={'374px'} />
        <div style={{ textAlign:'start'}}>
            <h2>Set, forget, and then <br />track.</h2>
            <p style={{fontSize:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
             sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.</p>
             <ul style={{fontSize:'17px', textAlign:'start', listStyle: "none", padding: 0 }}>
                <li>✔ Understand your options</li>
                <li>✔ No lock-ins</li>
                <li>✔ You own the shares</li>
             </ul>
             <button style={{background:'#0070A0', color:'white'}}>Book a Demo</button>
        </div>


    </div>

    <div style={{ margin:'120px 100px' }}>
        <div style={{ textAlign:'start', marginBottom:'68px'}}>
            <h2 >Your tasks, automated.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
        
        </div>
        <div style={{ display:'flex', justifyContent:'center', gap:'65px' }}>
             
            <div style={{ textAlign:'start', fontSize:'14px'}}>
                <img src="/o.png" alt="logo" width={'55px'} height={'55px'} />
                <h3 style={{ fontSize:'20px'}}>Learn your options.</h3>
                <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,<br /> sed do eiusmod tempor.</p>
            </div>

            <div style={{ textAlign:'start', fontSize:'14px'}}>
                <img src="/z.svg" alt="logo" width={'55px'} height={'55px'} />
                <h3 style={{ fontSize:'20px'}}>Stay informed.</h3>
                <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt <br />ut labore et doloretro.</p>

                </div>

            <div style={{ textAlign:'start', fontSize:'14px'}}>
                <img src="/ook.png" alt="logo" width={'55px'} height={'55px'} />
                <h3 style={{ fontSize:'20px'}}>Automate it all.</h3>
                <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed <br /> do eiusmod tempor ipsum.</p>
            </div>
            <div style={{ textAlign:'start', fontSize:'14px'}}>
                <img src="/!.png" alt="logo" width={'55px'} height={'55px'} />
                <h3 style={{ fontSize:'20px'}}>Stay informed.</h3>
                <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed <br />do eiusmod incididunt ut <br /> labore et consectetur.</p>
            </div>
        </div>
    </div>

    <div style={{ padding:'80px', background:'#F7F9FA' }}>
        <div style={{ display:'flex' , alignItems:'center', justifyContent:'space-between'}}>
            <p style={{ fontSize:'42px' }}>Get smarter, with our blog.</p>
            <button style={{color:'#0070A0'  }}>See All Posts</button>
        </div>
        <div style={{display:'flex', gap:'30px'}}>
            <div style={{ textAlign:'start'}}>
                <img src="/kar1.png" alt="logo" width={'355px'} height={'238px'} />
                <div style={{ background:'white',padding:'10px'}}>
                    <button style={{background:'#E6F7FF', color:'#2C90C9'}}>Improvements</button>
                    <h2>Automating Daily Tasks from Your Phone</h2>
                    <p>Dicta nihil ratione corrupti. Aut dolorem dolores omnis laboriosam ratione sequi. Provident ad sed velit. Est ea ab.
                    </p>
                    <p>April 24, 2022</p>
                </div>
                


            </div>


            <div style={{ textAlign:'start'}}>
                <img src="/kar2.png" alt="logo" width={'355px'} height={'238px'} />
                <div style={{ background:'white',padding:'10px'}}>
                    <button style={{background:'#E6F7FF', color:'#2C90C9'}}>Tips & Tricks</button>
                <h2>Can You Automate Group Learning?</h2>
                <p>Dicta nihil ratione corrupti. Aut dolorem dolores omnis laboriosam ratione sequi. Provident ad sed velit. Est ea ab. </p>
                <p>April 24, 2022</p>

                </div>

            </div>


            <div style={{ textAlign:'start'}}>
                <img src="/kar3.png" alt="logo" width={'355px'} height={'238px'} />
                <div style={{ background:'white',padding:'10px'}}>
                    <button style={{background:'#E6F7FF', color:'#2C90C9'}}>News</button>
                <h2>Our $3,000,000 B Round Investors</h2>
                <p>Eos ipsum et est quis neque cum. Quis autem est eligendi amet animi eaque. Itaque minus illo delectus vel vitae dolores minus. </p>
                <p>April 24, 2022</p>
                </div>



            </div>
        </div>

    </div>
    <div>
        <div style={{background:'#E6F7FF', margin:'80px 100px', padding:'55px', textAlign:'start'}}>
            <h1>Get started with Whirl</h1>
            <p style={{fontSize:'18px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt.</p>
            <button style={{background:'#0070A0', color:'white'}}>Book a demo</button>
            <div style={{ display:'flex', gap: '32px'}}>
                <p>✔ Free 30-day trial</p>
                <p>✔ No credit-card required</p>
            </div>
        </div>
    </div>
   </main>
 );
}

export default Main;