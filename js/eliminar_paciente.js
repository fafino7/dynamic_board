
var tabla = document.querySelector('#tabla-pacientes');

tabla.addEventListener('dblclick',function(event){
	event.target.parentNode.classList.add('fadeOut');
	setTimeout(function(){
		event.target.parentNode.remove();
	},500);
});


/*
pacientes.forEach(function(paciente){

	paciente.addEventListener('dblclick',function(){
		this.remove(); //elimina al paciente en donde fue capturado el doble clic
	});
}); //por cada ciclo voy a iterar a cada paciente de mi tabla
*/