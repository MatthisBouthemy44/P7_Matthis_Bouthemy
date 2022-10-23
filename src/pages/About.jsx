import Banner from "../components/Header/Banner";
//On import aboutdata
import aboutData from "../data/aboutData";
import Collapse from "../components/Accommodation/Collapse";
import imageBanner from "../assets/aboutbannerDesktop.png";

const About = () => {
  // Switch to display content in the dropdown by title
  //on recupere le contenu de aboutdata avec un switch qu'on déclare dans une constante
  const content = (title) => {
    switch (title) {
      case "fiability":
        return aboutData.fiability;
      case "respect":
        return aboutData.respect;
      case "service":
        return aboutData.service;
      case "sécurity":
        return aboutData.security;
      default:
        console.log("default");
        break;
    }
  };

  return (
    <div className="about">
      <Banner image={imageBanner} />
      <div className="about__dropdowns">
        <Collapse title="Fiabilité" content={content("fiability")} />
        <Collapse title="Respect" content={content("respect")} />
        <Collapse title="Service" content={content("service")} />
        <Collapse title="Sécurité" content={content("sécurity")} />
      </div>
    </div>
  );
};

export default About;
