const router = require('express').Router()
const quotesCtrl = require('../controllers/quotes.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/



// ========= Protected Routes ========= 
router.use(decodeUserFromToken)

router.get('/', checkAuth, quotesCtrl.myQuotes)

router.delete('/:id', checkAuth, quotesCtrl.deleteZenQuote)

router.put('/:id', checkAuth, quotesCtrl.update)



module.exports = router