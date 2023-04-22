#This is PROD

# ReduxSimple-IncrementDecrement

Three main stages: Action, Reducer, Store

Action--> What actions we are taking

Reducer--> Takes current state and action as argument ==> The function which is having the code on how to change the state

Store--> It has state, action and reducer. We have only one single store in Redux application. Every Redux store has a single root reducer function.

1. Single source of truth
2. State is Read-Only
3. Immutability, one-way data flow, Predictability of outcome
4. Chanes are made with Pure Reducer Function

   Pure functions: It gives same outputz everytime
