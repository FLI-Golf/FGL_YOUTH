import { pb } from '$lib/pb';

export type RegistrationRole = 'player' | 'program_director' | 'coach';

export type RegistrationPayload = {
  role: RegistrationRole;
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  registrationData: Record<string, unknown>;
};

export async function registerUser(payload: RegistrationPayload) {
  return await pb.collection('users').create({
    name: payload.name,
    email: payload.email,
    password: payload.password,
    passwordConfirm: payload.passwordConfirm,
    role: payload.role,
    registrationData: JSON.stringify(payload.registrationData)
  });
}
