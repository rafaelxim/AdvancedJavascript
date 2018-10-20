class ListaNegociacoes{

	constructor(){

		this._negociacoes = [] ;
	}

	adiciona(negociacao){

		this._negociacoes.push(negociacao);
	}

	get negociacoes(){

		// Aqui eu crio uma nova lista de negociações através do concat, para que quando alguém tente fazer o push de uma nova lista pelo negociacoes.push, não conseguir acessar o this._negociações, e sim uma cópia do mesmo.
		return [].concat(this._negociacoes) ;
	}

	esvazia(){
		this._negociacoes = []; 
	}
}