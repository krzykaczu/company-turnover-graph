"use strict";

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

const axios = require("axios");

const one_by_one = (arr, syncFn) =>
  arr.reduce(
    (prom, arrItem) => prom.then(() => syncFn(arrItem)),
    Promise.resolve()
  );

module.exports = async () => {
  //delete all saved invoices
  const invoices = await strapi.query("invoice").find();
  if (invoices && Array.isArray(invoices)) {
    one_by_one(invoices, ({ _id }) => {
      strapi.query("invoice").delete({ _id });
    });
  }

  // populate db with data from csv-parser service
  const { data } = await axios.get("http://0.0.0.0:5000");
  if (data && Array.isArray(data)) {
    one_by_one(
      data,
      ({
        id: invoiceId,
        status,
        issueDate,
        warehouse,
        client,
        city,
        net,
        gross,
      }) => {
        strapi.query("invoice").create({
          invoiceId,
          status,
          issueDate,
          warehouse,
          client,
          city,
          net,
          gross,
        });
      }
    );
  }
};
