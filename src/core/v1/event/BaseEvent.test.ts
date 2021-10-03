import { initEvent } from "./BaseEvent";

const _dateWithTime = new Date("2020-06-01 12:23:34 GMT");
const _dateWithoutTime = new Date("2020-06-01 00:00:00 GMT");

describe(initEvent.name, () => {
  it("can run.", () => {
    const id = "id";
    const calendarId = "calendarId";
    const resourceId = "resourceId";
    const storyId = "storyId";
    const title = "title";
    const description = "description";
    const start = _dateWithTime.toISOString();
    const end = _dateWithTime.toISOString();
    expect(
      initEvent({
        id,
        calendarId,
        resourceId,
        storyId,
        title,
        description,
        start,
        end,
      })
    ).toEqual({
      id,
      calendarId,
      resourceId,
      storyId,
      title,
      start: _dateWithoutTime.toISOString(),
      end: _dateWithoutTime.toISOString(),
      description,
      extendedProps: {
        calendarId,
        storyId,
        resourceId,
        description,
      },
    });
  });
});
