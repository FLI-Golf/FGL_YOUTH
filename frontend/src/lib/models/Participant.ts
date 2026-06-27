export class Participant {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public division: 'fli_trap' | 'junior_stadium' | 'stadium',
    public organizationId: string
  ) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`.trim();
  }
}
