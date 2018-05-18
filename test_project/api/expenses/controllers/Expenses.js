'use strict';

/**
 * Expenses.js controller
 *
 * @description: A set of functions called "actions" for managing `Expenses`.
 */

module.exports = {

  /**
   * Retrieve expenses records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.expenses.fetchAll(ctx.query);
  },

  /**
   * Retrieve a expenses record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.expenses.fetch(ctx.params);
  },

  /**
   * Create a/an expenses record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.expenses.add(ctx.request.body);
  },

  /**
   * Update a/an expenses record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.expenses.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an expenses record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.expenses.remove(ctx.params);
  }
};
