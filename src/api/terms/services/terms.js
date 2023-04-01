'use strict';

/**
 * terms service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::terms.terms');
