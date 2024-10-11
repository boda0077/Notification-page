 import List from "./List.jsx";
 import '../styles/notify.css';
 import { useState , useEffect} from "react";
 
 

 function Notifications() {

    const [num, setNum] = useState(3);
    const [checked, setChecked] = useState(false);
    const [notify , setNotify] = useState(false)
    const lists = document.querySelectorAll('.notify1');
    const redDots = document.querySelectorAll(`.red-dot`);
  
    
    useEffect(() => {
      if (checked) {
        lists.forEach(e => {
          e.classList.add('checked') ;
        });
        redDots.forEach(r => {
          r.classList.add("checked")
        });
      }
    }, [checked]);
    
    function checkNotify() {
    
      setChecked(!checked);
      setNum(0);
    };



   

    return ( 
        <main className="notifications">

            <nav className="nav-bar">
                <div className="notify-div">
                    <h1 className="notify">Notifications</h1>
                    <span className="notify-number" >{num}</span>
                </div>
                <span className="mark-all" onClick={checkNotify}>Mark all as read</span>
            </nav>

            <section className="notification-list">
                <List    img ='../images/avatar-mark-webber.webp' name='Mark Webber' when="reacted to your recent post " about='My first tournament today!' time='1m ago'/>
                <List   img ='../images/avatar-angela-gray.webp' name="Angela Gray" when="followed you" time="5m ago"/>
                <List  img ='../images/avatar-jacob-thompson.webp' name='Jacob Thompson' when="has joined your group " group='Chess Group' time='1day ago'/>

                <div> 
                <div className="readen-notify">
                <img src='../images/avatar-rizky-hasanuddin.webp' alt="Mark profile pic" />
                <div className='about'>
                    <div className='about-one'>
                        <h2>Rizky Hasanuddin</h2>
                        <span>sent you a private message</span>
                    </div>
                    <span className='time-post-one'>5 days ago</span>
 
                </div>
            </div>
            <div className="msg">
                        <p>Hello, thanks for setting up the Chess Club, I've been a member for a few weeks now and I'm already haing alots of gun and improving my game.</p>
                    </div>
                </div>

                <div className=" chess-img">
                <img src='../images/avatar-kimberly-smith.webp' alt="Mark profile pic" />
                <div className='about'>
                    <div className='about-one kimb'>
                        <h2>Kimberly Smith<span> Commented on your picture</span></h2>
                        
                        <img src="../images/image-chess.webp" alt="Chess img" />
                    </div>
                    <span className='time-post-one time-post-fix'>1 week ago</span>
 
                </div>
                
                </div>

                <div className="chess-img">
                <img src="../images/avatar-nathan-peterson.webp" alt="Mark profile pic" />
                <div className='about'>
                    <div className='about-one'>
                        <h2 className="fixingNath"> <span className="nath">Nathan Peterson</span> <span>reacted to your reacent post</span> <strong>5 end-game strategies to increase your win rate</strong></h2>
                        
                    </div>
                    <span className='time-post-one'>2 weeks ago</span>
                    
                </div>
            </div>

            <div className="chess-img">
                <img src="../images/avatar-anna-kim.webp" alt="Mark profile pic" />
                <div className='about'>
                    <div className='about-one'>
                        <h2>Anna Kim <span>left the group</span></h2>
                        <span><strong className="game">Chess Club</strong></span>
                        
                    </div>
                    <span className='time-post-one'>2 weeks ago</span>
                    
                </div>
            </div>


            </section>
        </main>
    );
 }

 export default Notifications ;