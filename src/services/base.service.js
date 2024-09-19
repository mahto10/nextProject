class BaseService {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const result = await this.model.create(data);

    return result;
  }

  async update(id, data) {
    const result = await this.model.findByIdAndUpdate(id, data);

    return result;
  }

  async find(id) {
    return await this.model.findById(id);
  }

  async findAll() {
    return await this.model.find();
  }

  async delete(id) {
    return await this.model.findByIdAndDelete(id);
  }
}

module.exports = { BaseService };
