import { Dispatch, SetStateAction } from 'react';
import { AxiosDayType } from './AxiocDayType';
import { AxiosWeekType } from './AxiosWeekType';

export type ContextDataType = {
  city: string,
  setCity: Dispatch<SetStateAction<any | undefined>>,
  dataDay: AxiosDayType | undefined,
  dataWeek: AxiosWeekType | undefined
};
