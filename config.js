const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VU27KiOBT9lam8YrXKRcCqUzURUVFR8Y5T/RAhQJSbSUChy3+fwtOnux9mes7wFHLZe+211t7fQJoRhme4Av1vIKekRBw3S17lGPTBoAgCTEEL+Igj0Ac7yMvlwLS1+BKF08Oig5MTzQ7jvTTeI3W3gktpHdJy7ezvb+DZAnlxjon3m4Bo8thoq8KVF6Z50tbzULGMqTmzyuCIYnxMO+mmc9UXSRWZb+DZRESEkjQ08wgnmKJ4hqsVIvRz8PHyshV3wW2UWFJBbdXL5pZYn2BoT6yOUGb45B73RWCsRftz8IXNuahFU8BVoG29ece/sflQGWyr9sI8bmh7XK9IeCPTaO++w2ckTLFv+TjlhFef5j1ZOYPQFKP7APbuJTKGMpLaEmkLM9IbrnqHGR/rji9Fg/STwMNBOgizazBQzMrcJkPhIrl+nllw583vFSVLyB8Hsq6c2voV+Ip+eOX6f3h35/pdsdpCdBXUlSGr1uBYF4YSTdX6FGYyjB72xN7fFqPP2ma8Ed25Dhe5wGBPrny5120vDlsuw03SKVBXEWFW3g6mJ7Kf8BEv6O9QdgYzQRvGcU+45N5gcq7jNfeXrLqd3U22fLCjlPCUL4dErQ3aLkbKo9x5vaP0mOuXo7o1y5qJjr22pxc0F0rh4Y/rw+X+9qroiivLB/3uswUoDgnjFHGSpa89XW0B5Jcb7FHMX/SCks5G59FWvZ35sGME7buw1FK1y8ZibwavwVFeVf7+UNpzRXsDLZDTzMOMYX9CGM9oZWPGUIgZ6P/1tQVS/ODvwjXppG4LBIQyvkuLPM6Q/6HqxyHyvKxI+aZKPaNZYAr6nZ/bmHOShqzhsUgR9SJSYiNCnIF+gGKGf1SIKfZBn9MC/+haI/Mb4l3HUacadEELJC9BiA/6QO+qiqLrmix25b7U+5N9uTdhUZ5/STEHLZCi5jZgRY4pyegfjwy0QPx621VVTZd0tat3ZU3VmufNwfMH7CaLjzkiMQN9YEwJuk1MJ3fLdQ1dF1YQziBsqPwo88Mv73qscyOq8iExmDrXU9EwxflKg35PE0pDuS06WwXOFR5ly53zT0GayVmUCMVT8WAWi4SZwXla2vpopl6w6viFfM0W8zbkbiSpk0oxgmW8LbehYT3U/HyyzYxPDDk5JZVdTx6XRaTH8uMqQvjWZPNxSTz8a7KxfZeXU5Huor3gVel2YgSrvaJdJxLb5OdxmUtDv+0eRulYU/xyc6PRBs5k7bSslCDvKaLpS7WHdJmFir0j+blddLeR8+7kVyfF3ycYeXmsEbD5DQh+DYTvQv2noO/AG991nq1fYnwfMf/SpoMdcjLv5sghXVbtkx5GC1K34QSXK3ov0MU3BccQzi4axiZ4Pr+2QB4jHmQ0acyTnBFoAZoVjYutNMh+k8mAO2vohEZTdowYhz87Y0sSzDhKctDvqmpXEmVNVt5vrWiWTxCLQB/Ip/Wqt2lsXsE833DEPxoNwOaz8AI8/wZh/oDvhAcAAA==', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
