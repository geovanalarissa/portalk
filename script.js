document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const header = document.querySelector('header');
 
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.15)';
  } else {
    header.style.boxShadow = 'none';
  }
});

document.querySelectorAll('.card').forEach(card => {
  card.style.transition = 'transform 0.2s, box-shadow 0.2s';
  card.style.cursor = 'pointer';
 
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-4px)';
    card.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
  });
 
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = 'none';
  });
});
 
document.querySelectorAll('.btn-redes a').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    btn.style.transform = 'scale(0.9)';
    setTimeout(() => btn.style.transform = 'scale(1)', 150);
  });
});
 
const btnChatbot = document.querySelector('.sobre-chatbot a');
if (btnChatbot) {
  btnChatbot.style.display = 'inline-block';
 
  const style = document.createElement('style');
  style.textContent = `
    @keyframes pulso {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.04); }
    }
  `;
  document.head.appendChild(style);
}

const loginCadastro = document.getElementById('login/cadastro');
const modalLogin = document.getElementById('modal-login');
const fecharModal = document.getElementById('fechar-modal');

loginCadastro.addEventListener('click', e => {
    e.preventDefault();
    modalLogin.classList.add('ativo');
});

fecharModal.addEventListener('click', () => {
    modalLogin.classList.remove('ativo');
});

modalLogin.addEventListener('click', e => {
    if (e.target === modalLogin) {
        modalLogin.classList.remove('ativo');
    }
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') modalLogin.classList.remove('ativo');
});

const abaLogin = document.getElementById('aba-login');
const abaCadastro = document.getElementById('aba-cadastro');
const formLogin = document.querySelector('.form-login');
const formCadastro = document.querySelector('.form-cadastro');

abaLogin.addEventListener('click', () => {
    abaLogin.classList.add('ativa');
    abaCadastro.classList.remove('ativa');
    formLogin.style.display = 'flex';
    formCadastro.style.display = 'none';
});

abaCadastro.addEventListener('click', () => {
    abaCadastro.classList.add('ativa');
    abaLogin.classList.remove('ativa');
    formCadastro.style.display = 'flex';
    formLogin.style.display = 'none';
});

document.getElementById('btn-cadastrar').addEventListener('click', () => {
    const nome = document.querySelector('.form-cadastro input[placeholder="Nome completo"]').value;
    const email = document.querySelector('.form-cadastro input[placeholder="E-mail"]').value;
    const senha = document.querySelector('.form-cadastro input[placeholder="Senha"]').value;
    const confirmar = document.querySelector('.form-cadastro input[placeholder="Confirmar senha"]').value;

    if (!nome || !email || !senha || !confirmar) {
        alert('Preencha todos os campos!');
        return;
    }

    if (senha !== confirmar) {
        alert('As senhas não coincidem!');
        return;
    }
});
