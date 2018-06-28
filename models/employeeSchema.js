const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employee_id: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    dept: {
        type: String,
        required: true,
        trim: true,
    },
    position: {
        type: String,
        required: true,
        trim: true,
    },
});

employeeSchema.statics.addEmployee = function(employee) {
    return this.create(employee);
}

employeeSchema.statics.getEmployees = function() {
    return this.find({}).exec();
}

employeeSchema.statics.deleteEmployee = function(id) {
    return this.findByIdAndDelete(id).exec();
}

module.exports = mongoose.model('Employee', employeeSchema);