const HOJA = SpreadsheetApp.openById('1WRj6kxlzivYMbkN19ofKyLNxVYRrSM2PPWYluOVeGTA').getActiveSheet();

function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

//Funcion para recibir los datos del formulario
function doPost(datos)
{
    insertarContacto(datos.parameter.nombre, datos.parameter.correo);
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos()
{
    return HOJA.getDataRange().getValues();

}

function insertarContacto(nombre, correo)
{
    HOJA.appendRow([nombre,correo]);
}