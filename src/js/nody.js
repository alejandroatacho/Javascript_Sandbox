const fs = require('fs');
const { parseString } = require('xml2js');
const { JSDOM } = require('jsdom');

function getInput() {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    readline.question('Enter your name: ', name => {
      readline.question('Enter your age: ', age => {
        readline.question('Enter your marriage type: ', marriageType => {
          readline.close();
          resolve({name, age, marriageType});
        });
      });
    });
  });
}

function getXmlTemplate(data) {
  return `<person>
    <name>${data.name}</name>
    <age>${data.age}</age>
    <marriageType>${data.marriageType}</marriageType>
  </person>`;
}

function writeDataToXml() {
  const xmlData = fs.readFileSync('person.xml', 'utf-8');
  console.log(xmlData);

  const data = getInput();

  const xmlTemplate = getXmlTemplate(data);

  fs.writeFileSync('person.xml', xmlTemplate);

  parseString(xmlTemplate, function (err, result) {
    if (err) throw err;

    const html = `<table>
        <tr><td>Name:</td><td>${result.person.name[0]}</td></tr>
        <tr><td>Age:</td><td>${result.person.age[0]}</td></tr>
        <tr><td>Marriage Type:</td><td>${result.person.marriageType[0]}</td></tr>
      </table>`;

    const dom = new JSDOM(`<!DOCTYPE html><html><head></head><body></body></html>`);

    dom.window.document.body.innerHTML = html;

    const outputHtml = dom.window.document.documentElement.outerHTML;
    fs.writeFileSync('output.html', outputHtml);
  });

  const updatedXmlData = fs.readFileSync('person.xml', 'utf-8');
  console.log(updatedXmlData);
}

writeDataToXml();
