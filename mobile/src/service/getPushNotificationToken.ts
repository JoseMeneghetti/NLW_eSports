import * as Notifications from "expo-notifications";

export async function getPushNotification() {
  const { granted } = await Notifications.getPermissionsAsync();

  if (!granted) {
    await Notifications.requestPermissionsAsync();
  }

  if (granted) {
    const pushToken = await Notifications.getExpoPushTokenAsync();
    console.log("AAAAAAAAAAA", pushToken.data);
    return pushToken.data;
  }
}
