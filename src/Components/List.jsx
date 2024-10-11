import '../styles/list.css'



function List(props) {



    
    return (
        
        <>
            <div className="notify1">
                <img src={props.img} alt="Mark profile pic" />
                <div className='about'>
                    <div className='about-one'>
                        <h2>{props.name} <span>{props.when}<strong>{props.about}</strong></span>
                        <span ><strong className='game'>{props.group}</strong></span><span className='red-dot'></span></h2>
                        
                        
                    </div>
                    <span className='time-post-one'>{props.time}</span>
                    
                </div>
            </div>

     </>
    );
}

export default List