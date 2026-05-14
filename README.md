# portalk
Site construído para atividade de Programação Web.



<header>
    <h1>PORTALTAK</h1> <img src="">
      <a href="#"> Início </a> 
      <a href="#"> Sobre </a> 
      <a href="#"> Contato </a> 

</header>

    <h2>Pare de adiar. Comece a aprender!<h2>
    <p>Nosso site contém assistente virtual educacional inspirada na Amazônia, criada para ajudar estudantes do ensino médio de forma leve e interativa.</p><br><br>

    <h2 class="titulo-centro">Língua Portuguesa</h2>

    <div class="cards">

    <div class="card">
        <h4>Simbolismo</h4>
        <div class="item">
            <input type="checkbox">
            <p>aulas 5</p>
        </div>
    </div>

    <div class="card">
        <h4>Parnasianismo</h4>
        <div class="item">
            <input type="checkbox">
            <p>aulas 4</p>
        </div>
    </div>

    <div class="card">
        <h4>Vanguardas</h4>
        <div class="item">
            <input type="checkbox">
            <p>aulas 3</p>
        </div>
    </div>

</div>
<br><br>
      
    <h2 class="titulo-centro"> Língua Inglesa </h2> 

<div class="cards">

    <div class="card">
        <h4>Verbo To Be</h4>
        <div class="item">
            <input type="checkbox">
            <p> aulas 7 </p>
        </div>
    
    </div>

    <div class="card">
        <h4>Simple Past</h4>
        <div class="item">
             <input type="checkbox">
             <p>aulas 4</p>
        </div>

    </div>

        <div class="card">
        <h4>Simple Present</h4>
        <div class="item">
             <input type="checkbox">
             <p>aulas 3</p>
        </div>

    </div>
</div>
<br><br>

<div class="cards">
    <div class="card">
        <h3>Exercícios</h3>
        <div class="item">
         <p>0/200</p>
        </div>
    </div>

    <div class="card">
    <h3>Simulados</h3>
    <div class="item">
        <p>0/13</p>
    </div>
    
</div>
    
<main>
    <section class="sobre-chatbot">
            <h1>Hello! Eu sou a Arar.IA
            <br>vamos aprender algo 
            <br>novo hoje?
            </h1>

            <h3>Domine inglês e português 
            <br>com nosso chatbot mascote
            </h3>
      
    <div class="chamada">
          <button> Comece a estudar </button> 
      <h3>É desafiador e <br>dinâmico </h3>
      </div>

            <div class="img-sobre">
                <img src="img/arara-do-convite.png" alt="Imagem sobre o chatbot">
            </div>    
      
    </section>

    <section class="parte2-sobre-chatbot">


                <img src="img/Arar.IA.png" alt="Imagem da Arar.Ia" class="imagem-ararIA">
        
            <div class="celular-chatbot">

            <h1>Curiosa e inteligente, a Arar.IA 
            <br>te guia como o vento na 
            <br>floresta.
            Confira, é <a href="#"> só clicar!</a>
            </h1>
      
          
         
            <img src="img/celular-chatbot.png" alt="imagem do chatbot celular">
            </div>

        </div>
    </section>
</main>

<footer>
    <h4>Sobre nós 
    <br> Somos uma plataforma de conteúdo focada em inglês e 
    <br> português, criada para facilitar o acesso a informações claras,
    <br> organizadas e úteis. Nosso objetivo é ajudar estudantes a 
    <br> entender melhor os temas, revisar conteúdos e aprender de 
    <br> forma simples e prática no dia a dia.</h4>

    <div class="btn-redes">
        <a href="#"><button><i class="bi bi-instagram"></i></button></a>
        <a href="#"><button><i class="bi bi-whatsapp"></i></button></a>
        <a href="#"><button><i class="bi bi-facebook"></i></button></a>
    </div>
</footer>
</body>
</html>





@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Open+Sans:wght@400;600&display=swap");

*,
*::before,
*::after {
 box-sizing: border-box;
 margin: 0;
 padding: 0;
}

:root {
 --azul-escuro: #1a3a6b;
 --azul-medio: #2563a8;
 --azul-claro: #3b82d4;
 --azul-hover: #1e50a0;
 --amarelo: #f5c518;
 --amarelo-claro: #fde68a;
 --branco: #ffffff;
 --cinza-claro: #f3f4f6;
 --cinza-borda: #d1d5db;
 --cinza-texto: #6b7280;
 --texto-escuro: #1f2937;
 --verde: #16a34a;
 --bege: #f5f0e8;
 --font-principal: "Poppins", sans-serif;
 --font-corpo: "Open Sans", sans-serif;
 --sombra-card: 0 2px 8px rgba(0, 0, 0, 0.1);
 --radius-card: 12px;
 --radius-btn: 8px;
}
body {
 font-family: var(--font-principal), var(--font-corpo);
 margin: 0;
 padding: 0;
}

header {
 background-color:#1a3a6b;
 color: white;
 padding: 20px 40px;
 display: flex;
 justify-content: space-between;
 align-items: center;
}

.navegacao {
display: flex;
}

.logo {
 display: flex;
 align-items: center;
 gap: 12px;
}

.logo h1 {
 font-size: 42px;
 font-weight: bold;
 margin: 0;
}

.logo img {
 width: 55px;
 height: auto;
}

nav a {
 margin: 10px;
 color: Black;
 text-decoration: none;
}

.home {
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 60px 80px;
}

.texto-home {
 max-width: 400px;
}

.texto-home h2 {
 font-size: 32px;
 color: #1a3a6b;
 margin-bottom: 20px;
}

.texto-home p {
 font-size: 18px;
 line-height: 1.6;
}

.img-home img {
 width: 350px;
}

section {
 padding: 20px;
}

.cards {
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
    justify-content: center;
    margin: 30px 0;
    align-items: flex-start;
}


.card {
    background-color: #2563a8;
    color: white;
    padding: 20px;
    border-radius: 10px;
    width: 180px;
}

.item {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 10px;
}

.titulo-centro {
text-align: center;
}

.chamada {
  display: flex;
  align-items: center;
  gap: 10px;
}

.chamada h3 {
margin: 0px;
}

.celular {
 display: flex;
 justify-content: space-around;
 align-items: center;
 padding: 60px;
 flex-wrap: wrap;
}

.celular-chatbot {
 width: 350px;
 display: flex;
}

footer {
 background: #f3efe5;
 padding: 30px;
 display: flex;
 justify-content: space-between;
 align-items: center;
}

.btn-redes {
 font-size: 24px;
 margin-left: 20px;
 cursor: pointer;
}

