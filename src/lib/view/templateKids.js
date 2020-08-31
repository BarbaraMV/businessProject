export const kids = () => {
  const divKids = document.createElement('div');
  divKids.className="templateKids"

  const viewKids = `
  <div class="logo-face" > 
  <img class="owl-icon" src="./img/Icono_Demo_3.png"> 
  </div>
  <div class="intro">
  <h1 class="tittleKids"> ZONA KIDS! </h1>
  <p class="text">En esta zona te encuentras con nuestra serie "Puma Espuma y el Escuadrón Prevención, y con juegos".</p>
  </div>

  <div class="container-video-kids"> 
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>

    <div class="carousel-inner">
      <div class="carousel-item active">
        <iframe width="600" height="400" 
        src="https://www.youtube.com/embed/kDjrJ5Mu_OY" 
        frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="
        width: 100%;">
      </iframe>
        <div class="carousel-caption d-none d-md-block">
          <p class="tittle-video-carrousel">"Ganémosle al virus, Trailer"</p>
        </div>
      </div>

      <div class="carousel-item">
        <iframe width="600" height="400" 
        src="https://www.youtube.com/embed/kDjrJ5Mu_OY" 
        frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="
        width: 100%;">
      </iframe>
        <div class="carousel-caption d-none d-md-block">
          <p class="tittle-video-carrousel">"Puma Espuma y el Escuadrón Prevención en...¡La corona es nuestra!"</p>
        </div>
      </div>

      <div class="carousel-item">
        <iframe width="600" height="400" 
        src="https://www.youtube.com/embed/kDjrJ5Mu_OY" 
        frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="
        width: 100%;">
      </iframe>
        <div class="carousel-caption d-none d-md-block">
          <p class="tittle-video-carrousel">"Puma Espuma y el Escuadrón Prevención en...Una gran aventura en un mundo pequeño"</p>
        </div>
      </div>
    </div>

    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>

    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

</div>
<section>
<p class="title">Conoce a nuestro escuadrón prevención</p>
  <div class="container-pj">
    <div class="row">
      <div class="col"><img class="characters" src="./img/puma1.png"></div>
      <div class="col"><img class="characters"  src="./img/jabier1.png"></div>
      <div class="col"><img class="characters"  src="./img/tomask1.png"></div>
      <div class="col"><img class="characters"  src="./img/guantrini1.png"></div>
    </div>
  </div>
</section>

<section>
  <div class="card-group">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">¿Qué es el coronavirus?</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Previene el coronavirus</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>      </div>
    </div>
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">algo del coronavirus</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="logoHootieHooFooter"> 
    <a href="#/"> 
    <img class="logo-footer" src="./img/Icono_Demo_1.png" alt="Logo del sitio"> 
  </div>

  <div class="menuFooter">
    <p class="opmenuFooter">
      <a href="#/"> Home </a>
        | &nbsp;
      <a href="#/parents"> Zona adultos </a>
        | &nbsp;
      <a href="#/kids"> Zona niños </a>
    </p>

    <p class="menuiconsFooter"> 
      <a href="#/"> 
        <i class="fa fa-home iconFooter"> </i> 
      </a>
      <a href="#/Contact"> 
        <i class="fas fa-phone iconFooter"></i> 
      </a>
      <a href="https://www.youtube.com/channel/UC0Z1Czogj0CW3S0XbRyv_0w" target="_blank"> 
      <i class="fab fa-youtube"></i>
      </a>
    </p>

      <p class="copyrigth">
        ©️ 2020 Hootie Hoo™️  | Todos los derechos reservados.
      </p>
    </div>
  </footer>

  `

  divKids.innerHTML = viewKids;

  return divKids;
}