import React, {useEffect} from 'react';
import {tw} from 'twind'

// we don't even need to call the tw function to cause trouble

export const App = () => {

  useEffect(() => {console.log('it works, uncomment the tw import to break it')}, [])

  return (
    <div classname={`p-4 bg-red-500 text-white`}>
      <h1>Welcome to Meteor!</h1>
    </div>
  )
};
