export default class Jobs {
  constructor(companyName, position, details, approved) {
    this.id = new Date().getTime();
    this.companyName = companyName;
    this.position = position;
    this.details = details;
    this.approved = approved;
  }
}
