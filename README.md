# Ryo Suzuki

## Installation

```
node server.js
```

```
npm run watch
```


To deploy
```sh
npm run deploy
npm run push
```


## Create Paper Thumbnails

Step 1:
Convert PDF to JPG with https://ezgif.com/pdf-to-jpg/

Step 2:
Run `node static/projects/convert.js directory paper`

Step 3:
Then, you can get `paper-01.jpg`, `paper-02.jpg`, `paper-03.jpg`, ....

Step 4:
Create `paper-original` directory and put them into it

Step 5:
Create `paper` directory for resized images

Step 6:
Run `node static/project/resize.js static/projects/name/paper-original paper`

Step 7:
Then, you can get the resized paper images


## Create Slide Thumbnails

Step 1:
Convert PDF to JPG with https://ezgif.com/pdf-to-jpg/

Step 2:
Run `node static/projects/convert.js directory slide`

Step 3:
Then, you can get `slide-01.jpg`, `slide-02.jpg`, `slide-03.jpg`, ....

Step 4:
Create `slide-original` directory and put them into it


## Prepare for the Videos

To compress mp4
https://www.ps2pdf.com/compress-mp4

To convert from mp4 to webm
https://www.zamzar.com/
https://www.ps2pdf.com/convert-video-to-webm

To convert from pdf to jpg
https://ezgif.com/pdf-to-jpg

To create a video poster
```
ffmpeg -i static/video/top.mp4 image.jpg -map 1 -map 0 -c copy
```

