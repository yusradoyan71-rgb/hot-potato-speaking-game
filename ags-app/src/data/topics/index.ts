import type { Topic, TopicContent } from '../../types/database';
import { getTarihSpecificContent } from './tarihTopics';
import { getCografyaSpecificContent } from './cografyaTopics';
import { getEgitimBilimleriSpecificContent } from './egitimBilimleriTopics';
import { getTmesSpecificContent } from './tmesTopics';
import { getMevzuatSpecificContent } from './mevzuatTopics';
import { getSayisalSpecificContent } from './sayisalTopics';
import { getSozelSpecificContent } from './sozelTopics';

export const resolveAuthenticTopicContent = (topic: Topic): TopicContent => {
  const uid = topic.unit_id;

  if (uid.startsWith('unit-sozel')) {
    return getSozelSpecificContent(topic);
  }
  if (uid.startsWith('unit-sayisal')) {
    return getSayisalSpecificContent(topic);
  }
  if (uid.startsWith('unit-tarih')) {
    return getTarihSpecificContent(topic);
  }
  if (uid.startsWith('unit-cografya')) {
    return getCografyaSpecificContent(topic);
  }
  if (uid.startsWith('unit-eb')) {
    return getEgitimBilimleriSpecificContent(topic);
  }
  if (uid.startsWith('unit-tmes')) {
    return getTmesSpecificContent(topic);
  }
  if (uid.startsWith('unit-mevzuat')) {
    return getMevzuatSpecificContent(topic);
  }

  // Fallback if needed
  return getTarihSpecificContent(topic);
};
