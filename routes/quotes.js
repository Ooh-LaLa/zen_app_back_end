const router = require('express').Router()
const quotesCtrl = require('../controllers/quotes.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/



// ========= Protected Routes ========= 
router.use(decodeUserFromToken)

router.post('/', checkAuth, quotesCtrl.createZenQuote)

router.get('/', quotesCtrl.index)

router.delete('/', checkAuth, quotesCtrl.deleteZenQuote)

router.put('/:id', checkAuth, quotesCtrl.update)






module.exports = router