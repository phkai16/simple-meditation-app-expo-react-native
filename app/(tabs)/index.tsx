import { Tabs } from 'expo-router'

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name='tab1' options={{ title: 'Tab 1' }} />
      <Tabs.Screen name='tab2' options={{ title: 'Tab 2' }} />
    </Tabs>
  )
}
