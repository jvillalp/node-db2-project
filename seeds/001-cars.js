exports.seed = async function(knex) {
  const testData = [
    { VIN: A454548HJN1, make: "Tesla", model: "X", mileage: 12000 },
    { VIN: B679HBF7543, make: "Jeep", model: "Renegade", mileage: 1 },
    { VIN: C6878HJ8678, make: "Audi", model: "Q3", mileage: 120 }
  ];
  await knex('cars').truncate();
  return knex("cars").insert(testData);
};
