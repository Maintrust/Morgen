'use strict';

/**
 * chip service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chip.chip');
