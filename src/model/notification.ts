const notification = {
    notificationQueue: [] as Array<[string, string]>,
    isShown: false,
    __timeout: -1,

    setVisible: (visible?: boolean) => {}, // binded in Notification.tsx
    setText: (headerText?: string, descriptionText?: string) => {}, // binded in Notification.tsx

    showNotification: (headerText?: string, descriptionText?: string, options?: { urgent?: boolean }) => {
        turing.notification.notificationQueue.push([headerText ?? "", descriptionText ?? ""]);
        if (turing.notification.isShown) {
            if (options && options.urgent) {
                turing.notification.setVisible(false);
                if (turing.notification.__timeout !== -1) clearTimeout(turing.notification.__timeout);
                turing.notification.__timeout = setTimeout(() => {
                    turing.notification.setText(...turing.notification.notificationQueue.pop());
                    turing.notification.setVisible(true);
                    turing.notification.__timeout = -1;
                }, turing.config.NOTIFICATION_DELAY);
                return;
            }
        } else {
            turing.notification.setText(...turing.notification.notificationQueue.shift());
            turing.notification.setVisible(true);
        }
    },

    onHide: () => {
        turing.notification.isShown = false;
        if (turing.notification.__timeout !== -1) return;
        if (turing.notification.notificationQueue.length > 0) {
            turing.notification.__timeout = setTimeout(() => {
                turing.notification.setText(...turing.notification.notificationQueue.shift());
                turing.notification.setVisible(true);
                turing.notification.__timeout = -1;
            }, turing.config.NOTIFICATION_DELAY);
        }
    }
};

export default notification;
