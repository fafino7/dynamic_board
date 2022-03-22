var campoFiltro = document.querySelector('#filtrar-tabla');

campoFiltro.addEventListener('input',function(){
	console.log(this.value);

	var pacientes = document.querySelectorAll('.paciente');

	
	if (this.value.length > 0){
		for (var i = 0; i < pacientes.length; i++){
			var paciente = pacientes[i];
			var tdNombre = paciente.querySelector('.info-nombre');
			nombre = tdNombre.textContent;
			var expresion = new RegExp(this.value,'i');

			if (!expresion.test(nombre)){
				paciente.classList.add('invisible');
			} else{
				paciente.classList.remove('invisible');
			}

		}

	} else {
		for (var i = 0; i < pacientes.length; i++){
			var paciente = pacientes[i];
			paciente.classList.remove('invisible');
		}
	}
});



















//Caso caracteres en Twitter
/*
<body>
    <textarea id="cuerpo-mensaje" cols="40" rows="5"></textarea>
    <p>Caracteres: <span id="numero-caracteres">0</span> caracteres.</p>
    <script src="contador.js"></script>
</body>

//función contador.js

function actualizarCaracteres() {
    var mensaje = document.querySelector("#cuerpo-mensaje").value;
    var caracteres = mensaje.length;

    var contador = document.querySelector("#numero-caracteres");
    contador.innerHTML = caracteres;
}

var actualizarCaracteres = document.querySelector('#cuerpo-mensaje');
campoMensaje.addEventlistener('input','actualizarCaracteres');
*/
