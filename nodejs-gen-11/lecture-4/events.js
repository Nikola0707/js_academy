const events = require('events');
const emitter = new events.EventEmitter();

// Publish/Subscribe

const reports = [
  {
    year: 2021,
    approved: false
  },
  {
    year: 2022,
    approved: false
  },
  {
    year: 2023,
    approved: false
  },
  {
    year: 2024,
    approved: false
  },
  {
    year: 2027,
    approved: false
  }
];

emitter
      .on('mkd_in_eu', data => {
        console.log(`Site pakuvajte kuferite i si odime vo ${data.year}`);
        // ...
        // ...
      })
      .on('book_dispatched', data => {
        console.log(`Kupena kniga so naslov "${data.bookName}" od ${data.user}`)
      });

reports.forEach(report => {
  if (report.approved == true) {
    emitter.emit('mkd_in_eu', {
      year: report.year
    });
  }
});

// logika za kupuvanje kniga
emitter.emit('book_dispatched', {
  user: 'Boban Sugareski',
  bookName: 'Solzite na mojata kjerka',
  price: 10
})



