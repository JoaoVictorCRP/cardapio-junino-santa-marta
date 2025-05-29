import Header from "./components/Header";
import Section from "./components/Section";
import Card from "./components/Card";
import { FaBook, FaCamera, FaCalendarAlt, FaFlag, FaEnvelope } from "react-icons/fa";


export default function Home() {
  return (
    <div>
      <Header/>
      <Section>
          <h1 className="text-center"> Cardápio Junino - Comunidade Santa Marta</h1>
          <p className="text-center">Confira aqui nossas deliciosas prendas!</p>

          <h3 className="text-2xl text-center pt-5">Comidas</h3>
          <div className="flex pb-10">
              <Card
                  icon={<p className="text-6xl">?</p>}
                  title="Pamonha e Curau"
                  description="Delícias de milho verde, doces e salgadas, perfeitas para saborear a festa junina."
              />

              <Card
                  icon={<p className="text-6xl">?</p>}
                  title="Bolo de Milho e Fubá"
                  description="Receitas caseiras que trazem o sabor autêntico do milho para sua mesa junina."
              />

              <Card
                  icon={<p className="text-6xl">?</p>}
                  title="Pipoca e Amendoim"
                  description="Os clássicos que não podem faltar: pipoca fresquinha e amendoim torrado."
              />

              <Card
                  icon={<p className="text-6xl">?</p>}
                  title="Cachorro-Quente Junino"
                  description="Uma versão especial do cachorro-quente, com temperos e acompanhamentos caipiras."
              />

          </div>

          <h3 className="text-2xl text-center">Bebidas Típicas</h3>
          <div className="flex">
              <Card
                  icon={<p className="text-6xl">?</p>}
                  title="Quentão e Vinho Quente"
                  description="As bebidas que aquecem a alma e o corpo nas noites frias de São João."
              />

              <Card
                  icon={<p className="text-6xl">?</p>}
                  title="Chá de Amendoim"
                  description="Uma bebida cremosa e saborosa, com o toque especial do amendoim."
              />

              <Card
                  icon={<p className="text-6xl">?</p>}
                  title="Bebidas Regionais"
                  description="Descubra outras opções de bebidas tradicionais de festas juninas pelo Brasil."
              />

              <Card
                  icon={<p className="text-6xl">?</p>}
                  title="Refrigerantes e Água"
                  description="Opções refrescantes para todos os gostos, para acompanhar as delícias juninas."
              />

          </div>


      </Section>
    </div>
  );
}
