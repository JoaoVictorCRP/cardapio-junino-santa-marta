import Header from "./components/Header";
import Section from "./components/Section";
import Card from "./components/Card";

export default function Home() {
  return (
    <div>
      <Header/>
      <Section>
          <h1 className="text-center"> Cardápio Junino da Comunidade Santa Marta</h1>
          <p className="text-center">Confira aqui nossas deliciosas prendas!</p>

          <h3 className="text-2xl font-black text-center pt-5">COMIDAS</h3>
          <div className="flex pb-10">
              <Card
                  icon={<p className="text-6xl">?</p>}
                  title="Pamonha"
                  description="Delícias de milho verde, doces e salgadas, perfeitas para saborear a festa junina."
              />

              <Card
                  icon={<p className="text-6xl">?</p>}
                  title="Bolo de Milho/Fubá"
                  description="Receitas caseiras que trazem o sabor autêntico do milho para sua mesa junina."
              />

              <Card
                  icon={<p className="text-6xl">?</p>}
                  title="Amendoim torrado"
                  description="Um clássico que não pode faltar, o amendoim torradinho."
              />

              <Card
                  icon={<p className="text-6xl">?</p>}
                  title="Cachorro-Quente Junino"
                  description="Uma versão especial do cachorro-quente, com temperos e acompanhamentos caipiras."
              />

          </div>

          <h3 className="text-2xl font-black text-center">BEBIDAS TÍPICAS</h3>
          <div className="flex pb-10">
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

          <h3 className="text-2xl text-center font-black">FORMAS DE PAGAMENTO</h3>
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
