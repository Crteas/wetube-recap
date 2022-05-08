import mongoose from "mongoose";

//데이터의 틀!
const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxlength: 20 },
  description: { type: String, required: true, trim: true, maxlength: 300 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

//Mongoose Middleware
videoSchema.pre("save", async function () {
  this.hashtags = this.hashtags[0] // this는 만들어지는 document를 가리킴
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
  console.log(this);
});

// mongoose.model("모델이름",스키마(Schema))

const movieModel = mongoose.model("Video", videoSchema);

//그리고 꺼내기!
export default movieModel;
