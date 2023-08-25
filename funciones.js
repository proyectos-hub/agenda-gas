function doGet(){
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script')
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos()
{
    let hoja = SpreadsheetApp.openById('1WRj6kxlzivYMbkN19ofKyLNxVYRrSM2PPWYluOVeGTA').getActiveSheet();
    let datos = hoja.getDataRange().getValues();

    return datos;
}