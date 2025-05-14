const Joi = require('joi');

function validateRequest(req, next, schema) {
    const options = {
        abortEarly: false, // Include all errors
        allowUnknown: true, // Ignore unknown properties
        stripUnknown: true // Remove unknown properties
    };

    const { error, value } = schema.validate(req.body, options);
    if (error) {
        // Pass an Error object to next()
        const validationError = new Error(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
        validationError.status = 400; // Set HTTP status code for validation errors
        return next(validationError);
    } else {
        req.body = value;
        next();
    }
}

module.exports = validateRequest;