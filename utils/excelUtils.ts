

import xlsx from 'xlsx'
export class Excelutils {

// which excel file need to be picked -- filepath 
// which sheet from the excel is required -- sheetName 

static getExcelData(filepath:string , sheetname:string){
    try{
    // readfile method is present inside the excel library 
    // once it read the file ,it will return the value in workbook formet. 
    // workbook formet is nothing but excel formet(having data and sheetname)

    const wb = xlsx.readFile(filepath)
    const sheet= wb.Sheets[sheetname]
    const data = xlsx.utils.sheet_to_json(sheet)
    return data
}
catch(error){
    console.log(error)
}
}
}