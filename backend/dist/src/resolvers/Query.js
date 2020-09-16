"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _db = require("../db");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getInvoicesOfClient = function getInvoicesOfClient(db, client) {
    return db.filter(function (invoice) {
        return invoice.client == client;
    });
};
var getClients = function getClients(db) {
    return [].concat(_toConsumableArray(new Set(db.map(function (invoice) {
        return invoice.client;
    }))));
};
var calculateTotal = function calculateTotal(array) {
    return array.reduce(function (acc, curr) {
        return acc + parseFloat(curr.net);
    }, 0);
};

var Query = {
    invoices: function invoices() {
        return _db.invoices;
    },
    invoicesByClient: function invoicesByClient(parent, args, context, info) {
        return getInvoicesOfClient(_db.invoices, args.client);
    },
    clients: function clients() {
        return getClients(_db.invoices);
    },
    turnoverByClients: function turnoverByClients() {
        var clientsAndTurnovers = [];
        var clients = getClients(_db.invoices);
        clients.forEach(function (client) {
            var turnover = calculateTotal(getInvoicesOfClient(_db.invoices, client));
            clientsAndTurnovers.push({ client: client, sumOfInvoices: turnover });
        });
        return clientsAndTurnovers;
    },
    turnoverByClient: function turnoverByClient(parent, args, context, info) {
        return calculateTotal(getInvoicesOfClient(_db.invoices, args.client));
    },
    turnover: function turnover() {
        return calculateTotal(_db.invoices);
    }
};

exports.default = Query;