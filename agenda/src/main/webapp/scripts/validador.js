function validar()
{
	
	
	let nome = frmContato.nome.value
	let fone = frmContato.fone.value
	
	
	if(nome == "" || nome === "" || nome == null)
	{
		alert('Preencha o campo nome')
		frmContato.nome.focus()
		return false
	} else if(fone == "" || fone === "" || fone == null)
	{
		alert('Preencha o campo Fone')
		frmContato.fone.focus()
		return false
	} else
	{
		document.forms["frmContato"].submit()
	}
}