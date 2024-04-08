const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema(
	{
		senderId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		receiverId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		message: {
			type: String,
			required: true,
		},
		// createdAt, updatedAt
	},
	{ timestamps: true }   // when we create a message we will have created at and updated at field
    //message.createdAt etc
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;