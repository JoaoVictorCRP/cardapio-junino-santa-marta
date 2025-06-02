import Header from "./components/Header";
import Section from "./components/Section";
import Card from "./components/Card";
import Carousel from "@/app/components/Carousel";

export default function Home() {
  return (
    <div>
      <Header/>
      <Section>
          <h1 className="text-center"> Cardápio Junino da Comunidade Santa Marta</h1>
          <p className="text-center">Confira aqui nossas deliciosas prendas!</p>

          <h3 className="text-2xl font-black text-center pt-5">COMIDAS</h3>
          <Carousel>
              {[
                  <Card key={1} icon={<p className="text-6xl">?</p>} title="Pamonha"/>,
                  <Card key={2} icon={<p className="text-6xl">?</p>} title="Bolo de Milho/Fubá"/>,
                  <Card key={3} icon={<p className="text-6xl">?</p>} title="Amendoim torrado"/>,
                  <Card key={4} icon={<p className="text-6xl">?</p>} title="Cachorro-Quente"/>,
              ]}
          </Carousel>

          <h3 className="text-2xl font-black text-center pt-5">BEBIDAS</h3>
          <Carousel>
              {[
                  <Card key={1} icon={<p className="text-6xl">?</p>} title="Quentão e Vinho Quente"/>,
                  <Card key={2} icon={<p className="text-6xl">?</p>} title="Chá de Amendoim"/>,
                  <Card key={3} icon={<p className="text-6xl">?</p>} title="Bebidas Regionais"/>,
                  <Card key={4} icon={<p className="text-6xl">?</p>} title="Coca"/>,
                  <Card key={4} icon={<p className="text-6xl">?</p>} title="Água"/>,
              ]}
          </Carousel>

          <h3 className="text-2xl text-center font-black pt-5">FORMAS DE PAGAMENTO</h3>
          <div className="pb-10">
            <ul>
                <li className="text-lg font-medium">✅ Cartão de Crédito</li>
                <li className="text-lg font-medium">✅ Cartão de Débito</li>
                <li className="text-lg font-medium">✅ PIX</li>
                <li className="text-lg font-medium">✅ Dinheiro em espécie</li>
            </ul>

            <h5 className="text-center font-bold text-secondary">Atenção!</h5>
            <p>Ao optar pelo pagamento via PIX, você pode realizar o pagamento direto para a conta bancária da comunidade:</p>
            <ul className="list-disc pl-5">
                <li><b>Chave</b>: (16) 91111-1111</li>
                <li><b>Beneficiada</b>: Elizabeth Santos Matias</li>
                <li><b>Instituição</b>: Banco do Brasil</li>
            </ul>
            <p>Após realizar o pagamento, basta se dirigir a uma barraquinha e apresentar o comprovante ao caixa.</p>
          </div>
      </Section>

    </div>
  );
}
