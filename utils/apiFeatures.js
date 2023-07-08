class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);

    //  Advanced Filtering
    // { difficulty: 'easy, duration: { $gte: 5 }} --> Obj we pass in query filter
    // { difficulty: 'easy, duration: { gte: 5 }} --> Obj we get from req.query
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `${match}`);
    console.log(JSON.parse(queryStr));

    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      // console.log(sortBy);
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }
    return this;
  }

  limitFields() {
    // 3) Field Limiting  --> Selecting only certain field names --> Projecting
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select("-__v");
    }
    return this;
  }

  paginate() {
    //  page=2&limit=10, 1-10 => page1, 11-20 => page2, ....
    //  query = query.skip(10).limit(10) => for Page2
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 10;
    const skipBy = (page - 1) * limit;

    this.query = this.query.skip(skipBy).limit(limit);

    return this;
  }
}

module.exports = APIFeatures;
