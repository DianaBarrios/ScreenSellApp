import React from "react";
import "./App.css";
import LOGO from "./LOGO-SS.png";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <div class="container my-4">
        <div class="row">
          <div class="col-lg-6 mt-5">
            <h1>
              <p>
                ¡La mayor{" "}
                <span class="font-weight-bold text-danger">variedad</span> de
                pantallas disponibles!
              </p>
            </h1>
          </div>
          <div class="col-lg-6 p-5">
            <div class="row justify-content-md-center">
              <div class="card text-center">
                <div class="card-header">CATÁLOGO EN LÍNEA</div>

                <div class="card-body">
                  <h5 class="card-title">
                    ¡Hacemos envíos a toda la república!
                  </h5>
                  <p class="card-text">
                    Conoce todas las pantallas táctiles para tablets y celulares
                    que tenemos en{" "}
                    <span class="font-weight-bold text-warning">
                      Mercado Libre
                    </span>
                  </p>
                  <p class="card-text font-weight-bold">
                    Venta a mayoreo y menudeo
                  </p>
                  <a
                    href="https://listado.mercadolibre.com.mx/touch_CustId_444437955#D[A:touch,SI:444437955]"
                    class="btn btn-warning btn-lg"
                  >
                    Comprar
                  </a>
                </div>

                <div class="card-footer text-muted">SCREEN-SELL</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid my-5 App-contact">
        <div class="row justify-content-md-center px-5">
          <div class="card my-4" style={{ width: 450 }}>
            <div class="row no-gutters">
              <div class="col-md-4">
                <a href="https://www.facebook.com/screensell">
                  <img
                    src={LOGO}
                    className="card-img"
                    alt="screen-sell"
                    style={{ width: 200, padding: 5 }}
                  />
                </a>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">PONTE EN CONTACTO</h5>
                  <p class="card-text">
                    Si tienes alguna duda, escríbenos a{" "}
                    <a
                      href="mailto:screensellsinaloa@gmail.com?Subject=Dudas"
                      target="_top"
                    >
                      screensellsinaloa@gmail.com
                    </a>{" "}
                    o a cualquiera de los siguientes contactos.
                  </p>

                  <p class="card-text">
                    Envíos
                    <p>
                      <small>+667-283-1896</small>
                    </p>
                  </p>

                  <p class="card-text">
                    WhatsApp
                    <p>
                      <small>+667-418-6837</small>
                    </p>
                  </p>

                  <p class="card-text">
                    Skype
                    <p>
                      <small>screenselltijuana</small>
                    </p>
                  </p>

                  <p class="card-text">
                    Tijuana
                    <a href="https://www.facebook.com/screensell">
                      <span class="text-decoration-none"> @screensell</span>
                    </a>{" "}
                    <p>
                      <small>+664-638-4869</small>
                    </p>
                  </p>

                  <p class="card-text">
                    Culiacán
                    <a href="https://www.facebook.com/screensellculiacan/">
                      <span class="text-decoration-none">
                        {" "}
                        @screensellculiacan
                      </span>
                    </a>{" "}
                    <p>
                      <small>+667-258-5082</small>
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container my-5">
        <div class="row mx-5 mb-3 justify-content-center">
          <h2>Nuestras ubicaciones</h2>
        </div>
        <div class="row mx-3 justify-content-center">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1QK_YS8xR0CuxuHy8GtRZLrvbpOr-N024"
            width="500"
            height="400"
          ></iframe>
        </div>
      </div>

      <div class="container mt-5 App-footer">This is the footer</div>
    </div>
  );
}

export default App;
