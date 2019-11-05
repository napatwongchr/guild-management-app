const vision = require('@google-cloud/vision')
const client = new vision.ImageAnnotatorClient()

const RAW_TEXT = '517-; vanligaste\n' +
"spacewalker (Vanguard's]\n" +
'Rune Knight Premium: 17 Day(s)\n' +
'Base: Lv120\n' +
'Job: Lv57/59\n' +
'Lv.120\n' +
'Hp\n' +
'Sp\n' +
'438076/438076\n' +
'1474/1569\n' +
'HP Discharge\n' +
'43705388\n' +
'Transforms Discharge to HP when below 30%\n' +
'SP Discharge\n' +
'366449\n' +
'Transforms Discharge to SP when below 30%\n' +
'Atk\n' +
'10051\n' +
'Def\n' +
'1198\n' +
'M.Atk\n' +
'2247\n' +
'spacewalker\n' +
"Vanguard's\n" +
'View Skills\n' +
'ID : 4295322149\n'

async function detectText() {
  let account = {
    id: RAW_TEXT.match(/id : (\d+)/i)[1],
    ign:RAW_TEXT.match(/(.+) \(/i)[1]
  }

  let stats = {
    job: RAW_TEXT.match(/(.+) Premium/i)[1],
    atk: RAW_TEXT.match(/atk\n(\d+)/i)[1],
    def: RAW_TEXT.match(/def\n(\d+)/i)[1],
    matk: RAW_TEXT.match(/m.atk\n(\d+)/i)[1],
    hp: RAW_TEXT.match(/hp\nsp\n\d+\/(\d+)/i)[1]
  }
  
  console.log(account)
  console.log(stats)
  // const fileName = './spacewalker_knight.png';
  // const [results] = await client.documentTextDetection(fileName)
  // const detections = results.textAnnotations
  
  // console.log('Text:');
  // console.log(detections[0].description);
  
}


detectText()
