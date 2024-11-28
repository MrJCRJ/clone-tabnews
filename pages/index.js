import styled from "styled-components";

const Title = styled.h3`
  font-size: 2rem;
  color: #333;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;

  &:first-child {
    margin-top: 20px;
  }

  &:not(:first-child) {
    margin-top: 10px;
  }
`;

function Home() {
  return (
    <>
      <Title>Cena 1 – A Chegada ao Casamento</Title>

      <Paragraph>
        O céu, tingido de tons rosados e dourados, parecia se derramar pelo
        horizonte como tinta fresca. A luz suave do final da tarde banhava o
        jardim, onde o casamento de Liam e Clara aconteceria. O espaço era quase
        mágico: roseiras alinhavam-se como guardiãs ao redor do gramado
        verdejante, exalando um perfume doce que parecia sussurrar promessas de
        felicidade. Um arco coberto por flores brancas e rosas erguia-se ao
        fundo, emoldurando o altar. Cada detalhe parecia milimetricamente
        planejado, mas havia algo naquela perfeição que soava surreal – ou
        talvez fosse a tensão que pairava entre alguns dos presentes.
      </Paragraph>

      <Paragraph>
        Entre as cadeiras impecavelmente alinhadas, os convidados acomodavam-se,
        vestindo trajes elegantes, sorrisos de ocasião e olhares curiosos. O
        murmúrio das conversas era um som constante, misturado ao farfalhar da
        brisa que movia suavemente os véus e laços pendurados.
      </Paragraph>

      <Paragraph>
        No entanto, para alguns ali, a cerimônia que estava prestes a começar
        era apenas um pano de fundo para algo maior.
      </Paragraph>
    </>
  );
}

export default Home;
