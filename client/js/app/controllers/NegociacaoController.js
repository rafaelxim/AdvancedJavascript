class NegociacaoController{

	constructor(){
			
		// aqui o bind serve pra que o querySelector mantenha a associação com o document
		let $ = document.querySelector.bind(document);

		this._inputData = $("#data");
		this._inputQuantidade = $("#quantidade");
		this._inputValor = $("#valor") ;
	}

	adiciona(event){		

		event.preventDefault();

		let data = new Date(this._inputData.value.split('-')) ;
		console.log(data) ;

		// negociacao = new Negociacao(
		// 	this._inputData.value,
		// 	this._inputQuantidade.value,
		// 	this._inputValor.value
		// ); 

	}
}