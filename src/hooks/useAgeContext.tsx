import React from 'react'
import {calcAge} from '../lib/age'

const PERSONA_AGE = 25;
const date = new Date();
const personaBirthYear = date.getFullYear() - PERSONA_AGE;
date.setFullYear(personaBirthYear)
const personaBirth = date.toISOString();


type AgeContextRawValue = {
  birth: string,
  age: number;
};
type AgeContextFunc = {
  setBirth: Function
}
type AgeContextValue = AgeContextRawValue & AgeContextFunc
const defaultValue = {
  birth: personaBirth,
  age: PERSONA_AGE,
  setBirth: () => {throw new Error('this func should be replaced but not yet') },
};

const AgeContext = React.createContext<AgeContextValue>(defaultValue)

export const AgeContextProvider:React.FC = ({children}) => {
  const [birth, setBirth] = React.useState(defaultValue.birth);
  const age = calcAge(birth)

  const value: AgeContextValue = {
    birth,
    age,
    setBirth,
  }

  return(
    <AgeContext.Provider value={value}>
      {children}
    </AgeContext.Provider>
  )
}

export const useAgeContext = () => React.useContext(AgeContext)