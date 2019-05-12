const router = require('express').Router();
const { performance } = require('perf_hooks');
const util = require('util');
const debug = util.debuglog('performance');
const EloRating = require('elo-rating');

router.get('/', (req, res) => res.send({ serverLive: true }));

router.post('/calculateScore', function(req, res) {
  const { playerRating, opponentRating, playerWin } = req.body;
  performance.mark('Beginning sanity check');

  const result = EloRating.calculate(playerRating, opponentRating, playerWin);

  performance.mark('Ending sanity check');

  performance.measure('Inputs validation', 'Beginning sanity check', 'Ending sanity check');

  const measurements = performance.getEntriesByType('measure');
  measurements.forEach(measurement => {
    console.log(measurement.name + ' ' + measurement.duration);
    debug('\x1b[32m%s\x1b[0m', measurement.name + ' ' + measurement.duration);
  });

  res.json({
    player: result.playerRating,
    opponent: result.opponentRating
  });
});

module.exports = router;