const getUserMedia = require('get-user-media-promise');
const MicrophoneStream = require('microphone-stream').default;

async function start() {
    const micStream = new MicrophoneStream();
    try {
        const stream = await getUserMedia({video: false, audio: true});
        micStream.setStream(stream);
    } catch (error) {
        console.log(error);
    }

    micStream.on("data", chunk => {
        const raw = MicrophoneStream.toRaw(chunk);
        
    })
    micStream.on("format", format => {
        console.log(format);
    })
}

document.querySelector("button").onclick = start;