# ReduxSimple-IncrementDecrement

Three main stages: Action, Reducer, Store

Action--> What actions we are taking ?
In action we need to have a type field.

When Action is called then Reducers are checked where how your actions are transformed from current state to next state.

Reducer--> How your actions transform the current state to next state by modifying store

Takes current state and action as argument ==> The function which is having the code on how to change the state

Store--> GLOBALISED STATE

It has state, action and reducer. We have only one single store in Redux application. Every Redux store has a single root reducer function.

Dispatch --> This is where action is executed.

Dispatch this action to reducer

1. Single source of truth
2. State is Read-Only
3. Immutability, one-way data flow, Predictability of outcome
4. Chanes are made with Pure Reducer Function

   Pure functions: It gives same outputz everytime

# How to re-create the application in your local environment

npm install

This will download and install all the packages specified in the dependencies and devDependencies sections of your package.json file. If the file is not present, it will create a new one for you.

If you want to save a new package as a dependency or devDependency in your package.json file, you can use the following command
