const { Zen_Quote } = require('../models')



async function createZenQuote(req, res) {
  try {
		req.body.userId = req.user.profile.id
    const quote = await Zen_Quote.create(req.body)
    res.status(200).json(quote)
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: error })
  }
}

module.exports = {
  createZenQuote
}