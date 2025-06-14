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
          <h1 className="text-center"> Catálogo Junino da Comunidade Santa Marta</h1>
          <p className="text-center">Confira aqui informações sobre nossas barraquinhas!</p>

          <h3 className="text-2xl font-black text-center pt-5">COMIDAS</h3>
          <Carousel>
              {[
                  <Card key={1} icon={
                      <Image
                        src={`/pacoca.png`}
                        width={100}
                        height={100}
                        alt="Paçoca"
                      />
                  } title="Paçoca" price="1,00"/>,
                  <Card key={2} icon={
                      <Image
                        src={`/bolo-de-milho.png`}
                        width={100}
                        height={100}
                        alt="Bolo"
                      />
                  } title="Bolo" price="4,00"/>,
                  <Card key={3} icon={
                      <Image
                          src={`/canjica.png`}
                          width={100}
                          height={100}
                          alt="Canjica"
                      />
                  } title="Canjica" price="8,00"/>,
                  <Card key={4} icon={
                      <Image
                          src={`/cachorro-quente.png`}
                          width={100}
                          height={100}
                          alt="Cachorro Quente"
                      />
                  } title="Cachorro Quente" price="8,00"/>,
                  <Card key={5} icon={
                      <Image
                          src={`/arroz-doce.png`}
                          width={100}
                          height={100}
                          alt="Arroz Doce"
                      />
                  } title="Arroz Doce" price="4,00"/>,
                  <Card key={6} icon={
                      <Image
                          src={`/maca-do-amor.png`}
                          width={100}
                          height={100}
                          alt="Maçã do Amor"
                      />
                  } title="Maçã do Amor"/>,
                  <Card key={7} icon={
                      <Image
                          src={`/pipoca.png`}
                          width={100}
                          height={100}
                          alt="Pipoca"
                      />
                  } title="Pipoca" price="2,00"/>,
                  <Card key={8} icon={
                      <Image
                          src={`/caldo-de-mandioca.png`}
                          width={100}
                          height={100}
                          alt="Caldo de Mandioca"
                      />
                  } title="Caldo de Mandioca" price="8,00"/>,
                  <Card key={9} icon={
                      <Image
                          src={`/milho.png`}
                          width={100}
                          height={100}
                          alt="Milho"
                      />
                  } title="Milho" price="5,00"/>,
              ]}
          </Carousel>

          <h3 className="text-2xl font-black text-center pt-5">BEBIDAS</h3>
          <Carousel>
              {[
                  <Card key={1} icon={
                      <Image
                          src={`/quentao.png`}
                          width={100}
                          height={100}
                          alt="Quentão"
                      />
                  } title="Quentão" price="3,00"/>,
                  <Card key={2} icon={
                      <Image
                          src={`/sucos.png`}
                          width={100}
                          height={100}
                          alt="Sucos"
                      />
                  } title="Sucos"/>,
                  <Card key={3} icon={
                      <Image
                          src={`/refrigerantes.png`}
                          width={100}
                          height={100}
                          alt="Refrigerantes"
                      />
                  } title="Refrigerantes" price="3,00"/>,
                  <Card key={4} icon={
                      <Image
                          src={`/agua.png`}
                          width={100}
                          height={100}
                          alt="Garrafa de Água"
                      />
                  } title="Água" price="3,00"/>,
                  <Card key={5} icon={
                      <Image
                          src={`/cerveja.png`}
                          width={100}
                          height={100}
                          alt="Cerveja"
                      />
                  } title="Cerveja" price="7,00"/>,
              ]}
          </Carousel>

          <h3 className="text-2xl font-black text-center pt-5">DIVERSÃO</h3>
          <Carousel>
              <Card key={1} icon={
                  <Image
                      src={`/estralinhos.png`}
                      width={100}
                      height={100}
                      alt="Bombinhas de estalinhos"
                  />
              } title="Estalinhos" price="2,00"/>,
              <Card key={2} icon={
                  <Image
                      src={`/pula-pula.png`}
                      width={100}
                      height={100}
                      alt="Pula Pula"
                  />
              } title="Pula-Pula" price="3,00"/>,
              <Card key={3} icon={
                  <Image
                      src={`/pesca.png`}
                      width={100}
                      height={100}
                      alt="Barraca da Pesca"
                  />
              } title="Pesca"/>,
              <Card key={4} icon={
                  <Image
                      src={`/pebolim.png`}
                      width={100}
                      height={100}
                      alt="Pebolim"
                  />
              } title="Pebolim" price="3,00"/>,
          </Carousel>

          <h3 className="text-2xl font-black text-center pt-5">DIVERSOS</h3>
          <Carousel>
              <Card key={1} icon={
                  <Image
                      src={`/bolsa.png`}
                      width={100}
                      height={100}
                      alt="Bolsa"
                  />
              } title="Bolsa" price="15,00"/>,
              <Card key={2} icon={
                  <Image
                      src={`/sapato-masculino.png`}
                      width={100}
                      height={100}
                      alt="Sapato"
                  />
              } title="Sapato Masculino" price="30,00"/>
              <Card key={3} icon={
                  <Image
                      src={`/sapatenis.png`}
                      width={100}
                      height={100}
                      alt="Sapatênis"
                  />
              } title="Sapatênis" price="15,00"/>
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
