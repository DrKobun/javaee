// confirmação de exclusão de um contato
// @param idcon
function confirmar(idcon)
{
	let resposta = confirm("confirma a exclusão deste contato?");
	
	if(resposta === true)
	{
		// teste de botão excluir
		// alert(idcon);
		window.location.href = "delete?idcon=" + idcon;
	}	
}



