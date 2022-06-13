import React from "react";
import FullName from "./Components/Fullname";
import Bio from "./Components/Bio";
import Profession from "./Components/Profession";
import ProfilePhoto from "./Components/ProfilePhoto";
import ProfilPic from "./assets/ProfilePic.jpg";

function Profil() {
   
    return (
        <div className="container">
        <FullName fullName="Yvan"/>
        <Bio bio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
        <Profession profession="Développeur React"/>
        <ProfilePhoto>
        {ProfilPic}
      </ProfilePhoto>
        </div>

    );
  }
  
  export default Profil;
  