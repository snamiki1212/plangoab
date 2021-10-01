import { BaseStory } from "~/src/core/v1/story/BaseStory";

export type BaseCalendar = {
  id: string;
  stories: BaseStory[];
};

export type TemplateOption = {
  schoolPeriod: number;
  coopPeriod: number;
  pgwpPeriod: number;
  workingholidayPeriod: number;
  monthsOfStartSchool: number[];
};
