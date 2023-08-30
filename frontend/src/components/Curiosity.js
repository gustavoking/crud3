import React from "react";
import styled from "styled-components";
import cao from "./../assets/cao.jpg";
import gato from "./../assets/gato.jpg";
import girafa from "./../assets/girafa.jpg";
import crocodilo from "./../assets/crocodilo.jpg";
import coala from "./../assets/coala.jpg";
import passaro from "./../assets/passaro.jpg";

const AppContainer = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
`;

const Navigation = styled.nav`
  background-color: #f0f0f0;
  padding: 10px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const NavItem = styled.li`
  margin: 0 15px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &:hover {
    color: #555;
  }
`;

const Main = styled.main`
  padding: 40px;
`;

const AnimalSection = styled.section`
  margin-bottom: 30px;
`;

const AnimalImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;

  h2 {
    margin-bottom: 10px;
  }
`;

function Curiosity() {
  return (
    <AppContainer>
      <Header>
        <h1>Página de Animais</h1>
        <p>Curiosidades que voce não sabia a seguir</p>
      </Header>
      <Navigation>
        <NavList>
          <NavItem>
            <NavLink href="#cachorro">Cães</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#gato">Gatos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#passaro">Pássaros</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#birds">Coalas</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#girafa">Girafas</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#crocodilo">Crocodilos</NavLink>
          </NavItem>
        </NavList>
      </Navigation>
      <Main>
        <AnimalSection id="cachorro">
          <Card>
            <h2>Cães</h2>
            <AnimalImage src={cao} alt="Cachorro" />
            <p>
              A audição dos cachorros é 10 vezes melhor do que a dos humanos
            </p>
          </Card>
        </AnimalSection>
        <AnimalSection id="gato">
          <Card>
            <h2>Gatos</h2>
            <AnimalImage src={gato} alt="Cachorro" />
            <p>Ronronar é uma maneira de o felino comunicar algum sentimento</p>
          </Card>
        </AnimalSection>
        <AnimalSection id="passaro">
          <Card>
            <h2>Pássaros</h2>
            <AnimalImage src={passaro} alt="Cachorro" />

            <p>
              Muitas espécies vivem mais do que gatos e cachorros, podendo
              atingir 40 a 60 anos ou mais
            </p>
          </Card>
        </AnimalSection>
        <AnimalSection id="coalas">
          <Card>
            <h2>Coalas</h2>
            <AnimalImage src={coala} alt="Cachorro" />
            <p>Coalas dormem 22 horas por dia</p>
          </Card>
        </AnimalSection>
        <AnimalSection id="girafa">
          <Card>
            <h2>Girafas</h2>
            <AnimalImage src={girafa} alt="Cachorro" />
            <p>
              E as línguas das girafas são tão longas que elas podem lamber seus
              próprios ouvidos.
            </p>
          </Card>
        </AnimalSection>
        <AnimalSection id="crocodilo">
          <Card>
            <h2>Crocodilos</h2>
            <AnimalImage src={crocodilo} alt="Cachorro" />
            <p>Os crocodilos podem sobreviver por três anos sem alimentos.</p>
          </Card>
        </AnimalSection>
      </Main>
    </AppContainer>
  );
}

export default Curiosity;
