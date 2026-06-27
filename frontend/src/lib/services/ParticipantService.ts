import { pb } from '$lib/pb';
import { Participant } from '$lib/models/Participant';

export class ParticipantService {
  async list(): Promise<Participant[]> {
    const records = await pb.collection('participants').getFullList({ sort: 'lastName' });

    return records.map(
      (record) =>
        new Participant(
          record.id,
          record.firstName,
          record.lastName,
          record.division,
          record.organization
        )
    );
  }

  async create(data: {
    firstName: string;
    lastName: string;
    division: 'fli_trap' | 'junior_stadium' | 'stadium';
    organization: string;
  }) {
    return await pb.collection('participants').create(data);
  }
}
