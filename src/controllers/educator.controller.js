const { EducatorService } = require("../services/educator.service");
const BaseController = require("./base.controller");

class EducatorController extends BaseController {
  constructor(service) {
    super(service);
  }

  //   create() {
  //     return this.asyncWrapper(async (req, res) => {
  //       const adminId = req.admin;

  //       const educatorData = {
  //         ...req.body,
  //         admin: adminId,
  //       };

  //       const result = await this.service.create(educatorData);

  //       this.send(res, result, 201);
  //     });
  //   }

  // }

  create() {
    return this.asyncWrapper(async (req, res) => {
      const adminId = req.admin;
      
      const educatorData = {
        educator: {
          ...req.body,
          admin: adminId,
        },
        streams: req.body.streams || [],
        degrees: req.body.degrees || [],
        courses: req.body.courses || [],
        specializations: req.body.specializations || [],
      };
      

      

      const result = await this.service.createEducatorWithRelatedModels(
        educatorData
      );

      this.send(res, result, 201);
    });
  }
}

module.exports = {
  EducatorController: new EducatorController(EducatorService),
};
