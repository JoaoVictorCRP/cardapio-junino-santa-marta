import Header from "./components/Header";
import Section from "@/app/components/Section";
import Card from "@/app/components/Card";
import { FaBook, FaCamera, FaCalendarAlt, FaFlag, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Header/>
      <Section>
          <h1 className="text-center"> Em construção! ⚒️</h1>
          <div className="flex">
              <Card
                  icon={<FaBook size={50} color={"#d32f2f"}/>}
                  title="Nossa História"
                  description="Conheça a trajetória e os marcos da nossa comunidade."
              />

              <Card
                  icon={<FaCamera size={50} color={"#d32f2f"}/>}
                  title="Fotos"
                  description="Confira os principais momentos em registros fotográficos."
              />

              <Card
                  icon={<FaCalendarAlt size={50} color={"#d32f2f"}/>}
                  title="Programação"
                  description="Veja a agenda de eventos religiosos, encontros e celebrações."
              />

              <Card
                  icon={<FaFlag size={50} color={"#d32f2f"}/>}
                  title="Eventos"
                  description="Detalhes dos eventos e festas da nossa comunidade."
              />

              <Card
                  icon={<FaEnvelope size={50} color={"#d32f2f"}/>}
                  title="Contato"
                  description="Encontre endereço, telefone e WhatsApp da comunidade."
              />
          </div>

      </Section>
    </div>
  );
}
