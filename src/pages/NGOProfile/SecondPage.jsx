import React from "react"
import "./SecondPage.css"
import ImgSrc from "../../img/medicosemfronteiras.png";

const SecondPage = () => {
  return (
    <div className="SecondPage">
      <header>
        <nav>
          <a href="/buscarVoluntario">
            <span class="material-symbols-outlined">
              arrow_back
            </span>
          </a>
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
          </section>
        </div>

        <div className="Bottom">
          <h2>Projetos:</h2>
          <div>
            <p>Projeto 1</p>
            <p>Projeto 2</p>
            <p>Projeto 3</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SecondPage