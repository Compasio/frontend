import React from "react";
import './Donation.css';
import Logo from '../../img/logosemnome.svg';

export default function Donation() {

  return (
    <div className="Donation">
      <main>
        <header>
          <nav>
            <span class="material-symbols-outlined">
              arrow_back
            </span>
            <h2>Compasio</h2>
          </nav>
        </header>
        <section className="Video">
          <video src=""></video>
          <div>
            <img src={Logo} alt="logo" />
            <h3>Olá [user]!</h3>
            <p>Ajude-nos a continuar nossa missão de capacitar voluntários e mudar vidas.
              A sua doação não é apenas um investimento na nossa organização; é um investimento no futuro. É um voto de confiança no poder das pessoas comuns que se unem para fazer coisas extraordinárias.</p>
            <p>Por isso, convidamos você a se juntar a nós nesta jornada de compaixão, empatia e ação. Juntos, vamos construir um mundo onde a bondade não tenha limites e onde cada pessoa tenha a oportunidade de causar um impacto significativo.</p>
          </div>
        </section>
        <section className="Values">
          <div>
            <input type="checkbox" />
            <h3>Doação Segura</h3>
          </div>

          <div>
            <p>Doar uma vez</p>
            <input type="checkbox" />
          </div>

          <div>
            <input name="valor" type="radio" />
            <p>R$ 50,00</p>
          </div>
          <div>
            <input name="valor" type="radio" />
            <p>R$ 100,00</p>
          </div>
          <div>
            <input name="valor" type="radio" />
            <p>R$ 500,00</p>
          </div>
          <div>
            <input name="valor" type="radio" />
            <p>R$ 1000,00</p>
          </div>
          <div>
            <input name="valor" type="radio" />
            <p>R$ 5000,00</p>
          </div>
          <div>
            <input name="valor" type="radio" />
            <p>R$ 10000,00</p>
          </div>

          <input type="number" />
          <button type="button">Doar</button>
        </section>
      </main>

    </div>
  );
};