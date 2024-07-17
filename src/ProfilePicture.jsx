function ProfilePicture(){

    const imageURL = './src/assets/Profile.jpeg';
    const handleClick = (event) => event.target.style.display = "none";

    return(<img onClick={(event) =>handleClick(event)} src={imageURL}></img>);
}

export default ProfilePicture