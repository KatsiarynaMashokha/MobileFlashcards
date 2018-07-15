import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';
import { NOTIFICATION_KEY } from '../constants/apiConstants';

export function clearLocalNotification() {
    
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(() => Notifications.cancelAllScheduledNotificationsAsync());
}

export function createLocalNotification() {

    return {
        title: 'You did not take a quiz today!',
        body: '👋 Do not forget to study today!',
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    };
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
        if(data === null) {
            Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
                if(status === 'granted') {
                    Notifications.cancelAllScheduledNotificationsAsync();

                    let tomorrow = new Date();
                    tomorrow.setDate(tomorrow.getDate() + 1);
                    tomorrow.setHours(19);
                    tomorrow.setMinutes(0);

                    Notifications.scheduleLocalNotificationAsync(
                        createLocalNotification(),
                        {
                            time: tomorrow,
                            repeat: 'day',
                        }
                    )

                    AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
                }
            })
        }
    });
}