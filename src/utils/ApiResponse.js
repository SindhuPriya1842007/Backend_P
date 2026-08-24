class Apiresponse {
    constructor(statusCode, data = null, message = "Success", success = true, errors = []) {
        this.statusCode = statusCode < 400 ? statusCode : 500; // Ensure statusCode is less than 400, otherwise default to 500
        this.data = data;
        this.message = message;
        this.success = success;
        this.errors = errors;
    }
}