import prisma from "../config/database.js";

async function getCars() {
  // const data = await db.query(`SELECT * FROM cars`);
  return prisma.cars.findMany();
}

async function getCar(id: number) {
  // const data = await db.query(`SELECT * FROM cars WHERE id = $1`, [id]);
  return prisma.cars.findFirst({
    where:{
      id,
    }
  });
    
}

async function getCarWithLicensePlate(licensePlate: string) {
  // const data = await db.query(`SELECT * FROM cars WHERE "licensePlate" = $1`, [licensePlate]);
  // return data.rows[0];
  return prisma.cars.findMany({
    where:{
      licensePlate: licensePlate
    }
  });
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  // await db.query(
  //   `INSERT INTO cars (model, "licensePlate", year, color)
  //    VALUES ($1, $2, $3, $4)`,
  //   [model, licensePlate, year, color]
  // );
  return prisma.cars.create({
    data:{
      model:model,
      licensePlate:licensePlate,
      year:year,
      color:color
    }
  })
  
}

async function deleteCar(id: number) {
  // await db.query(`DELETE FROM cars WHERE id = $1`, [id]);
  return prisma.cars.delete({
    where:{
      id:id
    }
  })
}

async function carUpdate(model: string, licensePlate: string, year: number, color: string) {
  return prisma.cars.upsert({
    where:{
      licensePlate:licensePlate
    },
    create:{
      model: model,
      licensePlate: licensePlate,
      year: year,
      color: color
    },
    update:{
      model: model,
      licensePlate: licensePlate,
      year: year,
      color: color
    }
  })
  
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar,
  carUpdate
}

export default carRepository;