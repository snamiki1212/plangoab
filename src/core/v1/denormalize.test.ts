import { denormalizeCalendar } from "./denormalize";

describe(denormalizeCalendar.name, () => {
  it("can run.", () => {
    const received = (() => {
      const _event = {
        id: "id",
        title: "title",
        description: "description",
        startedAt: "1990-01-01",
        endedAt: "1990-01-01",
        backgroundColor: "red",
      };
      const resource = {
        id: "id",
        title: "title",
        order: 0,
        events: [_event, _event],
      };
      const story = {
        id: "id",
        title: "title",
        resources: [resource, resource],
      };
      const calendar = {
        id: "id",
        stories: [story, story],
      };
      return denormalizeCalendar(calendar);
    })();

    const expected = (() => {
      const _event = {
        id: "id",
        calendarId: "id",
        resourceId: "id",
        storyId: "id",
        title: "title",
        start: "1990-01-01",
        end: "1990-01-01",
        description: "description",
        extendedProps: {
          calendarId: "id",
          storyId: "id",
          resourceId: "id",
          description: "description",
        },
        backgroundColor: "red",
      };
      const resource = {
        id: "id",
        calendarId: "id",
        FIELD: "title",
        storyId: "id",
        order: 0,
        eventBorderColor: undefined,
      };
      const story = {
        id: "id",
        calendarId: "id",
        name: "title",
        resources: [resource, resource],
        events: [_event, _event, _event, _event],
      };
      const calendar = {
        id: "id",
        stories: [story, story],
      };
      return calendar;
    })();

    expect(received).toEqual(expected);
  });
});
