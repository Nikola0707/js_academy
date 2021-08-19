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

const createDoctor = (doctor, callback) => {
  console.log('===== createDoctor() function called =====');
  setTimeout(() => {
    doctors.push(doctor);
    console.log(`Doctor created: ${doctor.name}`);
    callback();
  }, 2000);
};

createDoctor({
  name: 'Milenko Nedelkovski'
}, getDoctors);
