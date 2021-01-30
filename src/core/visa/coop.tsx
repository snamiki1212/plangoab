import { uuid } from "../../lib/uuid";

const start = '2021-01-01';
const end = '2022-01-01';
export const createEvent = () => {
  const eventId = uuid();
  const event = {
    id: eventId,
    start,
    end,
  };
  return event
}