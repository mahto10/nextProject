const { Educator } = require("../models/educator.model");
const { EducatorStream } = require("../models/educatorStream.model");
const { EducatorDegree } = require("../models/educatorDegree.model");
const { EducatorCourse } = require("../models/educatorCourse.model");
const {
  EducatorSpecialization,
} = require("../models/educatorSpecialization.model");
const { BaseService } = require("./base.service");

class EducatorService extends BaseService {
  constructor(model) {
    super(model);
    this.models = {
      Educator,
      EducatorStream,
      EducatorDegree,
      EducatorCourse,
      EducatorSpecialization,
    };
  }

  async createEducatorWithRelatedModels(educatorData) {
    const [educator] = await Educator.create([{ ...educatorData.educator }]);

    const streams = await EducatorStream.insertMany(
      educatorData.streams.map((stream) => ({
        ...stream,
        educator: educator._id,
      }))
    );

    const degrees = await EducatorDegree.insertMany(
      educatorData.degrees.map((degree) => ({
        ...degree,
        educator: educator._id,
      }))
    );

    const courses = await EducatorCourse.insertMany(
      educatorData.courses.map((course) => ({
        ...course,
        educator: educator._id,
      }))
    );

    const specializations = await EducatorSpecialization.insertMany(
      educatorData.specializations.map((spec) => ({
        ...spec,
        educator: educator._id,
      }))
    );

    return { educator, streams, degrees, courses, specializations };
  }
}

module.exports = {
  EducatorService: new EducatorService(Educator),
};
