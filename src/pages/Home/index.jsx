import Banner from "../../components/Banner";
import Header from "../../components/Header";
import styles from "./Home.module.css";
import imageBanner from "../../components/Banner/player.png";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header>Novo vídeo</Header>
      <Banner
        image={imageBanner}
        title="Front End"
        subtitle="SEO com React"
        description="Esse desafio é uma forma de aprendizado. É um mecanismo onde você pode se engajar na resolução de um problema para poder aplicar todo o conhecimento adquirido na Formação React."
      />
      <Footer />
    </>
  );
}
