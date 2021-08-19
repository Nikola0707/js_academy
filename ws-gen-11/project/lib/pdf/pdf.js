const PDFDocument = require('pdfkit');
const fs = require('fs');

// The Promise Way
module.exports = (blogPost) => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument();
      const writeStream = fs.createWriteStream(`pdfs/blogpost-${blogPost._id}.pdf`);

      doc.pipe(writeStream);
      doc
        .fontSize(25)
        .text(`Title: ${blogPost.title}, content: ${blogPost.content}`, 100, 100);

      doc.end();

      writeStream.on('finish', () => {
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}

// The Callback Way
// module.exports = (blogPost, cb) => {
//   const doc = new PDFDocument();
//   const writeStream = fs.createWriteStream(`pdfs/blogpost-${blogPost._id}.pdf`);

//   doc.pipe(writeStream);
//   doc
//     .fontSize(25)
//     .text(`Title: ${blogPost.title}, content: ${blogPost.content}`, 100, 100);

//   doc.end();

//   writeStream.on('finish', () => {
//     cb();
//   });
// }