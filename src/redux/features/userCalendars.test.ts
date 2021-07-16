import reducer, {
  selectUserCalendar,
  addEventAction,
  addStoryAction,
  removeEventAction,
  removeStoryAction,
  resetAction,
  updateEventAction,
  updateStoryAction,
  updateCalendarsAction,
  updateEventByIdAction,
  updateResourcesAction,
  updateStoryByIdAction,
  pushResourceAction,
  removeCalendarAction,
  removeResourceAction,
} from "./userCalendars";
import { RootState } from "../rootReducer";

const createRootState = (partialState: any) =>
  ({ features: { userCalendars: { calendars: partialState } } } as RootState);

type DummyCalendar = any;
const createDummyCalendar = ({ id }: { id: any }) => ({ id } as DummyCalendar);

const initialState = { calendars: [] };

describe(reducer.name, () => {
  it("can init.", () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  describe(addEventAction.name, () => {
    it.skip("can work.", () => {});
  });

  describe(addStoryAction.name, () => {
    it.skip("can work.", () => {});
  });

  describe(removeEventAction.name, () => {
    it.skip("can work.", () => {});
  });

  describe(removeStoryAction.name, () => {
    it.skip("can work.", () => {});
  });

  describe(resetAction.name, () => {
    it("can work.", () => {
      const befState = { calendars: ["dummy", "dummy"] as any[] };
      const aftState = initialState;
      expect(reducer(befState, resetAction())).toEqual(aftState);
    });
  });

  describe(updateEventAction.name, () => {
    it.skip("can work.", () => {});
  });

  describe(updateStoryAction.name, () => {
    it.skip("can work.", () => {});
  });

  describe(pushResourceAction.name, () => {
    it.skip("can work.", () => {});
  });

  describe(removeCalendarAction.name, () => {
    it("can work.", () => {
      const id1 = "this is dummy1";
      const id2 = "this is dummy2";
      const dummyCalendar1 = createDummyCalendar({ id: id1 });
      const dummyCalendar2 = createDummyCalendar({ id: id2 });
      const befState = { calendars: [dummyCalendar1, dummyCalendar2] };
      const aftState = { calendars: [dummyCalendar1] };
      expect(
        reducer(befState, removeCalendarAction({ calendarId: id2 }))
      ).toEqual(aftState);
    });
  });

  describe(removeResourceAction.name, () => {
    it.skip("can work.", () => {});
    it.skip("cannot work because not find calendar", () => {});
    it.skip("cannot work because not find story", () => {});
    it.skip("cannot work because not find resouce", () => {});
  });

  describe(updateCalendarsAction.name, () => {
    it.skip("can work.", () => {});
  });

  describe(updateEventByIdAction.name, () => {
    it.skip("can work.", () => {});
  });

  describe(updateResourcesAction.name, () => {
    it.skip("can work.", () => {});
  });

  describe(updateStoryByIdAction.name, () => {
    it.skip("can work.", () => {});
  });
});

describe(selectUserCalendar.name, () => {
  it("can select.", () => {
    const dummyCalendar = "dummy";
    const rootState = createRootState([dummyCalendar]);
    expect(selectUserCalendar(rootState)).toEqual(dummyCalendar);
  });
});
