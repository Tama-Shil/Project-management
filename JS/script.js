"use strict";

const idlist = [];

function checkid(num) {
    return idlist.includes(num);
}

function valid() {

    var idno = document.getElementById("input__ID").value;
    var product_name = document.getElementById("input__name").value;
    var price = document.getElementById("input__price").value;

    product_name = product_name.trim();

    if (idno === '' || product_name === "" || price === "") {
        alert("Each field must be filled!!!");
        return;
    }

    if (checkid(idno)) {
        alert("Duplicate id!!!");
        return;
    }

    if (idno < 0) {
        alert("Do not insert negative id!!!");
        return;
    }
    const l = product_name.length;

    if (l > 60) {
        alert("The Product name should not exceed 60 words");
        return;
    }
    if (price >= 100000) {
        alert("Insert values less than 100000");
        return;
    }

    return true;
}

function addRow() {

    var idno = document.getElementById("input__ID").value;
    var product_name = document.getElementById("input__name").value;
    var price = document.getElementById("input__price").value;
    var table = document.getElementById("tablename");

    if (valid()) {

        var len = table.rows.length;
        var tableRow = table.insertRow(len);
        tableRow.insertCell(0).innerHTML = idno;
        tableRow.insertCell(1).innerHTML = product_name;
        tableRow.insertCell(2).innerHTML = price;

        idlist.push(idno);
    }
    else {
        return;
    }


}

