const express = require('express');
const router = express.Router();
const stripe = require('stripe')('pk_test_51Mhe9RE3buS2eF5kcGHk0xjSxiIKh4V0BHcxFG8dlfunkOXqHZUhICZ1YrUPgYQnMApd8jI8n9eHRoH4hmCHm1i700Db9OW7SA');


router.post('/intents', async (req, res) => {
  try {

  } catch (error) {
    res.status(401).send({ status: "FAILED", error: error.message });
  }
})

module.exports = router;
