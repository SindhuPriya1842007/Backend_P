class Apiresponse {
    constructor(statusCode, data = null, message = "Success", success = true, errors = []) {
        this.statusCode = statusCode < 400 ;
        this.data = data;
        this.message = message;
        this.success = success;
        this.errors = errors;
    }
}