import { makeFactories } from '../factories';
import { TimestampStub } from '../utils/TimestampStub';
import { seedMailTemplates } from './mailTemplates';

// Seed the minimum required data to run e2e tests
export function seedForTests(firestore: any) {
  return Promise.all([seedMailTemplates(firestore)]);
}

// Seed additional data to run through example cases - an example community, responses, etc
export async function seedE2EExampleData(
  firestore: any,
  TimestampKlass: typeof TimestampStub
) {
  const email = 'test@intronet.ai';
  const { communityFactory, responseFactory, assessmentFactory } =
    makeFactories(TimestampKlass);
  const community = await firestore
    .collection('communities')
    .add(communityFactory.build({ name: 'Example Community' }));
  const responses = await Promise.all([
    firestore
      .collection('responses')
      .add(responseFactory.build({ email, communityId: community.id })),
    firestore
      .collection('responses')
      .add(responseFactory.build({ communityId: community.id })),
  ]);
  await firestore.collection('assessments').add(
    assessmentFactory.build({
      seekerResponseId: responses[0].id,
      providerResponseId: responses[1].id,
      isSelected: true,
    })
  );
}
