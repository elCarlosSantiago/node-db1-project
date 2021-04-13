const Accounts = require('./accounts-model');

exports.checkAccountPayload = (req, res, next) => {
	const { name, budget } = req.body;
	try {
		if (name === undefined || budget === undefined) {
			next({ message: 'name and budget are required', status: 400 });
		} else if (typeof name !== 'string') {
			next({ message: 'name of account must be a string', status: 400 });
		} else if (name.trim().length < 3 || name.trim().length > 100) {
			next({ message: 'name of account must be between 3 and 100', status: 400 });
		} else if (typeof budget !== 'number') {
			next({ message: 'must be a number', status: 400 });
		} else if (budget < 0 || budget > 1000000) {
			next({ message: 'budget of account is too large or too small', status: 400 });
		} else {
			next();
		}
	} catch (err) {
		next(err);
	}
};

exports.checkAccountNameUnique = async (req, res, next) => {
	try {
		const account = await Accounts.getByName(req.body.name);
		if (!account) {
			next();
		} else {
			next({ message: 'that name is taken', status: 400 });
		}
	} catch (err) {
		next(err);
	}
};

exports.checkAccountId = async (req, res, next) => {
	try {
		const account = await Accounts.getById(req.params.id);
		if (account) {
			next();
		} else {
			next({ message: 'account not found', status: 404 });
		}
	} catch (err) {
		next(err);
	}
};

//eslint-disable-next-line
exports.errorHandler = (err, req, res, next) => {
	res.status(err.status || 500).json({
		message: err.message,
		stack: err.stack,
	});
};
