const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
                type: String,
                unique: true,
                required: true,
                trim: true
            },
      password: {
                type: String,
                required: true,
                },
    createdOn: { type: Date, default: Date.now}
});

module.exports = mongoose.model('User', userSchema);