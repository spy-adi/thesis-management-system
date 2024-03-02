const db = require('../models');
const Notifications = db.notifications;

const sendNotifications = async (targets, title, content, view_url) => {
    for (const target of targets) {
        await Notifications.create({ target, title, content, view_url, status: "unread" });
    }
}

module.exports = sendNotifications;