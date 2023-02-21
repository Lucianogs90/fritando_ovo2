import Card from "../components/Card";
import Header from "../components/Header";

export default function Home() {
  return (
    <>

    <Header />
      <Card
        titulo="Ovo com arroz e pepino"
        tempoPreparo="15"
        rendimento="2"
        imagem="/images/pexels-01.png"
        descricao="Imagem de um ovo cozido com arroz e pepino"
      />
    </>
  );
}
