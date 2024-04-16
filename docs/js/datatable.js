$(document).ready(function() {
    $('#dataTable').DataTable( {
        dom: '<"dt-top-container"<l><"dt-center-in-div"B><f>r>t<ip>',
  	buttons: [ 'copy', 'excel', 'pdf'
	],
     //"scrollCollapse": true,
       "paging": true,
    //"info": false,
    // "lengthMenu": [[5,10,50,100,-1], [5,10,50,100,"Todo"]],
	"pageLength": 15,
    "language": {
        "zeroRecords": "No se encontraron coincidencias.",
        "paginate": {
            "first": "Primera",
            "last": "Última ",
            "next": "  >>",
            "previous": "<<  "                   
        },
        "sLengthMenu": "Mostrar de a _MENU_ resultados",
        "emptyTable": "No hay datos disponibles en la tabla.",
        "search": "Buscar... ",
        "info": "Mostrando _START_ a _END_ (de _TOTAL_ resultados)",
	"infoEmpty": "Mostrando 0 de 0 resultados",
        "infoFiltered": "[filtrado de un total de _MAX_ resultados]"
    }
    } );
} );
