const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const data = [
    'https://pixabay.com/get/54e9d24a485baa14f6d1867dda6d49214b6ac3e45659724c772c73d494/landscape-2979296_1920.jpg',
    'https://pixabay.com/get/55e7d6404b53a914f6d1867dda6d49214b6ac3e45659724c772c72d493/nature-3733115_1920.jpg',
    'https://pixabay.com/get/55e7d7464d50a914f6d1867dda6d49214b6ac3e45659724c772b7bd494/nature-3725725_1920.jpg',
    'https://pixabay.com/get/55e7dc454c51af14f6d1867dda6d49214b6ac3e45659724c772b7bd391/nature-3796633_1920.jpg',
    'https://pixabay.com/get/52e6d14b4250ae14f6d1867dda6d49214b6ac3e45659724c772b7adc94/nature-4648822_1920.jpg',
    'https://pixabay.com/get/55e6dd4b4a56af14f6d1867dda6d49214b6ac3e45659724c772b79d192/landscape-3688043_1920.jpg',
    'https://pixabay.com/get/52e1d6444256af14f6d1867dda6d49214b6ac3e45659724c772b78d194/nature-4137843_1920.jpg',
    'https://pixabay.com/get/55e1dd4b4d51a414f6d1867dda6d49214b6ac3e45659724c772b7fd090/travel-3188738_1920.jpg',
  ];

  res.send(data);
});

module.exports = router;
