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


async function deleteZenQuote(req, res) {
  try {
    console.log("TEST", req);
    const deleteQuote = await Zen_Quote.destroy(
      { where: { id: req.quote.id } }
    )
    res.status(200).json(deleteQuote) // Expected: 1
  } catch (error) {
    res.status(500).json({ err: error })
  }
}







module.exports = {
  createZenQuote, deleteZenQuote
}