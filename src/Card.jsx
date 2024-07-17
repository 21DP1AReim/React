import profilePic from './assets/Profile.jpeg'

function Card(){

    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>Artis</h2>
            <p className='card-text'>I am a student studying in RVT, I like programming</p>
        </div>      
    );
}

export default Card