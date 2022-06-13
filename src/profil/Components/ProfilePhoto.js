
function ProfilePhoto(props){
    return (
    <div>
        <img className="rounded" src={props.children} width="600px" />
      
    </div>
    );
}

export default ProfilePhoto;