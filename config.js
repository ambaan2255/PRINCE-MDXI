const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VU25KqOBT9l7xqHbnIRau6ahAQEVG8X6bmIULEYAiYBBVP9b9P0X369HmYOdPDU9hJ9lp77bXzHdACcxSgGvS/g5LhGxSoWYq6RKAPBtXphBhogwQKCPqgNdruH35GIfHRZFIX82GsMYjRfuqUG0NyvH3mCNt6XvLwBby2QVkdCY5/k3BVTPCwvlkxMR+nWexQ2wjvt24rWjrZqjc29PE1COb84ebpC3htMkLMME3d8oxyxCAJUB1BzL5GP5hu1nKHpThRYu61Vo4RbB8wj1bapXvZxKRnjmaDGZ8f8/XX6HNoDbWnX9yMkOzpyOHFeayo7JA9gnw8pUudRJJ0ODvu4vJOn+OUosRPEBVY1F/W3bdQh+Lh3es8h9fbk2C12zMJoa4dYNk8Ik8/PgfZQCXE/xpxTx1EaXe5WvBiQGZ0F93NhTZEXieWMuJ28kV68XknXKok/ZV4xD68cvk/uqdhMTtRZ1/Bo76wU/jEDN78A685XJ3rWEldv7PF+NxRu1+j39mkl4UpH5wynGyd3fqRz4Jj2DK87DTztsRJe8piE6U8cONP+lBU7HcsR/fTI9yPzhVxDW9/mmpqYV43KtwgY+e4XbHXdA1XV6dieHt43pf3REJozuaaMVa9mzRynq005kdnuzvERiklhlcn1vzlraILqv0E9OXXNmAoxVwwKHBBm1hPbQOY3JYoZki8qQvQYT0O9In1GB3hGZGerXVNvD6S1dJlXtcrCzPXFcdWzNp8AW1QsiJGnKNkhLkoWB0izmGKOOj/+VcbUPQQ731r0FS5DU6YcbGmVUkKmHw09WMTxnFRUbGsaWw3C8RAX/oMIyEwTXkjY0Uhi8/4huwzFBz0T5Bw9LNAxFDyI/bzdnMrQQJiwkEf2EGUyjC13WAXSDH3vIGbWnZqgU+0j669y+LY0USzt9lx0bo+aVwXSSj02c2OVnpFj3EolLoOs3k1zouXf0jStDgauF6Lwmux2sxgBw/UzlPztbGQjrWl6PKuTrLoPJ+ME03Wh/HedYaP6cja3QPvQEN9vdpJ8BKdpTzgMu2Iao54y7m/NGgJuuEY/Qp29UyEH5ttOa+hrvgL+zldhfC6Q9ae0jQ0xnK2y6yQnTbrW1ef+UoSdCPzupy4Y7j3eoT6A2d+nU4GGXukxFoZ2mVsWe9+yt+MjBPQBz3Z0LRez+wqcrev6H/wb/emH7Asv1EkQBuQt2OyYZg9tWfIPblrGmZzstn4mA3y403Cb7ZpUje/J4zeRpzCBvC/od5FaKwkvbZ/yfHj0fiXwRvM71ndmpNCkU5XrqnhdbSaoIzdM6nFSkV1JgnnmS9N8OEKXl//aoOSQHEqWA76ANKEFTgBbcCKqvGmT0/Fb8Bsa+0789RuKieQC+vT7yucIy5gXoK+bOg9RdUMXX0/FbGiHEF+Bn3QPSwifQnaIK+tslwKKD7GB1jNN0598Po3uaW/CFkHAAA=', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
