module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: '*',
      methods: '*',
    }
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
