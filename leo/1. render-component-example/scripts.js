// Lanza petición para la información del usuario
const getUserData = async () => {

	let dataQuery = await fetch('data.json');
	let request = await dataQuery.json();

	return await request;
};

// Renderiza el contenido de las cuentas
const renderAccountsData = data => {

	const container = document.querySelector('.userAccounts');


	for (var i = 0; i < Object.keys(data.accounts).length; i++) {

		console.log(i);
		console.log(data.accounts);

		let accountComponent = `<p class="accountComponent"> ${data.accounts[i].accNumber} <span class="state"> ${data.accounts[i].accState} </span></p>`;

		container.insertAdjacentHTML('beforeend', accountComponent);
	}
};

// Escucha un click sobre el botón
document.querySelector('.dataLoadButton').addEventListener('click', async e => {

	renderAccountsData( await getUserData());
});
