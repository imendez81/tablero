jQuery(document).ready(function(){

jQuery(".msg-basico").click(function() {
	swal("GASTON HERNAN MARQUEZ | H900200060-COORDINACIÓN LOGÍSTICA | Desde: 14/07/2022");
});

jQuery(".msg-basico-txt").click(function() {
	swal("Texto del tÃ­tulo", "Texto del mensaje inferior");
});

jQuery(".msg-exito").click(function() {
	swal("Â¡Bien!", "Has hecho clic en el botÃ³n :)", "success");
});

jQuery(".msg-warning").click(function() {
	swal({   
		title: "Â¿Seguro que deseas continuar?",   
		text: "No podrÃ¡s deshacer este paso...",   
		type: "warning",   
		showCancelButton: true,
		cancelButtonText: "Mmm... mejor no",   
		confirmButtonColor: "#DD6B55",   
		confirmButtonText: "Â¡Adelante!",   
		closeOnConfirm: false }, 

		function(){   
			swal("Â¡Hecho!", 
				"Acabas de vender tu alma al diablo.", 
				"success"); 
	});

});

jQuery(".msg-cond").click(function() {
	swal({   
		title: "Â¿Deseas unirte al lado oscuro?",   
		text: "Este paso marcarÃ¡ el resto de tu vida...",   
		type: "warning",   
		showCancelButton: true,   
		confirmButtonColor: "#DD6B55",   
		confirmButtonText: "Â¡Claro!",   
		cancelButtonText: "No, jamÃ¡s",   
		closeOnConfirm: false,   
		closeOnCancel: false }, 

		function(isConfirm){   
			if (isConfirm) {     
				swal("Â¡Hecho!", 
					"Ahora eres uno de los nuestros", 
					"success");   
			} else {     
				swal("Â¡Gallina!", 
					"Tu te lo pierdes...", 
				"error");   
			} 
		});
});

jQuery(".msg-autoclose").click(function() {
	swal({   
		title: "Mensaje con cierre automÃ¡tico",   
		text: "Se cerrarÃ¡ en 3 segundos.",   
		timer: 3000,   
		showConfirmButton: false 
	});

});


});