const {Router} = require('express');
const router = Router();

const { storeTask } = require('../controller/taskcontroller');

router.post('/store/task', storeTask);

module.exports = router;