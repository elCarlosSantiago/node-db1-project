exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
}

//eslint-disable-next-line
exports.errorHandler = (err, req, res, next) => {
	res.status(err.status || 500).json({
		message: err.message,
		stack: err.stack,
	});
};
