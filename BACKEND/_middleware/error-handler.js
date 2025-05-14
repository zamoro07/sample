module.exports = function errorHandler(err, req, res, next) {
    console.error('Error handler called:', err);

    if (typeof err === 'string') {
        // Custom application error
        return res.status(400).json({ message: err });
    }

    if (err.name === 'UnauthorizedError') {
        // JWT authentication error
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Default to 500 server error
    const statusCode = err.status || 500; // Use the status code set in the error, or default to 500
    return res.status(statusCode).json({ message: err.message || 'Internal Server Error' });
};