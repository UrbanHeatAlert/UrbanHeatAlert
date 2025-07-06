
//Iniciar Sesion
function login(event) {
  event.preventDefault();

  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const edad = document.getElementById('edad').value;
  
  const Uemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const Uphone = /^\d{9}$/;


  if (user && pass) {
    localStorage.setItem('username', user);
    localStorage.setItem('edad', edad);

    if (Uemail.test(user)) {
      localStorage.setItem('email', user);
      localStorage.setItem('telefono', 'no disponible');

    } else if (Uphone.test(user)) {
      localStorage.setItem('telefono', user);
      localStorage.setItem('email', 'no disponible');
    }else{
    alert('Por favor, completa todos los campos');
    return;
    }

    alert("Bienvenido");
    window.location.href = "menu.html";
  }else{
    alert('Por favor, completa todos los campos');
  }

  
}

//Registrar Usuario
function register() {
  const fullName = document.getElementById('full-name').value;
  const user = document.getElementById('register-username').value;
  const edad = document.getElementById('edad').value;
  const pass = document.getElementById('register-password').value;
  const confirmPass = document.getElementById('confirm-password').value;

   if (fullName && user && pass && confirmPass && edad) {
    if (pass === confirmPass) {
      localStorage.setItem('fullName', fullName);
      localStorage.setItem('username', user);
      localStorage.setItem('edad', edad);

      alert(`Registro exitoso para: ${fullName}`);
      showLogin();
    } else {
      alert('Las contraseñas no coinciden');
    }
  } else {
    alert('Por favor, completa todos los campos');
  }
}

//Enviar codigo
function sendCode(method) {
  const message = document.getElementById('message');
  if (method === 'sms') {
    message.innerText = 'Código enviado por SMS';
  } else {
    message.innerText = 'Código enviado por Email';
  }
}


function showForgotPassword() {
  document.getElementById('login-section').style.display = 'none';
  document.getElementById('forgot-password-section').style.display = 'block';
}

function showLogin() {
  document.getElementById('register-section').style.display = 'none';
  document.getElementById('forgot-password-section').style.display = 'none';
  document.getElementById('login-section').style.display = 'block';
}

function showRegister() {
  document.getElementById('login-section').style.display = 'none';
  document.getElementById('register-section').style.display = 'block';
}

//Iniciar Sesion con Redes
function socialLogin(platform) {
  alert(`Iniciando sesión con ${platform}`);
}