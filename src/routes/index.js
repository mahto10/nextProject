const { Router } = require('express');
const { StudentRouter } = require('./student.routes');

const router = Router();

const V1_PREFIX = '/api/v1';

router.use(`${V1_PREFIX}/student`, StudentRouter(router));

module.exports = { V1Router: router };
