import Header from "./components/Header";
import Section from "./components/Section";
import Card from "./components/Card";
import Carousel from "@/app/components/Carousel";
import Image from "next/image";

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
                  <Card key={1} icon={
                      <Image
                        src={`${proccess.env.S3_BUCKET_URL}/pamonha.png`}
                      />
                  } title="Pamonha"/>,
                  <Card key={2} icon={<p className="text-6xl">?</p>} title="Bolo de Milho"/>,
                  <Card key={3} icon={<p className="text-6xl">?</p>} title="Amendoim torrado"/>,
                  <Card key={4} icon={<p className="text-6xl">?</p>} title="Cachorro-Quente"/>,
                  <Card key={4} icon={<p className="text-6xl">?</p>} title="Churrasco"/>,
              ]}
          </Carousel>

          <h3 className="text-2xl font-black text-center pt-5">BEBIDAS</h3>
          <Carousel>
              {[
                  <Card key={1} icon={<p className="text-6xl">?</p>} title="Quentão"/>,
                  <Card key={2} icon={<p className="text-6xl">?</p>} title="Suco"/>,
                  <Card key={3} icon={<p className="text-6xl">?</p>} title="Refrigerantes"/>,
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
