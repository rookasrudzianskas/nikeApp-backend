const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51Mhe9RE3buS2eF5kX8XfyLymvNvo8wRQZLFbyrdRHV8jqDo1B8U7lLgFLyBl2Cu0eVbFENshCwWkzW8tzmO4Ss1l00eYq5aP2T');


router.post('/intents', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.json({ paymentIntent: paymentIntent.client_secret });
  } catch (error) {
    res.status(401).send({ status: "FAILED", error: error.message });
  }
})

module.exports = router;
