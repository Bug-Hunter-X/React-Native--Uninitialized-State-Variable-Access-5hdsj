```javascript
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function MyComponent() {
  const [count, setCount] = useState(0); // Provide initial value

  // No longer an error: count is always defined
  return (
    <View>
      <Text>{count}</Text> 
      <Button title="Increment" onPress={() => setCount(prevCount => prevCount + 1)} />
    </View>
  );
}

export default MyComponent;
```