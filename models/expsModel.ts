import BaseModel from "./class/model";

export class ExpsModel extends BaseModel {
  getWorkLog = async (params: string) => {
    const response = await this.GET("api/workLog/" + params);

    return response;
  };
}

export default ExpsModel;
