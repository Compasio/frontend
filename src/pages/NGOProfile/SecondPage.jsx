import React from "react"
import "./SecondPage.css"
import ImgSrc from "../../img/medicosemfronteiras.png";

const SecondPage = () => {
  return (
    <div className="SecondPage">
      <header>
        <nav>
          <span class="material-symbols-outlined">
            arrow_back
          </span>
          <h1>Perfil ONG</h1>
          <span class="material-symbols-outlined">
            settings
          </span>
        </nav>
      </header>

      <main>
        <div className="Top">
          <figure>
            <img src={ImgSrc} alt="" />
          </figure>
          <section>
            <div>
              <h1>Médicos sem Fronteiras</h1>
              <a href="/perfilONG">
                <span class="material-symbols-outlined">
                  chevron_left
                </span>
              </a>
            </div>
            <p>Médicos sem Fronteiras é uma organização internacional, não governamental e sem fins lucrativos que oferece ajuda médica e humanitária a populações em situações de emergência, em casos como conflitos armados, catástrofes, epidemias, fome e exclusão social.</p>
          </section>
        </div>

        <div className="Bottom">
          <h2>Projetos:</h2>
          <div>
            <span>Projeto 1</span>
            <span>Projeto 2</span>
            <span>Projeto 3</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SecondPage