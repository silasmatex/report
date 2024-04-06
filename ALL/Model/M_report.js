import mongoose from "mongoose";

const reportSchema = mongoose.Schema({
  title: String,
  submissionDate: String,
  Description: String,
  employeeId: String,
  managerId: String
}, {
  timestamps: true
})

const reportModel = mongoose.model('report', reportSchema)

export default reportModel