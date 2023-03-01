const { Zen_Quote } = require('../models');
const { login } = require('./auth');



async function createZenQuote(req, res) {
  try {
		req.body.profileId = req.user.profile.id
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
      { where: { id: req.params.id } }
    )
    res.status(200).json(deleteQuote) // Expected: 1
  } catch (error) {
    res.status(500).json({ err: error })
  }
}


async function index(req, res) {
  try {
    const quotes = await Zen_Quote.findAll()
    res.json(quotes)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}


const update = async (req, res) => {
  try {
    const quote = await Zen_Quote.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
      ).populate('author')
    res.status(200).json(quote)
  } catch (error) {
    res.status(500).json(error)
  }
}



async function myQuotes(req, res) {
  try {
    const quotes = await Zen_Quote.findAll({ where: { profileId: req.user.profile.id } })
    console.log(quotes);
    res.json(quotes)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}











module.exports = {
  createZenQuote, deleteZenQuote, index, update, myQuotes
}