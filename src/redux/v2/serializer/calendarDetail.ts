import { Deserializer } from "jsonapi-serializer";

// export const serializer = new Serializer("calendars", {
//   attributes: ["name", "stories"],
//   stories: {
//     ref: (_parent, story) => story.id,
//     attributes: ["name", "resources"],
//     resources: {
//       ref: (_parent, story) => story.id,
//       attributes: ["title", "order", "events"],
//       events: {
//         ref: (_parent, event) => event.id,
//         attributes: ["title", "description", "start", "end", "backgroundColor"],
//       },
//     },
//   },
// });
export const deserializer = new Deserializer({ keyForAttribute: "camelCase" });
