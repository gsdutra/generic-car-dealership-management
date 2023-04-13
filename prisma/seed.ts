import prisma from "../src/config/database.js"

async function main() {
	await prisma.cars.createMany({
		data: [
			{
				model: "Gol",
				licensePlate: "ABC-1234",
				year: 2010,
				color: "Preto"
			},
			{
				model: "Palio",
				licensePlate: "DEF-5678",
				year: 2015,
				color: "Prata"
			},
			{
				model: "Uno",
				licensePlate: "GHI-9012",
				year: 2018,
				color: "Vermelho"
			},
			{
				model: "Celta",
				licensePlate: "JKL-3456",
				year: 2012,
				color: "Branco"
			},
			{
				model: "Fiesta",
				licensePlate: "MNO-7890",
				year: 2017,
				color: "Azul"
			},
			{
				model: "Civic",
				licensePlate: "PQR-1234",
				year: 2019,
				color: "Preto"
			},
			{
				model: "Corolla",
				licensePlate: "STU-5678",
				year: 2016,
				color: "Prata"
			},
			{
				model: "Fusion",
				licensePlate: "VWX-9012",
				year: 2014,
				color: "Vermelho"
			},
			{
				model: "Focus",
				licensePlate: "YZA-3456",
				year: 2013,
				color: "Branco"
			},
			{
				model: "Argo",
				licensePlate: "BCD-7890",
				year: 2018,
				color: "Azul"
			}
			
		]
	})
}

main()
	.then(()=>console.log("Registro feito com sucesso"))
	.catch(e => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	})