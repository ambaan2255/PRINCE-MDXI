const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VU2bKiSBD9lYl61WgBUcCIGzGCKIoKKOAy0Q8lFIsilFWFgB3++wR36dsPMz13eCpqyTx5zsn8AfIipchEDRj9AJikd8hQu2QNRmAE1DKKEAFdEEIGwQhsjX5HJvPh9BacRXU7SXB0plMm3Ki188/zo3/0b8bSwoOd/gKeXYDLU5YGvwkoLMKHrp90I+dJJxELDPNYpwbaNZvt2poVpRmckhzZF9d7Ac82IkxJmsc6TtAVEZiZqLFhSr4GX1smtR5dNGvTu10vqalZws3vTFECXeY91td0fq4KOVb53eFr8HfnKVT2+uneq3TuPM+9GC07ES4OpZtjxawf64zt2YkrmvEbfJrGOQrnIcpZypov896xV4vp8UqKh+RYcgOxYeauoFQwo2tFOewcEiVxpR6ZH38NuL6geXm3U7ZXqsQoJs3qNqGupj+W+nrRD3jX0e6SGgkLJ/4VuE0+vHL5P7zrpqLWy/o6Fx9erUoTwS5mIuLXzLVsZ3quZ8o8yDdrd7abfw2+tsuXdNzX7llRchW9Z1XZd6RHRJbxfbnaCYll4t1j2RlUxSd8yEryO5T+4DIkVC8lcbtg5VKS8Xplnw3Si6Mg8uwgMheE+Re+fqgDboUqycD2RWK7jlO4gVYpeFbvh2p2LoyNIQpyEnF+PolfXiu6oGYeghH/7AKC4pQyAlla5O3eQOkCGN63KCCIvbILDhtPD8zZ+moZjaXutc6xN1yKHNdYZWkeZf/GH/2p501np/EL6AJMigBRikIjpawgzQpRCmNEweiv712Qo5q96dZm6/NdEKWEMi8vcVbA8EPUj0MYBEWZs22TB1q7QASMuM9txFiax7SlscwhCZL0jrQEMgpGEcwo+lkgIigEI0ZK9LNptSJseR8Ohs5x7sxAF1xf9UhDMAIKLw0GiiKLAi+OBOVP+q1qw0KMv+WIgS7IYXsb0BIjkhbkj7oAXZC9vuUlSVb6isQrvChLcvu8PXj+hN1mCRGDaUZb96y3/gUdVH3l0lSuZrOxHo+1eAw+y/ywy5seZ92pZ1mMZf+4nZQTfJJn/EaW3Mkmmp/wzK8eSIPYNe04ePmHIGAEzFAsa/c+GOpIWMtjcgoGF7iR/HUa75XAVZauftwle6u/WeZBgm5LyewdA3P1sC6O4HR4u14tpp1+bwHvfl9E2fFm9tXqpc0WonsaoF+T9eykbKaTIvM5IZ/YkhZyG8+QyVU0HVZyA26oeuJJSLdzS5dWgprmJdHvHi9IE3pbJeiGk5pf8OxY89z2QTV6QNX43civjZS9D7D01WOtgO1vlKLXefAu1H8K+ga89R337P4S433C/EuXqodaX23wwYymOy+W4uGupzIvsriK2zez4SYLVv34evOas2iA5/N7F+AMsqgg19Y81xMEXUCKsnXxPI+K3w2ZsTefOLHWlp1BysafneGmV0QZvGIw4iWJ4xVO5Ptvt2xSYAPSBIyAeNzYw21r82aM8ZZB9tFoYNx+ukDB829syJkDgwcAAA==', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
