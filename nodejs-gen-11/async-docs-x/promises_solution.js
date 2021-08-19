const doctors = [
  {
    name: 'Boban Sugareski'
  },
  {
    name: 'Kosta Petrov'
  }
];

const getDoctors = () => {
  console.log('===== getDoctors() function called =====');
  setTimeout(() => {
    doctors.forEach(doctor => {
      console.log(`Doctor: ${doctor.name}`);
    });
  }, 1000);
};

const createDoctor = doctor => {
  console.log('===== createDoctor() function called =====');
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        doctors.push(doctor);
        console.log(`Doctor created: ${doctor.name}`);
      } catch (err) {
        reject(err);
      }

      resolve(doctor);
    }, 2000);
  });
};

createDoctor({
  name: 'Milenko Nedelkovski'
}).then(doctor => {
  console.log('Promise-ot ni vrati pozitivna potvrda deka uspesno e zacuvan ', doctor);
  getDoctors();
}).catch(err => {
  console.log('Se sluci greska vo createDoctor(): ', err)
});

// varijanta 2
// createDoctor({
//   name: 'Milenko Nedelkovski'
// }).then(getDoctors);


// simulacija na funkcijata find() od mongoose

const find = () => {
  return new Promise((resolve, reject) => {
    try {
      // simulacija na direktna mongo komunikacija
      // db.users.find()
      // db.users.insert({ ... })
      resolve()
    } catch (err) {
      reject(err)
    }
  });
};

// Prv nacin za spravuvanje so promise: then catch sintaksa
// find().then().catch()

// Vtor nacin za spravuvanje so promise: async await sintaksa
const useFindMethod = async () => {
  try {
    await find()
  } catch (error) {
    //...
  }
}