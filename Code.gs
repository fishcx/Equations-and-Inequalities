function doGet(e) {
   
  var output= HtmlService
      .createTemplateFromFile('main.html')
      
      .evaluate()
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  
  output.setTitle('Equations & Inequalities');
  output.addMetaTag('viewport', 'width=device-width, initial-scale=1');
  return output;
 
}
// Accesses the code from your library and brings it to the main project
function includeLibrary(filename) {
  return Sourcelibrary.getCode(filename); 
}
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}